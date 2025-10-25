package com.E_Commerce.Services;

import com.E_Commerce.DTO.PageInfo;
import com.E_Commerce.DTO.ProductDTO;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProductService {
    ProductDTO createProduct(ProductDTO productDTO);
    ProductDTO findByProductId(Integer productId);
    ProductDTO updateProductImages(List<String> imageUrls,Integer productId);
    PageInfo<ProductDTO> findProducts(Integer pageNumber, Integer pageSize, Integer categoryId);
    ProductDTO updateProduct(ProductDTO productDTO);

    PageInfo<ProductDTO> findRandomProduct(Integer pageNumber,Integer pageSize);

    PageInfo<ProductDTO> findRandomProductByCategoryId(Integer pageNumber,Integer pageSize,Integer categoryId);
}
