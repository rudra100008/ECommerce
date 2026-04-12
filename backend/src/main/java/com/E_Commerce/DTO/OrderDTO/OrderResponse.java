package com.E_Commerce.DTO.OrderDTO;

import java.time.LocalDateTime;
import java.util.List;

import com.E_Commerce.DTO.ShippingAddressDTO;
import com.E_Commerce.Enum.OrderStatus;

public record OrderResponse(
        Integer orderId,
        Integer userId,
        LocalDateTime orderDate,
        OrderStatus status,          
        Double totalAmount,
        String fullName,
        String phoneNumber,
        ShippingAddressDTO shippingAddressDTO,
        List<Integer> orderItemIds,
        Integer paymentId,
        LocalDateTime createdAt,
        LocalDateTime updatedAt
) {}
