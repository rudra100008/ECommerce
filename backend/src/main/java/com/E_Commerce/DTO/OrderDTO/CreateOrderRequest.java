package com.E_Commerce.DTO.OrderDTO;

import java.util.List;
import com.E_Commerce.DTO.OrderItemDTO;

public record CreateOrderRequest(Integer userId,List<OrderItemDTO> orderItems) {}
