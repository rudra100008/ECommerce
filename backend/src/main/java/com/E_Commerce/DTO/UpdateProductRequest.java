package com.E_Commerce.DTO;

import jakarta.validation.constraints.*;

public record UpdateProductRequest(
        @NotNull(message = "Product Id is required")
        Integer productId,
        @NotNull(message = "Category Id is required")
        Integer categoryId,

        @Size(min = 2,max = 1000)
        String productName,
        @Size(max = 10000)
        String description,
        @Positive
        @DecimalMin("0.01")
        Double price,
        @PositiveOrZero
        @DecimalMax("2000")
        Double discount,
        @Min(value = 1)
        Integer stockQuantity,
        Boolean isActive
) {
}
