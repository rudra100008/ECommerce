package com.E_Commerce.DTO;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class ProductDTO {
    private Integer productId;

    @NotBlank(message = "Product name is required")
    @Size(min = 2,max = 100,message = "Product name must be between 2 and 100 character.")
    private String productName;

    @Size(max = 10000,message = "Description should be less than 1000 characters")
    @NotBlank(message = "description is required")
    private String description;

    @NotNull(message = "Price is required.")
    @Positive(message = "Price cannot be negative or zero.")
    @DecimalMin(value = "0.01",message = "Price must be at least 0.01.")
    private Double price;

    @PositiveOrZero(message = "Discount cannot be negative.")
    @DecimalMax(value = "2000", message = "Discount to high.")
    private Double discount;

    private String sku;


    private Integer categoryId;

    private List<String> imageUrls;

    @NotNull(message = "stock quantity is required")
    @Min(value = 1,message = "At least 1 item is required in stock")
    private Integer stockQuantity;
    private Integer reservedQuantity;
    private Integer availableQuantity;
    private Boolean isActive;
    @JsonProperty("isInStock")
    private boolean isInStock;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

}
