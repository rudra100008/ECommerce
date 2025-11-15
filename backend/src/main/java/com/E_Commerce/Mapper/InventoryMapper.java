package com.E_Commerce.Mapper;

import com.E_Commerce.DTO.InventoryDTO;
import com.E_Commerce.Entity.Inventory;
import com.E_Commerce.Entity.Product;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface InventoryMapper {

    @Mapping(source = "product.productId", target = "productId")
    InventoryDTO toInventoryDTO(Inventory inventory);

    // Manual implementation
    default Inventory toInventory(InventoryDTO inventoryDTO) {
        if (inventoryDTO == null) {
            return null;
        }

        Inventory inventory = Inventory.builder()
                .id(inventoryDTO.getId())
                .stockQuantity(inventoryDTO.getStockQuantity())
                .reservedQuantity(inventoryDTO.getReservedQuantity())
                .build();

        // Create a Product reference with just the ID
        if (inventoryDTO.getProductId() != null) {
            Product product = new Product();
            product.setProductId(inventoryDTO.getProductId());
            inventory.setProduct(product);
        }

        return inventory;
    }
}
