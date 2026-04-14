package com.E_Commerce.ServicesImpl;


import com.E_Commerce.DTO.OrderItemDTO;
import com.E_Commerce.DTO.ShippingAddressDTO;
import com.E_Commerce.DTO.OrderDTO.CreateOrderRequest;
import com.E_Commerce.DTO.OrderDTO.OrderResponse;
import com.E_Commerce.DTO.OrderDTO.UpdateOrderRequest;
import com.E_Commerce.Entity.*;
import com.E_Commerce.Entity.AddressDataSet.District;
import com.E_Commerce.Entity.AddressDataSet.Municipality;
import com.E_Commerce.Entity.AddressDataSet.Province;
import com.E_Commerce.Enum.OrderStatus;
import com.E_Commerce.Exception.ResourceNotFoundException;
import com.E_Commerce.Mapper.OrderMapper;
import com.E_Commerce.Mapper.ShippingAddressMapper;
import com.E_Commerce.Repository.*;
import com.E_Commerce.Services.AddressDataSet.DistrictService;
import com.E_Commerce.Services.AddressDataSet.MunicipalityService;
import com.E_Commerce.Services.AddressDataSet.ProvinceService;
import com.E_Commerce.Utils.AuthUtils;
import com.E_Commerce.Services.OrderItemService;
import com.E_Commerce.Services.OrderServices;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.*;

@Slf4j
@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderServices {

    private final OrderRepository orderRepository;
    private final OrderItemService orderItemService;
    private final OrderMapper orderMapper;
    private final AuthUtils authUtils;
    private final ShippingAddressMapper shippingAddressMapper;
    private final ProvinceService provinceService;
    private final DistrictService districtService;
    private final MunicipalityService municipalityService;

    @Override
    @Transactional
    @CacheEvict(value = "orders", allEntries = true)
    public OrderResponse createOrder(CreateOrderRequest request) {
        User user = validateUser(request.userId());
        checkDraftOrderByUserId(user.getUserId());

        Order order = createAndSaveOrder(request, user);  // use the helper

        List<OrderItem> orderItems = createOrderItems(request.orderItems(), order);
        updateOrderWithOrderItem(orderItems, order);

        Order savedOrder = orderRepository.save(order);
        return orderMapper.toOrderResponse(savedOrder);
    }

    @Override
    @Transactional
    @CacheEvict(value = "orders", allEntries = true)
    public void cancelOrder(Integer orderId) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Failed to cancel order: Order not found."));
        validateUser(order.getUser().getUserId());
        orderItemService.removeOrderItems(order.getOrderItems(), order.getUser());
        orderRepository.delete(order);
    }

    @Override
    @Transactional(readOnly = true)
    @Cacheable(value = "orders", key = "'order_' + #orderId + '_user_' + #userId")
    public OrderResponse getOrderDetails(Integer orderId, Integer userId) {
        User user = validateUser(userId);

        Order order = orderRepository.findPendingOrderByOrderIdAndUserId(orderId, user.getUserId());
        if (order == null) {
            throw new ResourceNotFoundException(
                    "Order not found for user: " + user.getUsername());
        }

        // convert IDs → names in shipping address
        ShippingAddressDTO shippingAddressDTO =
                shippingAddressMapper.toShippingAddressDTO(order.getShippingAddress());
        ShippingAddressDTO resolvedDTO = modifyShippingAddressName(shippingAddressDTO);

        // map to response then replace shippingAddressDTO with the resolved one
        OrderResponse base = orderMapper.toOrderResponse(order);
        return new OrderResponse(
                base.orderId(),
                base.userId(),
                base.orderDate(),
                base.status(),
                base.totalAmount(),
                base.fullName(),
                base.phoneNumber(),
                resolvedDTO,          // ← use resolved names not raw IDs
                base.orderItemIds(),
                base.paymentId(),
                base.createdAt(),
                base.updatedAt()
        );
    }

    @Override
    @Transactional
    @CacheEvict(value = "orders", allEntries = true)
    public OrderResponse updateOrder(Integer orderId, Integer userId, UpdateOrderRequest request) {
        User user = validateUser(userId);

        Order order = orderRepository.findPendingOrderByOrderIdAndUserId(
                orderId, user.getUserId());
        if (order == null) {
            throw new ResourceNotFoundException("Pending order not found.");
        }

        // apply fullName, phoneNumber, shippingAddress from request onto order
        order.setFullName(request.fullName());
        order.setPhoneNumber(request.phoneNumber());

        if (request.shippingAddressDTO() != null) {
            ShippingAddress shippingAddress =
                    shippingAddressMapper.toShippingAddress(request.shippingAddressDTO());
            order.setShippingAddress(shippingAddress);
        }

        order.setOrderDate(LocalDateTime.now().plusWeeks(2));
        Order saved = orderRepository.save(order);
        return orderMapper.toOrderResponse(saved);
    }

    // ── helpers ──────────────────────────────────────────────

    private User validateUser(Integer userId) {
        User loggedInUser = authUtils.getLoggedInUser();
        if (!loggedInUser.getUserId().equals(userId)) {
            throw new AccessDeniedException("You can only access your own orders.");
        }
        return loggedInUser;
    }

    private Order createAndSaveOrder(CreateOrderRequest request, User user) {
        Order order = orderMapper.toOrder(request);
        order.setUser(user);
        order.setOrderDate(LocalDateTime.now());
        order.setStatus(OrderStatus.DRAFT);
        order.setOrderItems(new ArrayList<>());
        return orderRepository.save(order);
    }

    private List<OrderItem> createOrderItems(List<OrderItemDTO> dtos, Order order) {
        List<OrderItemDTO> updatedDTOs = dtos.stream()
                .map(dto -> OrderItemDTO.builder()
                        .orderItemId(dto.getOrderItemId())
                        .orderId(order.getId())
                        .quantity(dto.getQuantity())
                        .priceAtPurchase(dto.getPriceAtPurchase())
                        .discountAtPurchase(dto.getDiscountAtPurchase())
                        .productId(dto.getProductId())
                        .subTotal(dto.getSubTotal())
                        .build())
                .toList();
        return orderItemService.addOrderItems(updatedDTOs);
    }

    private void updateOrderWithOrderItem(List<OrderItem> orderItems, Order order) {
        order.getOrderItems().clear();
        orderItems.forEach(order::addOrderItem);
        order.setTotalAmount(getTotalAmount(orderItems));
    }

    private Double getTotalAmount(List<OrderItem> orderItems) {
        return orderItems.stream()
                .map(OrderItem::getSubTotal)
                .filter(Objects::nonNull)
                .mapToDouble(Double::doubleValue)
                .sum();
    }

    private void checkDraftOrderByUserId(int userId) {
        Order order = orderRepository.findDRAFTOrderByUser(userId);
        if (order != null) {
            throw new IllegalArgumentException(
                    "Draft order already exists for user: " + order.getUser().getUsername());
        }
    }

    private ShippingAddressDTO modifyShippingAddressName(ShippingAddressDTO dto) {
        if (dto == null || dto.shippingProvince() == null
                || dto.shippingDistrict() == null
                || dto.shippingMunicipality() == null) {
            return dto;
        }
        try {
            int provinceId     = Integer.parseInt(dto.shippingProvince());
            int districtId     = Integer.parseInt(dto.shippingDistrict());
            int municipalityId = Integer.parseInt(dto.shippingMunicipality());

            Province     province     = provinceService.fetchProvinceById(provinceId);
            District     district     = districtService.fetchById(districtId);
            Municipality municipality = municipalityService.fetchById(municipalityId);

            return new ShippingAddressDTO(
                    district.getEnglishName(),
                    province.getEnglishName(),
                    municipality.getEnglishName(),
                    dto.shippingWardNumber(),
                    dto.shippingLandmark(),
                    dto.shippingArea(),
                    dto.houseNumber(),
                    dto.addressType()
            );
        } catch (NumberFormatException e) {
            log.warn("Shipping address already contains names, skipping conversion");
            return dto;
        }
    }
}
