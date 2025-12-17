package com.E_Commerce.Services;

import com.E_Commerce.DTO.CartItemDTO;
import com.E_Commerce.DTO.OrderDTO;
import com.E_Commerce.DTO.OrderItemDTO;
import com.E_Commerce.DTO.ProductDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface OrderServices {
    OrderDTO createOrder(OrderDTO orderDTO, List<OrderItemDTO> orderItemDTOS);
    Double getSubTotal(List<CartItemDTO> cartItemDTOs);
    void cancelOrder(Integer orderId);
}
