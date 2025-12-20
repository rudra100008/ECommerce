package com.E_Commerce.Services;

import com.E_Commerce.Entity.Inventory;
import org.springframework.stereotype.Service;

@Service
public interface InventoryService {
    Inventory getProductDataInInventory(Integer productId);
    Inventory updateStockQuantity(Integer productId,Integer stockQuantity);
}
