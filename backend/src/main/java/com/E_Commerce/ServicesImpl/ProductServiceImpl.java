package com.E_Commerce.ServicesImpl;

import com.E_Commerce.DTO.PageInfo;
import com.E_Commerce.DTO.ProductDTO;
import com.E_Commerce.Entity.Category;
import com.E_Commerce.Entity.Product;
import com.E_Commerce.Entity.ProductImage;
import com.E_Commerce.Exception.AlreadyExitsException;
import com.E_Commerce.Exception.BusinessValidationException;
import com.E_Commerce.Exception.ResourceNotFoundException;
import com.E_Commerce.Mapper.ProductMapper;
import com.E_Commerce.Repository.CategoryRepository;
import com.E_Commerce.Repository.ProductImageRepository;
import com.E_Commerce.Repository.ProductRepository;
import com.E_Commerce.Services.ImageService;
import com.E_Commerce.Services.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class ProductServiceImpl implements ProductService {
    private final ImageService imageService;
    private final ProductRepository productRepository;
    private final ProductImageRepository productImageRepository;
    private final CategoryRepository categoryRepository;
    private final ProductMapper productMapper;


    @Override
    @Transactional
    public ProductDTO createProduct(ProductDTO productDTO) {
//        validateProductName(productDTO.getProductName());
        Category category = this.categoryRepository.findById(productDTO.getCategoryId())
                .orElseThrow(()-> new RuntimeException("Category not found with id: "+ productDTO.getCategoryId()));

        String sku = generateSku(productDTO,category);
        productDTO.setSku(sku);


        Product product = productMapper.toProduct(productDTO);
        Product savedProduct = this.productRepository.save(product);
        return productMapper.toProductDTO(savedProduct);
    }




    @Override
    @Transactional
    public ProductDTO findByProductId(Integer productId) {
        Product product = this.productRepository.findById(productId)
                .orElseThrow(()-> new RuntimeException("product not found in server"));
        return productMapper.toProductDTO(product);
    }

    @Override
    public ProductDTO updateProductImages(List<String> imageUrls,Integer productId) {
       Product existingProduct = this.productRepository.findById(productId)
               .orElseThrow(()-> new ResourceNotFoundException("Product not found."));

        existingProduct.getProductImages().clear();

        for(String imageUrl : imageUrls){
            ProductImage productImage = ProductImage.builder()
                    .imageUrl(imageUrl)
                    .product(existingProduct)
                    .build();
            existingProduct.getProductImages().add(productImage);
        }

       Product updatedProduct = this.productRepository.save(existingProduct);
       return productMapper.toProductDTO(updatedProduct);
    }

    @Override
    @Transactional(readOnly = true)
    public PageInfo<ProductDTO> findProducts(Integer pageNumber, Integer pageSize, Integer categoryId) {
        if (categoryId == null || categoryId <= 0) {
            throw new IllegalArgumentException("Category ID must be positive");
        }
        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        Page<Product> productPage = this.productRepository.findProductByCategoryId(categoryId, pageable);

        List<ProductDTO> productDTOS = productPage.getContent().stream()
                .map(product -> this.productMapper.toProductDTO(product))
                .collect(Collectors.toList());

        return new PageInfo<>(
                productDTOS,
                pageNumber,
                pageSize,
                productPage.getTotalPages(),
                productPage.getTotalElements(),
                productPage.isLast()
        );
    }

    private String generateSku(ProductDTO productDTO, Category category){
        if(productDTO.getSku() != null && !productDTO.getSku().isEmpty()) {
            if (productRepository.existsBySku(productDTO.getSku())) {
                throw new BusinessValidationException("SKU already exits: " + productDTO.getSku());
            }
            return productDTO.getSku().trim().toUpperCase();
        }
        String baseSku = generateBasSku(productDTO,category);
        int counter  = 1;
        while(productRepository.existsBySku(baseSku)){
            baseSku = baseSku + "_" + counter;
            counter++;
        }

        return baseSku;
    }

    private String generateBasSku(ProductDTO productDTO ,Category category){
        String categoryName = category.getName().toUpperCase();
        String productName = productDTO.getProductName().toUpperCase();
        if (productName.length() > 20){
            productName = productName.substring(0,20);
        }
        return categoryName + "_" + productName ;
    }

    private void validateProductName(String productName){
        if(this.productRepository.existsByProductName(productName)){
            throw new AlreadyExitsException(productName + " already exits");
        }
    }
}
