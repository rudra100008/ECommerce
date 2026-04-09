package com.E_Commerce.Entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString(exclude = {
        "order",
        "product"
})
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
    private Integer id;
    private Integer quantity;
    private Double priceAtPurchase;
    private Double discountAtPurchase;
    private Double subTotal; // (priceAtPurchase - discountAtPurchase) * quantity


    @ManyToOne
    @JoinColumn(name = "order_id",nullable = false)
    private Order order;

    @ManyToOne
    @JoinColumn(name = "product_id",nullable = false)
    private Product product;


    //helper method
    public Double getSubTotal() {
        double price = priceAtPurchase != null ? priceAtPurchase : 0.0;
        double disc  = discountAtPurchase != null ? discountAtPurchase : 0.0;
        int qty      = quantity != null ? quantity : 0;
        return (price - disc) * qty;
    }
}
