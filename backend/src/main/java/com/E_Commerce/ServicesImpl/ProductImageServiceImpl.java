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
        if(productId == null ){
            throw new IllegalArgumentException("ProductId is empty");
        }
        return this.productImageRepository.findProductImageByProductId(productId)
                .orElseThrow(()-> new ResourceNotFoundException("Product image not found of productID: "+productId));
    }

    @Override
    public ProductImage getProductImageById(Integer productImageId) {
        return this.productImageRepository.findById(productImageId)
                .orElseThrow(()-> new ResourceNotFoundException("Product image not found."));
    }
}
