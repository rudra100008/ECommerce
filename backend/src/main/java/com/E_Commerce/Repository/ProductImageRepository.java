package com.E_Commerce.Repository;

import com.E_Commerce.Entity.ProductImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ProductImageRepository extends JpaRepository<ProductImage, Integer> {
    @Query("Select i from ProductImage i where i.product.productId =:productId")
    List<ProductImage> findProductImageByProductId(@Param("productId") Integer productId);

    @Query("Select i from ProductImage i where i.product.productId IN :productIds")
    List<ProductImage> findProductImageByProductIds(@Param("productIds") List<Integer> productIds);

    @Query("""
                SELECT pi FROM ProductImage pi
                WHERE pi.product.productId IN :productIds
                AND pi.id IN (
                    SELECT MIN(pi2.id) FROM ProductImage pi2
                    WHERE pi2.product.productId IN :productIds
                    GROUP BY pi2.product.productId
                )
            """)
    List<ProductImage> findFirstImagePerProduct(@Param("productIds") List<Integer> productIds);

}
