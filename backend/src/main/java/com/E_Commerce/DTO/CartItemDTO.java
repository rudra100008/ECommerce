package com.E_Commerce.DTO;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class CartItemDTO {
    private Integer cartItemId;
    private Integer quantity;
    private Integer productId;
    private Integer cartId;
}
