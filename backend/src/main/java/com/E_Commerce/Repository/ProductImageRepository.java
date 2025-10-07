package com.E_Commerce.Repository;

import com.E_Commerce.Entity.ProductImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ProductImageRepository extends JpaRepository<ProductImage,Integer> {
}
