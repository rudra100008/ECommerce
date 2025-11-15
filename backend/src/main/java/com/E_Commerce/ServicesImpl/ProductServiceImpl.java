package com.E_Commerce.ServicesImpl;

import com.E_Commerce.DTO.CategoryRequest;
import com.E_Commerce.DTO.PageInfo;
import com.E_Commerce.DTO.ProductDTO;
import com.E_Commerce.Entity.Category;
import com.E_Commerce.Entity.Product;
import com.E_Commerce.Entity.ProductImage;
import com.E_Commerce.Exception.AlreadyExitsException;
import com.E_Commerce.Exception.BusinessValidationException;
import com.E_Commerce.Exception.ImageValidException;
import com.E_Commerce.Exception.ResourceNotFoundException;
import com.E_Commerce.Mapper.ProductMapper;
import com.E_Commerce.Repository.CategoryRepository;
import com.E_Commerce.Repository.ProductImageRepository;
import com.E_Commerce.Repository.ProductRepository;
import com.E_Commerce.Services.CategoryService;
import com.E_Commerce.Services.ImageService;
import com.E_Commerce.Services.ProductService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
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
    private final CategoryService categoryService;
    private final ProductMapper productMapper;

    Logger logger = LoggerFactory.getLogger(ProductServiceImpl.class);

    @Override
    public ProductDTO createProductWithImages(ProductDTO productDTO, CategoryRequest categoryRequest, List<MultipartFile> imageFiles) {
       List<String> imageNames = new ArrayList<>();
       try{
           for(MultipartFile imageFile: imageFiles){
               if(imageFile != null || !imageFile.isEmpty()){
                   String imageName = this.imageService.uploadImage(productDTO.getProductName(),imageFile);
                   imageNames.add(imageName);
               }
           }
       }catch (IOException e){
           throw new ImageValidException("Image not uploaded: "+ e.getMessage());
       }
       Category category = this.categoryService.createCategory(categoryRequest.getName());
       String sku = generateSku(productDTO,category);
       productDTO.setSku(sku);
       productDTO.setCategoryId(category.getCategoryId());
       productDTO.setImageUrls(imageNames);
       Product product = this.productMapper.toProduct(productDTO);
       Product savedProduct = this.productRepository.save(product);
        return productMapper.toProductDTO(savedProduct);
    }

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
        List<Product> fetchProduct = productPage.getContent();
        fetchProduct.forEach(product -> {
            if(product.getProductImages() == null || product.getProductImages().isEmpty()){
                productRepository.delete(product);
            }
        });
        List<ProductDTO> productDTOS = fetchProduct.stream()
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

    @Override
    public ProductDTO updateProduct(ProductDTO productDTO) {
        Category category = this.categoryRepository.findById(productDTO.getCategoryId())
                .orElseThrow(()-> new ResourceNotFoundException("Category not found in server."));
        Product product =this.productRepository.findById(productDTO.getProductId())
                .orElseThrow(()-> new ResourceNotFoundException("Product no found."));
        if(!category.getCategoryId().equals(product.getCategory().getCategoryId())){
            throw new IllegalArgumentException("Product and category is not matching.");
        }
        if(productDTO.getPrice() != null )
            product.setPrice(productDTO.getPrice());
        if(productDTO.getDiscount() != null)
            product.setPrice(productDTO.getPrice());
        product.setDiscount(productDTO.getDiscount());
        if(productDTO.getDescription() != null || !productDTO.getDescription().isEmpty())
            product.setDescription(productDTO.getDescription());
        if(productDTO.getProductName() != null || !productDTO.getProductName().isEmpty())
            product.setProductName(productDTO.getProductName());
        if(productDTO.getStockQuantity() != null)
            product.getInventory().setStockQuantity(productDTO.getStockQuantity());
        Product  updatedProduct = this.productRepository.save(product);
        return this.productMapper.toProductDTO(updatedProduct);
    }

    @Override
    public PageInfo<ProductDTO> findRandomProduct(Integer pageNumber,Integer pageSize) {
        Pageable productPageable = PageRequest.of(pageNumber,pageSize);
        Page<Product> productPage = this.productRepository.findProductInRandom(productPageable);
        List<ProductDTO> productDTO = productPage.getContent().stream()
                .map(productMapper::toProductDTO)
                .toList();
        return new PageInfo<>(
                productDTO,
                pageNumber,
                pageSize,
                productPage.getTotalPages(),
                productPage.getTotalElements(),
                productPage.isLast()
        );
    }

    @Override
    public PageInfo<ProductDTO> findRandomProductByCategoryId(Integer pageNumber, Integer pageSize, Integer categoryId) {
        this.categoryRepository.findById(categoryId)
                .orElseThrow(()-> new ResourceNotFoundException("CategoryId not found in server."));
        Pageable productPageable = PageRequest.of(pageNumber,pageSize);
        Page<Product> productPage = this.productRepository.findProductByCategoryId(categoryId,productPageable);
        List<ProductDTO> productDTOS = productPage.getContent().stream()
                .map(productMapper::toProductDTO)
                .toList();

        return new PageInfo<>(
                productDTOS,
                pageNumber,
                pageSize,
                productPage.getTotalPages(),
                productPage.getTotalElements(),
                productPage.isLast()
        );
    }


    @Override
    @Transactional
    public void deleteProductsWithoutImages(List<ProductDTO> productDTOS) {
        List<Product> products = productDTOS.stream().map(productDTO ->
                productMapper.toProduct(productDTO)
        ).filter(product -> product.getProductImages() == null || product.getProductImages().isEmpty())
                .toList();
        if(!products.isEmpty()){
            this.productRepository.deleteAll(products);
            logger.info("Deleted {} products without images",products.size());
        }
    }


    //helper method
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
