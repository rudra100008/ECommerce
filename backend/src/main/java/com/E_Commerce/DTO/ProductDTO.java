package com.E_Commerce.DTO;


import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductDTO {
    private Integer productId;

    @NotBlank(message = "Product name is required")
    @Size(min = 2,max = 100,message = "Product name must be between 2 and 100 character.")
    private String productName;

    @Size(max = 1000,message = "Description should be less than 1000 characters")
    private String description;

    @NotNull(message = "Price is required.")
    @Positive(message = "Price cannot be negative or zero.")
    @DecimalMin(value = "0.01",message = "Price must be at least 0.01.")
    private Double price;

    @PositiveOrZero(message = "Discount cannot be negative.")
    @DecimalMax(value = "1000", message = "Discount to high.")
    private Double discount;

    private String sku;

    @NotNull(message = "Category is required.")
    private Integer categoryId;

    private List<String> imageUrls;

    @NotNull(message = "stock quantity is required")
    private Integer stockQuantity;

}
