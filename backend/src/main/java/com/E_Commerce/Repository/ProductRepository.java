package com.E_Commerce.Repository;

import com.E_Commerce.Entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product,Integer> {

    Optional<Product> findBySku(String sku);
    boolean existsBySku(String sku);
    boolean existsByProductName(String productName);

    @Query("SELECT p FROM Product p where p.productId IN :ids ")
    List<Product> findAllProductByIds(@Param("ids")List<Integer> productIds);

    @Query("SELECT p FROM Product p where p.category.categoryId = :categoryId")
    Page<Product> findProductByCategoryId(@Param("categoryId") Integer categoryId, Pageable pageable);

    @Query(
            value = """
        SELECT p.* FROM products p
        JOIN (
            SELECT FLOOR(RAND() * (SELECT MAX(product_id) FROM products)) AS rand_id
        ) AS r ON p.product_id >= r.rand_id
        ORDER BY RAND()
        """,
            countQuery = "SELECT COUNT(*) FROM products",  // ← simple, separate count
            nativeQuery = true
    )
    Page<Product>  findProductInRandom(Pageable pageable);

    @Query(value = "SELECT * FROM products WHERE category_id = :categoryId ORDER BY RAND()",nativeQuery = true)
    Page<Product> findProductInRandomByCategoryId(@Param("categoryId")Integer categoryId,Pageable pageable);
    // Get limited random products
    @Query(value = "SELECT * FROM products ORDER BY RAND() ", nativeQuery = true)
    Page<Product> findRandomProducts(Pageable pageable);

    @Query("SELECT p FROM Product p WHERE p.createdAt IS NULL")
    List<Product> findByCreatedAtIsNull();

    @Query("SELECT p.sku FROM Product p WHERE p.sku LIKE :prefix%")
    List<String> findSkuStartingWith(@Param("prefix")String prefix);

}
