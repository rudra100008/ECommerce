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
       List<ProductImage> images = this.productImageRepository.findProductImageByProductId(productId);
       if(images.isEmpty()){
           throw new ResourceNotFoundException("Product image not found for productId: " + productId.toString());
       }
       return images;
    }

    @Override
    public List<ProductImage> fetchProductImagesByProductIds(List<Integer> productIds) {
        List<ProductImage> images = this.productImageRepository.findProductImageByProductIds(productIds);
        if (images.isEmpty()) {
            throw new ResourceNotFoundException("Product image not found for productId: " + productIds.toString());
        }
        return images;
    }

    @Override
    public ProductImage getProductImageById(Integer productImageId) {
        return this.productImageRepository.findById(productImageId)
                .orElseThrow(()-> new ResourceNotFoundException("Product image not found."));
    }
}
