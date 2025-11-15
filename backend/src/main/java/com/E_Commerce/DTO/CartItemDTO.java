package com.E_Commerce.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CartItemDTO {
    private Integer cartItemId;
    private Integer quantity;
    private Integer productId;
    private Integer cartId;
}
