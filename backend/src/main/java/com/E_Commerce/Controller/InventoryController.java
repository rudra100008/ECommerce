package com.E_Commerce.Controller;

import com.E_Commerce.Entity.Inventory;
import com.E_Commerce.Services.InventoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/inventory")
@RequiredArgsConstructor
public class InventoryController {
    private final InventoryService inventoryService;


    @GetMapping("/{productId}")
    public ResponseEntity<?> getProductDataInInventory(
            @PathVariable("productId")Integer productId
    ){
        Inventory inventory = this.inventoryService.getProductDataInInventory(productId);
        return ResponseEntity.status(HttpStatus.OK).body(inventory);
    }
    @PutMapping("/{productId}/reserved-quantity/{reservedQuantity}")
    public ResponseEntity<?> updateReserveQuantity(
            @PathVariable("productId")Integer productId,
            @PathVariable("reservedQuantity")Integer reservedQuantity
    ){
        Inventory inventory = this.inventoryService.updateReservedQuantity(productId, reservedQuantity);
        return  ResponseEntity.status(HttpStatus.OK).body(inventory);
    }

    @PutMapping("/{productId}/release-reserve-quantity/{reservedQuantity}")
    public ResponseEntity<?> releaseReserveQuantity(
            @PathVariable("productId")Integer productId,
            @PathVariable("reservedQuantity")Integer reservedQuantity
    ){
        Inventory inventory = this.inventoryService.releaseReservedStock(productId,reservedQuantity);
        return  ResponseEntity.status(HttpStatus.OK).body(inventory);
    }
}
