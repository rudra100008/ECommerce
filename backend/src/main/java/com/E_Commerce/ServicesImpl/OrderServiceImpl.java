package com.E_Commerce.ServicesImpl;

import com.E_Commerce.DTO.CartItemDTO;
import com.E_Commerce.DTO.OrderDTO;
import com.E_Commerce.DTO.OrderItemDTO;
import com.E_Commerce.DTO.ShippingAddressDTO;
import com.E_Commerce.Entity.*;
import com.E_Commerce.Enum.OrderStatus;
import com.E_Commerce.Exception.ResourceNotFoundException;
import com.E_Commerce.Mapper.OrderMapper;
import com.E_Commerce.Repository.*;
import com.E_Commerce.Securty.AuthUtils;
import com.E_Commerce.Services.OrderItemService;
import com.E_Commerce.Services.OrderServices;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

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


    @Override
    public OrderDTO createOrder(OrderDTO orderDTO, List<OrderItemDTO> orderItemDTOS) {
        User user = validateUser(orderDTO.getUserId());

        Order order = createAndSaveOrder(orderDTO,user);

        List<OrderItem> orderItems = createOrderItems(orderItemDTOS,order);

        updateOrderWithOrderItem(orderItems,order);

        Order savedOrder = this.orderRepository.save(order);
        return this.orderMapper.toOrderDTO(savedOrder);
    }

    @Override
    @Transactional
    public Double getSubTotal(List<CartItemDTO> cartItemDTOs) {
        List<Integer> productIds = cartItemDTOs.stream()
                .map(CartItemDTO::getProductId).toList();
        Map<Integer,Integer> itemMap = cartItemDTOs.stream()
                .collect(Collectors.toMap(
                        CartItemDTO::getProductId,
                        CartItemDTO::getQuantity
                ));

        List<Product> products = this.productRepository.findAllProductByIds(productIds);
        Map<Product,Integer> productQuantityMap = new HashMap<>();

        double subTotal = 0.0;

        for (Product product : products){
           Integer quantity = itemMap.get(product.getProductId());
            if (quantity != null && product.getTotalPrice() != null) {
                subTotal += quantity * product.getTotalPrice();
            }
        }
        System.out.println("SubTotal: "+subTotal);
        return subTotal;
    }


    @Override
    public void cancelOrder(Integer orderId) {
        Order order = this.orderRepository.findById(orderId)
                .orElseThrow(()-> new ResourceNotFoundException("Failed to cancel order:Order not found."));
        validateUser(order.getUser().getUserId());
        this.orderItemService.removeOrderItems(order.getOrderItems(),order.getUser());
        this.orderRepository.delete(order);

    }

    @Override
    public ShippingAddressDTO saveShippingAddress(ShippingAddressDTO shippingAddressDTO) {
        return null;
    }

    //helper method
    private User validateUser(Integer userId){
        User loggedInUser = this.authUtils.getLoggedInUser();
        if (!loggedInUser.getUserId().equals(userId)){
            throw new SecurityException("You can place order for your account.");
        }
        return this.userRepository.findById(userId)
                .orElseThrow(()-> new ResourceNotFoundException("User not found"));
    }
    private Order createAndSaveOrder(OrderDTO orderDTO, User user) {
        Order order = orderMapper.toOrder(orderDTO);
        order.setUser(user);
        order.setOrderDate(LocalDateTime.now());
        order.setStatus(OrderStatus.PENDING);
        order.setShippingAddress(orderDTO.getShippingAddress());

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
}
