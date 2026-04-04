package com.E_Commerce.Services;

import com.E_Commerce.Entity.ProductImage;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProductImageService {
    List<ProductImage> getProductImageByProductId(Integer productId);
    List<ProductImage> fetchProductImagesByProductIds(List<Integer> productIds);
    ProductImage getProductImageById(Integer productImageId);
}
