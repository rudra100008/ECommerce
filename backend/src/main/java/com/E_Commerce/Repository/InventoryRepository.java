package com.E_Commerce.Repository;

import com.E_Commerce.Entity.Inventory;
import com.E_Commerce.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface InventoryRepository extends JpaRepository<Inventory,Integer> {
    Optional<Inventory> findByProduct(Product product);
    @Query("SELECT i FROM Inventory i WHERE i.product.productId = :id")
    Optional<Inventory> findByProductId(@Param("id")Integer productId);

}
