package com.E_Commerce.Mapper;

import com.E_Commerce.DTO.OrderDTO;
import com.E_Commerce.Entity.Order;
import com.E_Commerce.Entity.OrderItem;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring",uses = OrderItemMapper.class)
public interface OrderMapper {

    @Mapping(source = "id",target = "orderId")
    @Mapping(source = "user.userId",target = "userId")
    @Mapping(target = "orderItemIds", expression = "java(getOrderItemIds(order.getOrderItems()))")
    @Mapping(source = "payment.paymentId",target = "paymentId")
    OrderDTO toOrderDTO(Order order);

    default List<Integer> getOrderItemIds(List<OrderItem> orderItems) {
        return orderItems == null ? new ArrayList<>() :
                orderItems.stream().map(OrderItem::getId).toList();
    }

    @Mapping(source = "orderId", target = "id")
    @Mapping(target="user",ignore = true)
    @Mapping(target = "orderItems",ignore = true)
    @Mapping(target = "payment",ignore = true)
    Order toOrder(OrderDTO orderDTO);

    default List<OrderDTO> toOrderDTOs(List<Order> orders) {
        if (orders == null) {
            return new ArrayList<>();
        }
        return orders.stream()
                .map(this::toOrderDTO)
                .toList();
    }
}
