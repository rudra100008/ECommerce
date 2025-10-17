package com.E_Commerce.Services;

import com.E_Commerce.DTO.PageInfo;
import com.E_Commerce.DTO.ProductDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProductService {
    ProductDTO createProduct(ProductDTO productDTO);
    ProductDTO findByProductId(Integer productId);
    ProductDTO updateProductImages(List<String> imageUrls,Integer productId);
    PageInfo<ProductDTO> findProducts(Integer pageNumber, Integer pageSize, Integer categoryId);
}
