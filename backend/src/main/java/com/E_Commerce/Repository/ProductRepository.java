package com.E_Commerce.Repository;

import com.E_Commerce.Entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional
public interface ProductRepository extends JpaRepository<Product,Integer> {

    Optional<Product> findBySku(String sku);
    boolean existsBySku(String sku);
    boolean existsByProductName(String productName);

    @Query("SELECT p from Product p where p.category.categoryId = :categoryId")
    Page<Product> findProductByCategoryId(@Param("categoryId") Integer categoryId, Pageable pageable);

}
