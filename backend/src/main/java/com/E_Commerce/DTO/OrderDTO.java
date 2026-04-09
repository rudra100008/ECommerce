package com.E_Commerce.DTO;


import com.E_Commerce.Enum.OrderStatus;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

import java.time.LocalDateTime;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public record OrderDTO(
        @NotNull
        Integer orderId,
        LocalDateTime orderDate,
        OrderStatus status,
        Double totalAmount,

        @NotNull(message = "userId is null.")
        Integer userId,

        @NotNull(message = "full name is required.")
        @NotBlank(message = "full name is required.")
        String fullName,
        @NotBlank(message = "Phone number is required.")
        @NotNull(message = "Phone number is required.")
        @Pattern(regexp = "^9\\d{9}$", message = "Phone number must start with 9 and have 10 digits")
        String phoneNumber,



        List<Integer> orderItemIds,

        Integer paymentId,

        LocalDateTime createdAt,
        LocalDateTime updatedAt,

        @Valid ShippingAddressDTO shippingAddressDTO
        ){


}
