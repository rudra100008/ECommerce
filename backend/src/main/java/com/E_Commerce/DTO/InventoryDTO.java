package com.E_Commerce.DTO;

import com.E_Commerce.Exception.InsufficientStockException;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class InventoryDTO {
    private Integer id;

    private Integer stockQuantity; // number of products in stock

    private Integer reservedQuantity; //In carts but not purchased

    private Integer productId;

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
