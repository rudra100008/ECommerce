package com.E_Commerce.Services;

import com.E_Commerce.DTO.ProductDTO;
import org.springframework.stereotype.Service;

@Service
public interface ProductService {
    ProductDTO createProduct(ProductDTO productDTO);
    ProductDTO findByProductId(Integer productId);
}
