package com.E_Commerce.ServicesImpl;

import com.E_Commerce.Entity.Inventory;
import com.E_Commerce.Entity.Product;
import com.E_Commerce.Exception.ResourceNotFoundException;
import com.E_Commerce.Repository.InventoryRepository;
import com.E_Commerce.Repository.ProductRepository;
import com.E_Commerce.Services.InventoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class InventoryServiceImpl implements InventoryService {
    private final InventoryRepository inventoryRepository;
    private final ProductRepository productRepository;
    @Override
    public Inventory getProductDataInInventory(Integer productId) {
        Product product = getProduct(productId);
        return getInventory(product);
    }

    @Override
    public Inventory updateReservedQuantity(Integer productId, Integer reservedQuantity) {
        Product product = getProduct(productId);
        Inventory inventory = getInventory(product);
        inventory.reserveQuantity(reservedQuantity);
         return  inventoryRepository.save(inventory);

    }
    @Override
    @Transactional
    public Inventory releaseReservedStock(Integer productId, Integer quantity) {
        Product product = getProduct(productId);
        Inventory inventory = getInventory(product);

        inventory.releaseReservedQuantity(quantity);

        return inventoryRepository.save(inventory);
    }

    @Override
    public Inventory updateStockQuantity(Integer productId, Integer stockQuantity) {
        return null;
    }
    private Product getProduct(Integer productId){
        return this.productRepository.findById(productId)
                .orElseThrow(()-> new ResourceNotFoundException("product not found."));
    }
    private Inventory getInventory(Product product){
        return  this.inventoryRepository.findByProduct(product)
                .orElseThrow(()-> new ResourceNotFoundException("inventory not found by productId"));
    }
}
