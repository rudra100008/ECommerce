package com.E_Commerce.Repository;

import com.E_Commerce.Entity.ProductImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface ProductImageRepository extends JpaRepository<ProductImage,Integer> {
    @Query("Select i from ProductImage i where i.product.productId =:productId")
    Optional<List<ProductImage>> findProductImageByProductId(@Param("productId") Integer productId);
}
