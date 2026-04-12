package com.E_Commerce.Services;

import com.E_Commerce.DTO.OrderDTO.CreateOrderRequest;
import com.E_Commerce.DTO.OrderDTO.OrderResponse;
import com.E_Commerce.DTO.OrderDTO.UpdateOrderRequest;

public interface OrderServices {
    OrderResponse createOrder(CreateOrderRequest request);
    OrderResponse getOrderDetails(Integer orderId, Integer userId);
    OrderResponse updateOrder(Integer orderId, Integer userId, UpdateOrderRequest request); // ← orderId added
    void cancelOrder(Integer orderId);
}
