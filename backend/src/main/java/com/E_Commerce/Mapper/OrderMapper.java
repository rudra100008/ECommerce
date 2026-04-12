package com.E_Commerce.Mapper;

import com.E_Commerce.DTO.OrderItemDTO;
import com.E_Commerce.DTO.OrderDTO.CreateOrderRequest;
import com.E_Commerce.DTO.OrderDTO.OrderResponse;
import com.E_Commerce.DTO.OrderDTO.UpdateOrderRequest;
import com.E_Commerce.Entity.Order;
import com.E_Commerce.Entity.OrderItem;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring", uses = OrderItemMapper.class)
public interface OrderMapper {

    // @Mapping(source = "id", target = "orderId")
    // @Mapping(source = "user.userId", target = "userId")
    // @Mapping(target = "orderItemIds", expression =
    // "java(getOrderItemIds(order.getOrderItems()))")
    // @Mapping(source = "payment.paymentId", target = "paymentId")
    // OrderDTO toOrderDTO(Order order);

    // default List<Integer> getOrderItemIds(List<OrderItem> orderItems) {
    // return orderItems == null ? new ArrayList<>() :
    // orderItems.stream().map(OrderItem::getId).toList();
    // }

    // default List<Integer> getOrderItemIdsFromDTO(List<OrderItemDTO> orderItems) {
    // return orderItems == null ? new ArrayList<>() :
    // orderItems.stream().map(OrderItemDTO::getOrderItemId).toList();
    // }

    // @Mapping(source = "orderId", target = "id")
    // @Mapping(target = "user", ignore = true)
    // @Mapping(target = "orderItems", ignore = true)
    // @Mapping(target = "payment", ignore = true)
    // Order toOrder(OrderDTO orderDTO);

    default List<OrderResponse> toOrderDTOs(List<Order> orders) {
        if (orders == null) {
            return new ArrayList<>();
        }
        return orders.stream()
                .map(this::toOrderResponse)
                .toList();
    }

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "user", ignore = true)
    @Mapping(target = "orderItems", ignore = true)
    @Mapping(target = "payment", ignore = true)
    @Mapping(target = "status", ignore = true)
    @Mapping(target = "totalAmount", ignore = true)
    @Mapping(target = "orderDate", ignore = true)
    @Mapping(target = "shippingAddress", ignore = true)
    Order toOrder(CreateOrderRequest orderRequest);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "user", ignore = true)
    @Mapping(target = "orderItems", ignore = true)
    @Mapping(target = "payment", ignore = true)
    @Mapping(target = "status", ignore = true)
    @Mapping(target = "totalAmount", ignore = true)
    @Mapping(target = "orderDate", ignore = true)
    @Mapping(source = "shippingAddressDTO", target = "shippingAddress")
    Order toOrder(UpdateOrderRequest orderRequest);

    @Mapping(target = "orderItemIds", source = "orderItems", qualifiedByName = "mapOrderItemIds")
    @Mapping(source = "payment.paymentId", target = "paymentId")
    @Mapping(source = "shippingAddress", target = "shippingAddressDTO")
    @Mapping(source = "id", target = "orderId")
    @Mapping(source = "user.userId", target = "userId")
    OrderResponse toOrderResponse(Order order);

    @Named("mapOrderItemIds")
    default List<Integer> mapOrderItemIds(List<OrderItem> orderItems) {
        return orderItems.stream()
                .map(OrderItem::getId)
                .toList();
    }
}
