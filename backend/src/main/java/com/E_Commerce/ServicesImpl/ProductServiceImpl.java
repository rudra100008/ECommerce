package com.E_Commerce.ServicesImpl;

import com.E_Commerce.Config.PageConstant;
import com.E_Commerce.DTO.CategoryRequest;
import com.E_Commerce.DTO.PageInfo;
import com.E_Commerce.DTO.ProductDTO;
import com.E_Commerce.DTO.UpdateProductRequest;
import com.E_Commerce.Entity.Category;
import com.E_Commerce.Entity.Product;
import com.E_Commerce.Entity.ProductImage;
import com.E_Commerce.Exception.AlreadyExitsException;
import com.E_Commerce.Exception.BusinessValidationException;
import com.E_Commerce.Exception.ImageInvalidException;
import com.E_Commerce.Exception.ResourceNotFoundException;
import com.E_Commerce.Mapper.ProductMapper;
import com.E_Commerce.Repository.CategoryRepository;
import com.E_Commerce.Repository.ProductImageRepository;
import com.E_Commerce.Repository.ProductRepository;
import com.E_Commerce.Services.CategoryService;
import com.E_Commerce.Services.ImageService;
import com.E_Commerce.Services.ProductImageService;
import com.E_Commerce.Services.ProductService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProductServiceImpl implements ProductService {
    private final ImageService imageService;
    private final ProductRepository productRepository;
    private final ProductImageRepository productImageRepository;
    private final CategoryRepository categoryRepository;
    private final CategoryService categoryService;
    private final ProductImageService productImageService;
    private final ProductMapper productMapper;
    private final static List<String> ALLOWED_SORT_FIELDS = List.of("createdAt", "updatedAt", "productName", "price", "productId");


    @Override
    @Transactional
    public ProductDTO createProductWithImages(ProductDTO productDTO, CategoryRequest categoryRequest, List<MultipartFile> imageFiles) {
       List<String> imageNames = new ArrayList<>();
       try{
           for(MultipartFile imageFile: imageFiles){
               if(imageFile != null && !imageFile.isEmpty()){
                   String imageName = this.imageService.uploadImage(productDTO.getProductName().trim(),imageFile);
                   imageNames.add(imageName.trim());
               }
           }
       }catch (IOException e){
           throw new ImageInvalidException("Image not uploaded: "+ e.getMessage());
       }
      Category category;
       if(categoryRequest.getCategoryId() != null){
           category = this.categoryService.findById(categoryRequest.getCategoryId());
       }else{
           category = this.categoryService.createCategory(categoryRequest.getName().trim());
       }
       String sku = generateSku(productDTO,category);
       productDTO.setSku(sku);
       productDTO.setCategoryId(category.getCategoryId());
       productDTO.setImageUrls(imageNames);
       Product product = this.productMapper.toProduct(productDTO);
       product.setCategory(category);
       Product savedProduct = this.productRepository.save(product);
       return productMapper.toProductDTO(savedProduct);
    }

    @Override
    @Transactional
    @CachePut(value = "products",key = "#result.productId")
    public ProductDTO createProduct(ProductDTO productDTO) {
//        validateProductName(productDTO.getProductName());
        Category category = this.categoryRepository.findById(productDTO.getCategoryId())
                .orElseThrow(()-> new ResourceNotFoundException("Category not found with id: "+ productDTO.getCategoryId()));

        String sku = generateSku(productDTO,category);
        productDTO.setSku(sku);


        Product product = productMapper.toProduct(productDTO);
        product.setCategory(category);
        Product savedProduct = this.productRepository.save(product);
        return productMapper.toProductDTO(savedProduct);
    }

    @Override
    @Transactional(readOnly = true)
    public List<ProductDTO> findProductsByIds(List<Integer> productIds) {
        if (productIds ==  null  || productIds.isEmpty()){
            return Collections.emptyList();
        }
        List<Product> products = this.productRepository.findAllById(productIds);
        if (products.isEmpty()) {
            return Collections.emptyList();
        }
        Map<Integer,List<String>> imageUrlMap = getImageUrls(productIds);
        return products.stream()
                .map(product -> {
                    ProductDTO productDTO = this.productMapper.toProductDTO(product);
                    productDTO.setImageUrls(imageUrlMap.getOrDefault(product.getProductId(), Collections.emptyList()));
                    return productDTO;
                })
                .toList();
    }


    @Override
    @Transactional(readOnly = true)
    public ProductDTO findByProductId(Integer productId) {
        Product product = this.productRepository.findById(productId)
                .orElseThrow(()-> new ResourceNotFoundException("product not found in server"));
        return productMapper.toProductDTO(product);
    }

    @Override
    @Transactional
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
    public PageInfo<ProductDTO> findProducts(Integer pageNumber, Integer pageSize,String sortBy,String sortDir) {
        String validateSortBy = ALLOWED_SORT_FIELDS.contains(sortBy)? sortBy :PageConstant.SORT_BY;
        Sort sort = sortDir.equalsIgnoreCase("desc") ?
                Sort.by(validateSortBy).descending() : Sort.by(validateSortBy).ascending();
        Pageable productPageable = PageRequest.of(pageNumber,pageSize,sort);
        Page<Product> productPage = this.productRepository.findAll(productPageable);
        List<Product> productList = productPage.getContent();
        List<ProductDTO> productDTOList = productList.stream()
                .map(this.productMapper::toProductDTO).toList();
        return new PageInfo<>(
                productDTOList,
                pageNumber,
                pageSize,
                productPage.getTotalPages(),
                productPage.getTotalElements(),
                productPage.isLast()
        );
    }

    @Override
    @Transactional(readOnly = true)
    public PageInfo<ProductDTO>  findProductsByCategoryId(Integer pageNumber, Integer pageSize, Integer categoryId) {
        if (categoryId == null || categoryId <= 0) {
            throw new IllegalArgumentException("Category ID must be positive");
        }
        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        Page<Product> productPage = this.productRepository.findProductByCategoryId(categoryId, pageable);
        List<Product> fetchProduct = productPage.getContent();
//        fetchProduct.forEach(product -> {
//            if(product.getProductImages() == null || product.getProductImages().isEmpty()){
//                productRepository.delete(product);
//            }
//        });
        List<ProductDTO> productDTOS = fetchProduct.stream()
                .map(this.productMapper::toProductDTO)
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
    public ProductDTO updateProduct(UpdateProductRequest request) {

        Product product = this.productRepository.findById(request.productId())
                .orElseThrow(()-> new ResourceNotFoundException("Product not found"));

        if (!request.categoryId().equals(product.getCategory().getCategoryId())) {
            Category newCategory = this.categoryRepository.findById(request.categoryId())
                    .orElseThrow(() -> new ResourceNotFoundException("Category not found."));
            product.setCategory(newCategory);
        }

        applyUpdate(product,request);
        return this.productMapper.toProductDTO(this.productRepository.save(product));
    }

    @Override
    @Transactional(readOnly = true)
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
    @Transactional(readOnly = true)
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
        List<Product> products = productDTOS.stream().map(this.productMapper::toProduct)
        .filter(product -> product.getProductImages() == null || product.getProductImages().isEmpty())
                .toList();
        if(!products.isEmpty()){
            this.productRepository.deleteAll(products);
            log.info("Deleted {} products without images",products.size());
        }
    }


    //helper method
    private String generateSku(ProductDTO productDTO, Category category){
        if(productDTO.getSku() != null && !productDTO.getSku().isEmpty()) {
            String manualSKU = productDTO.getSku().trim().toUpperCase();
            if (productRepository.existsBySku(manualSKU)) {
                throw new BusinessValidationException("SKU already exits: " + manualSKU);
            }
            return manualSKU;
        }
        String baseSku = generateBaseSku(productDTO,category);

        Set<String> existingSkus = new HashSet<>(this.productRepository.findSkuStartingWith(baseSku));

        if(!existingSkus.contains(baseSku)){
            return baseSku;
        }


        int counter  = 1;
        String candidate;
        do{
            candidate = baseSku + "_" + counter;
            counter++;
        }while (existingSkus.contains(candidate));

        return candidate;
    }

    private String generateBaseSku(ProductDTO productDTO ,Category category){
        if (productDTO.getProductName() == null || category.getName() == null) {
            throw new BusinessValidationException("Invalid data for SKU generation");
        }
        String categoryPart = normalize(category.getName());
        String productPart = normalize(productDTO.getProductName());
        if (categoryPart.length() > 20) {
            categoryPart = categoryPart.substring(0, 20);
        }
        if (productPart.length() > 30) {
            productPart = productPart.substring(0, 30);
        }
        return categoryPart + "_" + productPart ;
    }
    private String normalize(String input){
        return  input
                .trim()
                .toUpperCase()
                .replaceAll("[^A-Z0-9]+", "_") // this means anything that is NOT[^] : A-Z uppercase letter, 0-9 digits
                .replaceAll("^_|_$", ""); // this means replace leading/trailing underscore(_) with nothing("")
    }

    private void validateProductName(String productName){
        if(this.productRepository.existsByProductName(productName)){
            throw new AlreadyExitsException(productName + " already exits");
        }
    }


    private Map<Integer,List<String>> getImageUrls(List<Integer> productIds){
        List<ProductImage> allImages = this.productImageService.fetchProductImagesByProductIds(productIds);

        return allImages.stream()
                .collect(Collectors.groupingBy(
                                img -> img.getProduct().getProductId(),
                                Collectors.mapping(
                                        img -> "/api/product/" + img.getProduct().getProductId() + "/image/" + img.getId(),
                                        Collectors.toList()
                                )
                        )
                );
    }


    private void applyUpdate(Product product,UpdateProductRequest request){
        if (request.productName() != null && !request.productName().isBlank()) {
            product.setProductName(request.productName().trim());
        }
        if (request.description() != null && !request.description().isBlank()) {
            product.setDescription(request.description().trim());
        }
        if (request.price() != null) {
            product.setPrice(request.price());
        }
        if (request.discount() != null) {
            product.setDiscount(request.discount());
        }
        if (request.isActive() != null) {
            product.setIsActive(request.isActive());
        }
        if (request.stockQuantity() != null) {
            if (product.getInventory() == null) {
                throw new ResourceNotFoundException("Inventory not found for product: " + product.getProductName());
            }
            product.getInventory().setStockQuantity(request.stockQuantity());
        }
    }
}
