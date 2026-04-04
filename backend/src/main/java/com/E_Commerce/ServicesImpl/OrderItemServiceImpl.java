package com.E_Commerce.ServicesImpl;

import com.E_Commerce.DTO.OrderItemDTO;
import com.E_Commerce.Entity.*;
import com.E_Commerce.Enum.ReservationStatus;
import com.E_Commerce.Exception.InsufficientStockException;
import com.E_Commerce.Exception.ResourceNotFoundException;
import com.E_Commerce.Mapper.OrderItemMapper;
import com.E_Commerce.Repository.*;
import com.E_Commerce.Services.OrderItemService;
import com.E_Commerce.Services.ReservationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class OrderItemServiceImpl implements OrderItemService {
    private final OrderItemRepository orderItemRepository;
    private final OrderItemMapper orderItemMapper;
    private final ProductRepository productRepository;
    private final OrderRepository orderRepository;
    private final InventoryRepository inventoryRepository;
    private final ReservationRepository reservationRepository;
    private final ReservationService reservationService; // Add this

    @Override
    @Transactional
    public List<OrderItemDTO> addOrderItemDTOs(List<OrderItemDTO> orderItemDTOList) {
        List<OrderItem> savedOrderItem = saveOrderItem(orderItemDTOList);
        return this.orderItemMapper.toOrderItemDTOs(savedOrderItem);
    }

    @Override
    @Transactional
    public List<OrderItem> addOrderItems(List<OrderItemDTO> orderItemDTOList) {
        return saveOrderItem(orderItemDTOList);
    }

    @Override
    @Transactional
    public void removeOrderItems(List<OrderItem> orderItems,User user) {
        removeOrderItemsAndChangeReservation(orderItems,user);
    }

    @Override
    public List<OrderItemDTO> fetchAllOrderItems(List<Integer> orderItemIds) {
        List<OrderItem> orderItems = this.orderItemRepository.findAllById(orderItemIds);
        if(orderItems.size() != orderItemIds.size()){
            log.info("Number of orderItemIds to fetch:{}",orderItemIds.size());
            log.info("Number of orderItem fetched:{}",orderItems.size());
            throw  new ResourceNotFoundException("One or more items not found");
        }
        return this.orderItemMapper.toOrderItemDTOs(orderItems);
    }

    private List<OrderItem> saveOrderItem(List<OrderItemDTO> dtos){
        Order order = getOrder(dtos.getFirst().getOrderId());
        User user = order.getUser(); // Get user from order

        Map<Integer, Product> productMap = getProductMap(dtos);

        checkUserReservations(dtos, user.getUserId());



        updateReservationStausToOrder(dtos,user);

        List<OrderItem> orderItems = dtos.stream()
                .map(orderItemDTO -> createOrderItem(orderItemDTO, order, productMap))
                .collect(Collectors.toList());

        return this.orderItemRepository.saveAll(orderItems);
    }

    private Map<Integer, Product> getProductMap(List<OrderItemDTO> dtos){
        validateOrderItemDTOs(dtos);
        Set<Integer> productIds = dtos.stream()
                .map(OrderItemDTO::getProductId)
                .filter(Objects::nonNull)
                .collect(Collectors.toSet());

        List<Product> productList = this.productRepository.findAllById(productIds);
        if(productList.size() != productIds.size()){
            throw new ResourceNotFoundException("One or more products not found");
        }

        return productList.stream()
                .collect(Collectors.toMap(Product::getProductId, Function.identity()));
    }

    private OrderItem createOrderItem(OrderItemDTO orderItemDTO, Order order, Map<Integer, Product> productMap){
        Product product = productMap.get(orderItemDTO.getProductId());
        if (product == null) {
            throw new ResourceNotFoundException("Product not found: " + orderItemDTO.getProductId());
        }

        Double subTotal = orderItemDTO.getSubTotal();
        if(subTotal == null){
            Double price = orderItemDTO.getPriceAtPurchase() != null ?
                    orderItemDTO.getPriceAtPurchase() : product.getPrice();
            Double discount = orderItemDTO.getDiscountAtPurchase() != null ?
                    orderItemDTO.getDiscountAtPurchase() : product.getDiscount();

            subTotal = (price - (discount != null ? discount : 0.0)) * orderItemDTO.getQuantity();
        }

        OrderItem orderItem = this.orderItemMapper.toOrderItem(orderItemDTO);
        orderItem.setProduct(product);
        orderItem.setOrder(order);
        orderItem.setSubTotal(subTotal);

        if(orderItem.getPriceAtPurchase() == null){
            orderItem.setPriceAtPurchase(product.getPrice());
        }
        if (orderItem.getDiscountAtPurchase() == null){
            orderItem.setDiscountAtPurchase(product.getDiscount());
        }

        return orderItem;
    }

    private void validateOrderItemDTOs(List<OrderItemDTO> dtos){
        if(dtos == null || dtos.isEmpty()){
            throw new IllegalArgumentException("Order item list is empty.");
        }

        Integer firstOrderId = dtos.getFirst().getOrderId();
        boolean sameOrderId = dtos.stream()
                .map(OrderItemDTO::getOrderId)
                .allMatch(orderId-> orderId != null && orderId.equals(firstOrderId));
        if(!sameOrderId){
            throw new IllegalStateException("All order items must have same order");
        }
        dtos.forEach(this::validateOrderItemDTO);
    }

    private void validateOrderItemDTO(OrderItemDTO dto){
        if (dto.getProductId() == null){
            throw new IllegalArgumentException("Product ID is required");
        }
        if (dto.getQuantity() == null || dto.getQuantity() <= 0) {
            throw new IllegalArgumentException("Quantity must be greater than 0");
        }
    }

    private void checkStockAvailability(List<OrderItemDTO> orderItemDTOS, Map<Integer, Product> productMap){
        for (OrderItemDTO orderItemDTO : orderItemDTOS){
            Product product = productMap.get(orderItemDTO.getProductId());
            Inventory inventory = this.inventoryRepository.findByProduct(product)
                    .orElseThrow(() -> new ResourceNotFoundException("Inventory not found for product: " + product.getProductName()));

            if(inventory.getAvailableQuantity() < orderItemDTO.getQuantity()){
                throw new InsufficientStockException(
                        "Insufficient stock for " + product.getProductName() +
                                ". Available: " + inventory.getAvailableQuantity() +
                                ", Requested: " + orderItemDTO.getQuantity());
            }
        }
    }

    private void checkUserReservations(List<OrderItemDTO> dtos, Integer userId) {
        List<Integer> productIds = dtos.stream().map(dto-> dto.getProductId()).toList();
        Map<Integer,Reservation> reservationMap = this.reservationRepository.findActiveReservations(userId,productIds,LocalDateTime.now()).stream()
                .collect(Collectors.toMap(r-> r.getInventory().getProduct().getProductId(),r-> r));

        for (OrderItemDTO dto : dtos) {
            Reservation reservation = reservationMap.get(dto.getProductId());
            if (reservation == null) {
                throw new IllegalArgumentException("No active reservation found for product: " + dto.getProductId());
            }

            if (!reservation.getReservedQuantity().equals(dto.getQuantity())) {
                throw new IllegalArgumentException(
                        String.format("Reservation quantity mismatch for product " + dto.getProductId() +
                                ". Reserved: " + reservation.getReservedQuantity() +
                                ", Ordered: " + dto.getQuantity()
                        )
                );
            }
        }
    }

    private void updateInventoryAndConvertReservations(List<OrderItemDTO> orderItemDTOS,
                                                       Map<Integer, Product> productMap,
                                                       Integer userId) {
        for (OrderItemDTO orderItemDTO : orderItemDTOS) {
            Product product = productMap.get(orderItemDTO.getProductId());

            Inventory inventory = this.inventoryRepository.findByProduct(product)
                    .orElseThrow(() -> new ResourceNotFoundException(
                            "Inventory not found for product: " + product.getProductName()));

            Reservation reservation = this.reservationRepository.findActiveReservationByUserAndProduct(
                    userId, orderItemDTO.getProductId(), LocalDateTime.now());
            if (reservation == null) {
                throw new ResourceNotFoundException("Active reservation not found for product: " + product.getProductName());
            }


            int newStockQuantity = inventory.getStockQuantity() - orderItemDTO.getQuantity();
            if (newStockQuantity < 0) {
                throw new InsufficientStockException(
                        "Stock update failed for " + product.getProductName() +
                                ". Not enough physical stock.");
            }

            inventory.setStockQuantity(newStockQuantity);
            this.inventoryRepository.save(inventory);

            reservation.setStatus(ReservationStatus.CONVERTED_TO_ORDER);
            this.reservationRepository.save(reservation);

            if (newStockQuantity == 0) {
                product.setIsActive(false);
                this.productRepository.save(product);
            }
        }
    }

private void updateReservationStausToOrder(List<OrderItemDTO> orderItems,User user){
        List<Reservation> reservations = new ArrayList<>();
        for (OrderItemDTO orderItem : orderItems){
            Reservation reservation = this.reservationRepository
                    .findActiveReservationByUserAndProduct(
                            user.getUserId(),orderItem.getProductId(),LocalDateTime.now()
                    );
            if (reservation == null){
                throw new ResourceNotFoundException(
                        String.format("Active reservation not found for product: %s",orderItem.getProductId())
                );
            }
            reservation.setStatus(ReservationStatus.CONVERTED_TO_ORDER);
            reservations.add(reservation);
        }
        this.reservationRepository.saveAll(reservations);
}
    private void removeOrderItemsAndChangeReservation(List<OrderItem> orderItems,User user){
        List<Reservation> reservations = new ArrayList<>();
        for (OrderItem orderItem : orderItems){
            Reservation reservation = this.reservationRepository
                    .findConvertedToOrderReservationByUserAndProduct(
                            user.getUserId(),
                            orderItem.getProduct().getProductId(),
                            LocalDateTime.now()
                    );
            if(reservation == null){
                throw new ResourceNotFoundException(String.format(
                        "Reservation for order not found for user '%s' and product '%s'"
                        , user.getUsername(), orderItem.getProduct().getProductName()
                ));
            }
            reservation.setStatus(ReservationStatus.ACTIVE);
            reservations.add(reservation);
        }
        this.reservationRepository.saveAll(reservations);
        this.orderItemRepository.deleteAll(orderItems);
    }

    private Order getOrder(int orderId){
        return this.orderRepository.findById(orderId)
                .orElseThrow(() -> new ResourceNotFoundException("Order not found with ID: " + orderId));
    }
}