package com.E_Commerce.Mapper;

import com.E_Commerce.DTO.OrderItemDTO;
import com.E_Commerce.Entity.OrderItem;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface OrderItemMapper {

    @Mapping(source = "orderItemId",target = "id")
    @Mapping(target = "order",ignore = true)
    @Mapping(target = "product",ignore = true)
    OrderItem toOrderItem(OrderItemDTO orderItemDTO);


    @Mapping(source = "id",target = "orderItemId")
    @Mapping(source = "order.id",target = "orderId")
    @Mapping(source = "product.productId",target = "productId")
    @Mapping(source = "product.productName",target = "productName")
    OrderItemDTO toOrderItemDTO(OrderItem orderItem);

    List<OrderItemDTO> toOrderItemDTOs(List<OrderItem> orderItems);
}
