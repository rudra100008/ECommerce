package com.E_Commerce.ServicesImpl;

import com.E_Commerce.DTO.CartItemDTO;
import com.E_Commerce.DTO.OrderDTO;
import com.E_Commerce.DTO.OrderItemDTO;
import com.E_Commerce.DTO.ShippingAddressDTO;
import com.E_Commerce.Entity.*;
import com.E_Commerce.Entity.AddressDataSet.District;
import com.E_Commerce.Entity.AddressDataSet.Municipality;
import com.E_Commerce.Entity.AddressDataSet.Province;
import com.E_Commerce.Enum.OrderStatus;
import com.E_Commerce.Exception.ResourceNotFoundException;
import com.E_Commerce.Mapper.OrderMapper;
import com.E_Commerce.Mapper.ShippingAddressMapper;
import com.E_Commerce.Repository.*;
import com.E_Commerce.Securty.AuthUtils;
import com.E_Commerce.Services.AddressDataSet.DistrictService;
import com.E_Commerce.Services.AddressDataSet.MunicipalityService;
import com.E_Commerce.Services.AddressDataSet.ProvinceService;
import com.E_Commerce.Services.OrderItemService;
import com.E_Commerce.Services.OrderServices;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderServices {
    private final OrderRepository orderRepository;
    private final OrderItemService orderItemService;
    private final OrderMapper orderMapper;
    private final ProductRepository productRepository;
    private final UserRepository userRepository;
    private final AuthUtils authUtils;
    private final ReservationRepository reservationRepository;
    private final InventoryRepository inventoryRepository;
    private final ShippingAddressMapper shippingAddressMapper;
    private final ProvinceService provinceService;
    private final DistrictService districtService;
    private final MunicipalityService municipalityService;


    @Override
    @Transactional
    @CacheEvict(value = "orders",allEntries = true)
    public OrderDTO createOrder(OrderDTO orderDTO, List<OrderItemDTO> orderItemDTOS) {
        User user = validateUser(orderDTO.getUserId());

        checkDraftOrderByUserId(user.getUserId());

        Order order = createAndSaveOrder(orderDTO,user);

        List<OrderItem> orderItems = createOrderItems(orderItemDTOS,order);

        updateOrderWithOrderItem(orderItems,order);

        Order savedOrder = this.orderRepository.save(order);
        return this.orderMapper.toOrderDTO(savedOrder);
    }

    @Override
    @Transactional(readOnly = true)
    public Double getSubTotal(List<CartItemDTO> cartItemDTOs) {
        List<Integer> productIds = cartItemDTOs.stream()
                .map(CartItemDTO::getProductId).toList();
        Map<Integer,Integer> itemMap = cartItemDTOs.stream()
                .collect(Collectors.toMap(
                        CartItemDTO::getProductId,
                        CartItemDTO::getQuantity
                ));

        List<Product> products = this.productRepository.findAllProductByIds(productIds);
        return  products.stream()
                .filter(product -> itemMap.containsKey(product.getProductId()) && product.getTotalPrice() != null)
                .mapToDouble(product -> itemMap.get(product.getProductId()) * product.getTotalPrice() )
                .sum();
    }


    @Override
    @Transactional
    @CacheEvict(value = "orders",allEntries = true)
    public void cancelOrder(Integer orderId) {
        Order order = this.orderRepository.findById(orderId)
                .orElseThrow(()-> new ResourceNotFoundException("Failed to cancel order:Order not found."));
        validateUser(order.getUser().getUserId());
        this.orderItemService.removeOrderItems(order.getOrderItems(),order.getUser());
        this.orderRepository.delete(order);

    }

    @Override
    @Transactional
    @CacheEvict(value = "orders",allEntries = true)
    public OrderDTO saveShippingAddress(ShippingAddressDTO shippingAddressDTO,Integer orderId,Integer userId) {
        User user = validateUser(userId);
        Order order = this.orderRepository.findPendingOrderByOrderIdAndUserId(
                orderId,
                user.getUserId()
        );
        ShippingAddress shippingAddress = this.shippingAddressMapper.toShippingAddress(shippingAddressDTO);
        order.setShippingAddress(shippingAddress);
        order.setOrderDate(LocalDateTime.now().plusWeeks(2));
        Order savedOrder =this.orderRepository.save(order);
        return   this.orderMapper.toOrderDTO(savedOrder);
    }

    @Override
    @Transactional
    @CacheEvict(value = "orders",allEntries = true)
    public OrderDTO saveFullNameAndPhoneNumberInOrder(OrderDTO orderDTO) {
        validateUser(orderDTO.getUserId());
        validateFullNameAndPhoneNumber(orderDTO);
        Order order = this.orderRepository.findPendingOrderByOrderIdAndUserId(orderDTO.getOrderId(), orderDTO.getUserId());
        order.setFullName(orderDTO.getFullName());
        order.setPhoneNumber(orderDTO.getPhoneNumber());
        Order savedOrder = this.orderRepository.save(order);
        return this.orderMapper.toOrderDTO(savedOrder);
    }

    @Override
    @Transactional(readOnly = true)
    @Cacheable(value = "orders",key = "'order_' + #orderId + '_user_' + #userId ")
    public OrderDTO getOrderDetails(Integer orderId, int userId) {
        User user = validateUser(userId);

        Order order = this.orderRepository.findPendingOrderByOrderIdAndUserId(orderId,user.getUserId());

        if(order == null){
            throw new ResourceNotFoundException("Order not found for user: "+ user.getUsername());
        }

        ShippingAddressDTO shippingAddressDTO = this.shippingAddressMapper.toShippingAddressDTO(order.getShippingAddress());
        OrderDTO orderDTO = this.orderMapper.toOrderDTO(order);

        modifyShippingAddressName(shippingAddressDTO);

        orderDTO.setShippingAddressDTO(shippingAddressDTO);
        return orderDTO;
    }

    @Override
    @Transactional
    @Cacheable(value = "orders",key = "'draft_' + #orderId + '_user_' + #userId ")
    public OrderDTO getDraftOrdersOfUser(int userId,int orderId) {
        User user =validateUser(userId);
        Order order = this.orderRepository.findDraftOrderByOrderIdAndUserId(user.getUserId(),orderId);
        return this.orderMapper.toOrderDTO(order);
    }

    //helper method
    private User validateUser(Integer userId){
        User loggedInUser = this.authUtils.getLoggedInUser();
        if (!loggedInUser.getUserId().equals(userId)){
            throw new SecurityException("You can place order for your account.");
        }
        return loggedInUser;
    }
    private void validateFullNameAndPhoneNumber(OrderDTO orderDTO){
        if (orderDTO.getFullName() == null || orderDTO.getFullName().trim().isEmpty()){
            throw new RuntimeException("Full Name is required");
        }
        if(orderDTO.getPhoneNumber() == null || orderDTO.getPhoneNumber().trim().isEmpty()){
            throw new RuntimeException("Phone number is required");
        }
    }
    private Order createAndSaveOrder(OrderDTO orderDTO, User user) {
        Order order = orderMapper.toOrder(orderDTO);
        order.setUser(user);
        order.setOrderDate(LocalDateTime.now());
        order.setStatus(OrderStatus.DRAFT);
        if(orderDTO.getShippingAddressDTO() != null){
            ShippingAddress shippingAddress = this.shippingAddressMapper.toShippingAddress(orderDTO.getShippingAddressDTO());
            order.setShippingAddress(shippingAddress);
        }

        order.setOrderItems(new ArrayList<>());

        return orderRepository.save(order);
    }
    private List<OrderItem> createOrderItems(List<OrderItemDTO> orderItemDTOs,Order order){
        List<OrderItemDTO> updatedDTOs = orderItemDTOs.stream()
                .map(dto->
                        OrderItemDTO.builder()
                            .orderItemId(dto.getOrderItemId())
                            .orderId(order.getId())
                            .quantity(dto.getQuantity())
                            .priceAtPurchase(dto.getPriceAtPurchase())
                            .discountAtPurchase(dto.getDiscountAtPurchase())
                            .productId(dto.getProductId())
                            .subTotal(dto.getSubTotal())
                            .build()

                ).toList();

        return this.orderItemService.addOrderItems(updatedDTOs);
    }

    // this helper methods add orderItems in order class orderItems
    private void updateOrderWithOrderItem(List<OrderItem> orderItems ,Order order){
        order.getOrderItems().clear();

        for (OrderItem orderItem:orderItems){
            order.addOrderItem(orderItem);
        }
        Double totalAmount = getTotalAmount(orderItems);
        order.setTotalAmount(totalAmount);
    }

    private Double getTotalAmount(List<OrderItem> orderItems){
      return orderItems.stream()
              .map(OrderItem::getSubTotal)
              .filter(Objects::nonNull)
              .mapToDouble(Double::doubleValue)
              .sum();
    }

    private void modifyShippingAddressName(ShippingAddressDTO shippingAddressDTO){
        int provinceId = Integer.parseInt(shippingAddressDTO.getShippingProvince());
        int districtId = Integer.parseInt(shippingAddressDTO.getShippingDistrict());
        int municipalityId = Integer.parseInt(shippingAddressDTO.getShippingMunicipality());

        Province province = this.provinceService.fetchProvinceById(provinceId);
        District district = this.districtService.fetchById(districtId);
        Municipality municipality = this.municipalityService.fetchById(municipalityId);

        shippingAddressDTO.setShippingProvince(province.getEnglishName());
        shippingAddressDTO.setShippingMunicipality(municipality.getEnglishName());
        shippingAddressDTO.setShippingDistrict(district.getEnglishName());
    }

    private void checkDraftOrderByUserId(int userId){
        Order order = this.orderRepository.findDRAFTOrderByUser(userId);
        if(order != null){
            throw new IllegalArgumentException("Draft order found for user "+ order.getUser().getUsername());
        }
    }
}
