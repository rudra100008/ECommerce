package com.E_Commerce.Services;

import com.E_Commerce.Entity.Inventory;
import org.springframework.stereotype.Service;

@Service
public interface InventoryService {
    Inventory getProductDataInInventory(Integer productId);
    Inventory updateReservedQuantity(Integer productId,Integer reservedQuantity);
    Inventory releaseReservedStock(Integer productId, Integer quantity);
    Inventory updateStockQuantity(Integer productId,Integer stockQuantity);
}
