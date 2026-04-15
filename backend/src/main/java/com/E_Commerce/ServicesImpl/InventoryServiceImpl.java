package com.E_Commerce.ServicesImpl;

import com.E_Commerce.Entity.Inventory;
import com.E_Commerce.Entity.Product;
import com.E_Commerce.Exception.ResourceNotFoundException;
import com.E_Commerce.Exception.ServiceUnavailableException;
import com.E_Commerce.Repository.InventoryRepository;
import com.E_Commerce.Repository.ProductRepository;
import com.E_Commerce.Services.InventoryService;
import com.E_Commerce.Services.ProductService;
import jakarta.persistence.LockTimeoutException;
import jakarta.persistence.PessimisticLockException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Slf4j
public class InventoryServiceImpl implements InventoryService {
    private final InventoryRepository inventoryRepository;
    private final ProductService productService;

    @Override
    @Transactional
    public Inventory fetchInventoryWithLock(Integer productId) {
        try{
            return this.inventoryRepository.findByProductIdForUpdate(productId)
                    .orElseThrow(()-> new ResourceNotFoundException(
                            String.format("Inventory not found for product: %d",productId))
                    );
        }catch (LockTimeoutException | PessimisticLockException e) {
            log.error("Could not acquire lock for product {}: {}", productId, e.getMessage());
            throw new ServiceUnavailableException(
                    "System is busy with this product. Please try again in a few seconds.",e);
        }
    }

    @Override
    @Transactional(readOnly = true)
    public Inventory getProductDataInInventory(Integer productId) {
        Product product = this.productService.findProductEntityById(productId);
        return getInventory(product);
    }




    @Override
    public Inventory updateStockQuantity(Integer productId, Integer stockQuantity) {
        return null;
    }
   
    private Inventory getInventory(Product product){
        return  this.inventoryRepository.findByProduct(product)
                .orElseThrow(()-> new ResourceNotFoundException("inventory not found by productId"));
    }
}
