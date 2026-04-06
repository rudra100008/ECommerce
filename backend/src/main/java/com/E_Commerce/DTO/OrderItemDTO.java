package com.E_Commerce.DTO;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonIgnoreProperties(ignoreUnknown = true)
public class OrderItemDTO {
    private Integer orderItemId;
    private Integer quantity;
    private Double priceAtPurchase;
    private Double discountAtPurchase;
    private Double subTotal; // (priceAtPurchase - discountAtPurchase) * quantity

    private Integer orderId;


    private Integer productId;
    private String productName;
}
