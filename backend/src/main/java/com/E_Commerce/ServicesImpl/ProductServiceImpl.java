package com.E_Commerce.ServicesImpl;

import com.E_Commerce.DTO.ProductDTO;
import com.E_Commerce.Entity.Category;
import com.E_Commerce.Entity.Product;
import com.E_Commerce.Mapper.ProductMapper;
import com.E_Commerce.Repository.CategoryRepository;
import com.E_Commerce.Repository.ProductImageRepository;
import com.E_Commerce.Repository.ProductRepository;
import com.E_Commerce.Services.ImageService;
import com.E_Commerce.Services.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {
    private final ImageService imageService;
    private final ProductRepository productRepository;
    private final ProductImageRepository productImageRepository;
    private final CategoryRepository categoryRepository;
    private final ProductMapper productMapper;


    @Override
    public ProductDTO createProduct(ProductDTO productDTO) {
        this.categoryRepository.findById(productDTO.getCategoryId())
                .orElseThrow(()-> new RuntimeException("Category not found with id: "+ productDTO.getCategoryId()));
        Product product = productMapper.toProduct(productDTO);
        Product savedProduct = this.productRepository.save(product);
        return productMapper.toProductDTO(savedProduct);
    }

    @Override
    public ProductDTO findByProductId(Integer productId) {
        Product product = this.productRepository.findById(productId)
                .orElseThrow(()-> new RuntimeException("product not found in server"));
        return productMapper.toProductDTO(product);
    }
}
