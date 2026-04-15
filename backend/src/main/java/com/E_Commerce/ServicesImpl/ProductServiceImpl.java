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
import com.E_Commerce.Utils.SkuGeneratorUtils;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
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
    private final CategoryRepository categoryRepository;
    private final ProductImageService productImageService;
    private final ProductMapper productMapper;
    private final SkuGeneratorUtils skuGenerator;
    private final CategoryService categoryService;

    private final static List<String> ALLOWED_SORT_FIELDS = List.of("createdAt", "updatedAt", "productName", "price",
            "productId");

    @Override
    @Transactional
    public ProductDTO createProductWithImages(
            ProductDTO productDTO,
            CategoryRequest categoryRequest,
            List<MultipartFile> imageFiles) {

        Category category = resolveCategory(categoryRequest);
        String sku = skuGenerator.generateUniqueSku(productDTO, category);
        productDTO.setSku(sku);
        productDTO.setCategoryId(category.getCategoryId());
        productDTO.setImageUrls(Collections.emptyList());

        Product product = this.productMapper.toProduct(productDTO);
        product.setCategory(category);

        Product savedProduct;
        try {
            savedProduct = this.productRepository.save(product);
            this.productRepository.flush(); 
        } catch (DataIntegrityViolationException e) {
            throw new BusinessValidationException(
                    "A product with a similar name already exists. Try providing a custom SKU.");
        }

    
        List<String> uploadedPaths = uploadImages(productDTO.getProductName(), imageFiles);

        for (String imagePath : uploadedPaths) {
            ProductImage pi = ProductImage.builder()
                    .imageUrl(imagePath)
                    .product(savedProduct)
                    .build();
            savedProduct.getProductImages().add(pi);
        }

        Product finalProduct = this.productRepository.save(savedProduct);
        return this.productMapper.toProductDTO(finalProduct);
    }

    @Override
    @Transactional
    public ProductDTO createProduct(ProductDTO productDTO) {
        // validateProductName(productDTO.getProductName());
        Category category = this.categoryRepository.findById(productDTO.getCategoryId())
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Category not found with id: " + productDTO.getCategoryId()));

        String sku = skuGenerator.generateUniqueSku(productDTO, category);
        productDTO.setSku(sku);

        Product product = productMapper.toProduct(productDTO);
        product.setCategory(category);
        Product savedProduct = this.productRepository.save(product);
        return productMapper.toProductDTO(savedProduct);
    }

    @Override
    @Transactional(readOnly = true)
    public List<ProductDTO> findProductsByIds(List<Integer> productIds) {
        if (productIds == null || productIds.isEmpty()) {
            return Collections.emptyList();
        }
        List<Product> products = this.productRepository.findAllById(productIds);
        if (products.isEmpty()) {
            return Collections.emptyList();
        }
        Map<Integer, List<String>> imageUrlMap = getImageUrls(productIds);
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
    @Cacheable(value = "products", key = "#productId")
    public ProductDTO findByProductId(Integer productId) {
        Product product = this.productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("product not found in server"));
        ProductDTO productDTO = productMapper.toProductDTO(product);

        productDTO.setImageUrls(getImageUrlsForProduct(productId));
        return productDTO;
    }

    @Override
    @Transactional(readOnly = true)
    public Product findProductEntityById(Integer productId) {
        return this.productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        String.format("Product not found with ID: %d", productId)));
    }

    @Override
    @Transactional
    @CacheEvict(value = "products", key = "#productId")
    public ProductDTO updateProductImages(List<String> imageUrls, Integer productId) {
        Product existingProduct = this.productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found."));

        existingProduct.getProductImages().clear();

        for (String imageUrl : imageUrls) {
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
    @Cacheable(value = "products", key = " 'page_' +#pageNumber + '_' + #pageSize + '_' + #sortBy + '_' + #sortDir ")
    public PageInfo<ProductDTO> findProducts(Integer pageNumber, Integer pageSize, String sortBy, String sortDir) {
        String validateSortBy = ALLOWED_SORT_FIELDS.contains(sortBy) ? sortBy : PageConstant.SORT_BY;
        Sort sort = sortDir.equalsIgnoreCase("desc") ? Sort.by(validateSortBy).descending()
                : Sort.by(validateSortBy).ascending();
        Pageable productPageable = PageRequest.of(pageNumber, pageSize, sort);
        Page<Product> productPage = this.productRepository.findAll(productPageable);
        List<Product> productList = productPage.getContent();
        List<ProductDTO> productDTOList = productList.stream()
                .map(this.productMapper::toProductDTO).toList();

        List<Integer> ids = productList.stream()
                .map(Product::getProductId)
                .toList();

        Map<Integer, String> firstImages = getFirstImageUrlPerProduct(ids);
        productDTOList.forEach(dto -> {
            String url = firstImages.get(dto.getProductId());
            dto.setImageUrls(url != null ? List.of(url) : Collections.emptyList());
        });

        return new PageInfo<>(
                productDTOList,
                pageNumber,
                pageSize,
                productPage.getTotalPages(),
                productPage.getTotalElements(),
                productPage.isLast());
    }

    @Override
    @Transactional(readOnly = true)
    @Cacheable(value = "products", key = " 'page_' + #pageNumber + '_' + #pageSize + '_categoryId_' + #categoryId ")
    public PageInfo<ProductDTO> findProductsByCategoryId(Integer pageNumber, Integer pageSize, Integer categoryId) {
        if (categoryId == null || categoryId <= 0) {
            throw new IllegalArgumentException("Category ID must be positive");
        }
        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        Page<Product> productPage = this.productRepository.findProductByCategoryId(categoryId, pageable);
        List<Product> fetchProduct = productPage.getContent();

        List<ProductDTO> productDTOs = fetchProduct.stream()
                .map(this.productMapper::toProductDTO)
                .toList();

        List<Integer> ids = fetchProduct.stream().map(Product::getProductId).toList();
        Map<Integer, String> firstImages = getFirstImageUrlPerProduct(ids);
        productDTOs.forEach(dto -> {
            String url = firstImages.get(dto.getProductId());
            dto.setImageUrls(url != null ? List.of(url) : Collections.emptyList());
        });

        return new PageInfo<>(
                productDTOs,
                pageNumber,
                pageSize,
                productPage.getTotalPages(),
                productPage.getTotalElements(),
                productPage.isLast());
    }

    @Override
    @Transactional
    @CachePut(value = "products", key = "#result.productId")
    public ProductDTO updateProduct(UpdateProductRequest request) {

        Product product = this.productRepository.findById(request.productId())
                .orElseThrow(() -> new ResourceNotFoundException("Product not found"));

        if (!request.categoryId().equals(product.getCategory().getCategoryId())) {
            Category newCategory = this.categoryRepository.findById(request.categoryId())
                    .orElseThrow(() -> new ResourceNotFoundException("Category not found."));
            product.setCategory(newCategory);
        }

        applyUpdate(product, request);
        return this.productMapper.toProductDTO(this.productRepository.save(product));
    }

    @Override
    @Transactional(readOnly = true)
    public PageInfo<ProductDTO> findRandomProduct(Integer pageNumber, Integer pageSize) {
        Pageable productPageable = PageRequest.of(pageNumber, pageSize);
        Page<Product> productPage = this.productRepository.findProductInRandom(productPageable);
        List<ProductDTO> productDTOs = productPage.getContent().stream()
                .map(productMapper::toProductDTO)
                .toList();

        List<Integer> ids = productPage.getContent().stream().map(Product::getProductId).toList();
        Map<Integer, String> firstImages = getFirstImageUrlPerProduct(ids);

        productDTOs.forEach(dto -> {
            String url = firstImages.get(dto.getProductId());
            dto.setImageUrls(url != null ? List.of(url) : Collections.emptyList());
        });

        return new PageInfo<>(
                productDTOs,
                pageNumber,
                pageSize,
                productPage.getTotalPages(),
                productPage.getTotalElements(),
                productPage.isLast());
    }

    @Override
    @Transactional(readOnly = true)
    public PageInfo<ProductDTO> findRandomProductByCategoryId(Integer pageNumber, Integer pageSize,
            Integer categoryId) {
        this.categoryRepository.findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("CategoryId not found in server."));
        Pageable productPageable = PageRequest.of(pageNumber, pageSize);
        Page<Product> productPage = this.productRepository.findProductByCategoryId(categoryId, productPageable);
        List<ProductDTO> productDTOs = productPage.getContent().stream()
                .map(productMapper::toProductDTO)
                .toList();

        List<Integer> ids = productPage.getContent().stream().map(Product::getProductId).toList();
        Map<Integer, String> firstImages = getFirstImageUrlPerProduct(ids);

        productDTOs.forEach(dto -> {
            String url = firstImages.get(dto.getProductId());
            dto.setImageUrls(url != null ? List.of(url) : Collections.emptyList());
        });

        return new PageInfo<>(
                productDTOs,
                pageNumber,
                pageSize,
                productPage.getTotalPages(),
                productPage.getTotalElements(),
                productPage.isLast());
    }

    // helper method
    private List<String> uploadImages(String productName, List<MultipartFile> imageFiles) {
        List<String> uploadedPaths = new ArrayList<>();
        try {
            for (MultipartFile imageFile : imageFiles) {
                if (imageFile != null && !imageFile.isEmpty()) {
                    String path = this.imageService.uploadImage(productName.trim(), imageFile);
                    uploadedPaths.add(path.trim());
                }
            }
        } catch (IOException e) {
            cleanupImages(uploadedPaths); // Rollback disk writes
            throw new ImageInvalidException("Image upload failed: " + e.getMessage());
        }

        if (uploadedPaths.isEmpty()) {
            throw new ImageInvalidException("At least one valid image is required.");
        }

        return uploadedPaths;
    }

    private Category resolveCategory(CategoryRequest categoryRequest) {
        if (categoryRequest.getCategoryId() != null) {
            return this.categoryService.findById(categoryRequest.getCategoryId());
        }
        if (categoryRequest.getName() == null || categoryRequest.getName().isBlank()) {
            throw new BusinessValidationException("Category name or ID is required");
        }
        return this.categoryService.createCategory(categoryRequest.getName().trim());
    }

    private void cleanupImages(List<String> uploadedPaths) {
        uploadedPaths.forEach(path -> {
            try {
                this.imageService.deleteImage(path, "");
            } catch (Exception ex) {
                log.warn("Failed to cleanup image at path: {}. Manual cleanup may be needed.", path);
            }
        });
    }

    private void validateProductName(String productName) {
        if (this.productRepository.existsByProductName(productName)) {
            throw new AlreadyExitsException(productName + " already exits");
        }
    }

    private Map<Integer, List<String>> getImageUrls(List<Integer> productIds) {
        List<ProductImage> allImages = this.productImageService.fetchProductImagesByProductIds(productIds);

        return allImages.stream()
                .collect(Collectors.groupingBy(
                        img -> img.getProduct().getProductId(),
                        Collectors.mapping(
                                img -> "/api/product/" + img.getProduct().getProductId() + "/image/" + img.getId(),
                                Collectors.toList())));
    }

    private List<String> getImageUrlsForProduct(Integer productId) {
        List<ProductImage> productImages = this.productImageService.getProductImageByProductId(productId);

        return productImages.stream()
                .map(image -> "/api/product/" + image.getProduct().getProductId() + "/image/" + image.getId())
                .toList();
    }

    private Map<Integer, String> getFirstImageUrlPerProduct(List<Integer> productIds) {
        return this.productImageService.fetchFirstProductImagesByProductIds(productIds)
                .stream()
                .collect(Collectors.toMap(
                        img -> img.getProduct().getProductId(),
                        img -> "/api/product/" + img.getProduct().getProductId() + "/image/" + img.getId()));
    }

    private void applyUpdate(Product product, UpdateProductRequest request) {
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
