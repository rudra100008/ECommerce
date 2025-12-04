package com.E_Commerce.Services;

import com.E_Commerce.DTO.OrderItemDTO;
import com.E_Commerce.Entity.OrderItem;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface OrderItemService {
    List<OrderItemDTO> addOrderItemDTOs(List<OrderItemDTO> orderItemDTOList);
    List<OrderItem> addOrderItems(List<OrderItemDTO> orderItemDTOList);
}
