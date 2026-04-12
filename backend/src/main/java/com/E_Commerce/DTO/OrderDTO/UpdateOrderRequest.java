package com.E_Commerce.DTO.OrderDTO;

import com.E_Commerce.DTO.ShippingAddressDTO;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

public record UpdateOrderRequest(
        @NotNull Integer orderId,
        @NotNull(message = "fullName is required") @NotBlank(message = "full Name is required") String fullName,
        @NotBlank(message = "Phone number is required.") 
        @NotNull(message = "Phone number is required.") 
        @Pattern(regexp = "^9\\d{9}$", message = "Phone number must start with 9 and have 10 digits") String phoneNumber,
        @Valid ShippingAddressDTO shippingAddressDTO
    
    ) {
}
