package com.E_Commerce.ServicesImpl;

import com.E_Commerce.Entity.ProductImage;
import com.E_Commerce.Exception.ResourceNotFoundException;
import com.E_Commerce.Repository.ProductImageRepository;
import com.E_Commerce.Services.ProductImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductImageServiceImpl implements ProductImageService {
    private final ProductImageRepository productImageRepository;
    @Override
    public List<ProductImage> getProductImageByProductId(Integer productId) {
       return this.productImageRepository.findProductImageByProductId(productId);
    }

    @Override
    public List<ProductImage> fetchProductImagesByProductIds(List<Integer> productIds) {
        return  this.productImageRepository.findProductImageByProductIds(productIds);
    }

    

    @Override
    public ProductImage getProductImageById(Integer productImageId) {
        if (productImageId == null) {
            throw new ResourceNotFoundException("Product image not found.");
        }
        return this.productImageRepository.findById(productImageId)
                .orElseThrow(()-> new ResourceNotFoundException("Product image not found."));
    }

    @Override
    public List<ProductImage> fetchFirstProductImagesByProductIds(List<Integer> productIds) {
        return  this.productImageRepository.findFirstImagePerProduct(productIds);
    }
}
