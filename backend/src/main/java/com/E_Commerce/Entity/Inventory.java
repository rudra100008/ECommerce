package com.E_Commerce.Entity;

import com.E_Commerce.Exception.InsufficientStockException;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "inventory")
public class Inventory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer stockQuantity; // number of products in stock

    private Integer reservedQuantity; //In carts but nor purchased

    @OneToOne
    @JoinColumn(name = "product_id",nullable = false)
    private Product product;

    //helper  method

    public Integer getAvailableQuantity(){
        return this.stockQuantity - this.reservedQuantity;
    }

    public Boolean isInStock(){
        return getAvailableQuantity() > 0;
    }

    public void reserveQuantity(Integer quantity){
        if(quantity > getAvailableQuantity()){
            throw new InsufficientStockException("Not enough stock available.");
        }
        this.reservedQuantity += quantity;
    }

    public void releaseReservedQuantity(Integer quantity){
        this.reservedQuantity -= quantity;
    }

    public void updateStockAfterPurchase(Integer purchaseQuantity){
        this.stockQuantity -= purchaseQuantity;
        this.reservedQuantity -= purchaseQuantity;
    }

}
