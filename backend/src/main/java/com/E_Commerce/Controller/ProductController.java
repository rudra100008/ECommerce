package com.E_Commerce.Controller;

import com.E_Commerce.Config.PageConstant;
import com.E_Commerce.DTO.PageInfo;
import com.E_Commerce.DTO.ProductDTO;
import com.E_Commerce.DTO.UpdateProductRequest;
import com.E_Commerce.Entity.ProductImage;
import com.E_Commerce.Services.ImageService;
import com.E_Commerce.Services.ProductImageService;
import com.E_Commerce.Services.ProductService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.*;

@RestController
@RequestMapping("/api/product")
@RequiredArgsConstructor
@Slf4j
public class ProductController {
    private final ProductService productService;
    private final ImageService imageService;
    private final ProductImageService productImageService;
    private static final String API_PRODUCT = "/api/product/";
    private  static final String IMAGE = "/image/";



    @GetMapping(value = "/imageUrl/{productId}",produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<?> getProductImageUrls(
            @PathVariable("productId")Integer productId
    ){
        ProductDTO productDTO = this.productService.findByProductId(productId);
        List<ProductImage >productImages = this.productImageService.getProductImageByProductId(productId);
        List<String> imageUrls = new ArrayList<>();
            for (ProductImage p : productImages) {
                String imageUrl =  API_PRODUCT + productDTO.getProductId() + IMAGE + p.getId();
                imageUrls.add(imageUrl);
                log.info("ImageUrls: {}", imageUrl);
            }

        Map<String, Object> response = new HashMap<>();
        response.put("productId", productId);
        response.put("productName", productDTO.getProductName());
        response.put("images", imageUrls);
        response.put("totalImages", imageUrls.size());

        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.APPLICATION_JSON)
                .body(response);
    }

    @GetMapping(value = "/{productId}/image/{productImageId}",produces = {MediaType.IMAGE_JPEG_VALUE,MediaType.IMAGE_PNG_VALUE,MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<?> getProductImage(
            @PathVariable("productId")Integer productId,
            @PathVariable("productImageId")Integer productImageId
    ){
        this.productService.findByProductId(productId);
        ProductImage productImage = this.productImageService.getProductImageById(productImageId);
        try{
            if (!productImage.getProduct().getProductId().equals(productId)) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .contentType(MediaType.APPLICATION_JSON)
                        .body(Map.of("error", "Image does not belong to this product"));
            }
            MediaType mediaType = this.imageService.determineMediaType(productImage.getImageUrl());
            byte[] b = this.imageService.getImage(productImage.getImageUrl());
            return ResponseEntity.status(HttpStatus.OK).contentType(mediaType).body(b);
        }catch (IOException e){
            return  ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("error",e.getMessage()));
        }
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/updateProduct")
    public ResponseEntity<?> handleProductUpdate(
            @Valid @RequestBody UpdateProductRequest productRequest,
            BindingResult result
            ){
        if(result.hasErrors()){
            Map<String,Object>  errRes = new HashMap<>();
            result.getFieldErrors()
                    .forEach(f -> errRes.put(f.getField(),f.getDefaultMessage()));
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errRes);
        }
        ProductDTO updatedProduct = this.productService.updateProduct(productRequest);
        Map<String,Object> response = new HashMap<>();
        response.put("message","Product successfully updated.");
        response.put("product",updatedProduct);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @GetMapping("/fetchProducts")
    public ResponseEntity<?> fetchRandomProducts(
            @RequestParam(required = false,defaultValue = PageConstant.PAGE_NUMBER,name = "pageNumber")Integer pageNumber,
            @RequestParam(required = false,defaultValue = PageConstant.PAGE_SIZE,name = "pageSize")Integer pageSize
    ){
        PageInfo<ProductDTO> productDTOPageInfo = this.productService.findRandomProduct(pageNumber,pageSize);
        return ResponseEntity.status(HttpStatus.OK).body(productDTOPageInfo);
    }

    @PostMapping("/fetchAllProductsByIds")
    public ResponseEntity<?> findProductsByIds(
            @RequestBody()List<Integer> productIds
    ){
        if (productIds == null || productIds.isEmpty()) {
            log.info("Empty product IDs list received");
            return ResponseEntity.ok(Collections.emptyList());
        }
        List<ProductDTO> productDTOS = this.productService.findProductsByIds(productIds);
        log.info("Successfully fetched {} products", productDTOS.size());
        return ResponseEntity.status(HttpStatus.OK).body(productDTOS);
    }

    @GetMapping("/{productId}")
    public ResponseEntity<?> findProductById(
            @PathVariable(name = "productId")Integer productId
    )
    {
        ProductDTO productDTO = this.productService.findByProductId(productId);
        return  ResponseEntity.status(HttpStatus.OK).body(productDTO);
    }
    @GetMapping("/fetchAllProducts")
    public ResponseEntity<PageInfo<ProductDTO>> fetchAllProducts(
            @RequestParam(name = "pageNumber",defaultValue = PageConstant.PAGE_NUMBER,required = false)Integer pageNumber,
            @RequestParam(name = "pageSize",defaultValue = PageConstant.PAGE_SIZE,required = false)Integer pageSize,
            @RequestParam(name = "sortBy",defaultValue = PageConstant.SORT_BY,required = false)String sortBy,
            @RequestParam(name = "sortDir",defaultValue = PageConstant.SORT_DIR,required = false)String sortDir
    ){
        PageInfo<ProductDTO> productDTOPageInfo = this.productService.findProducts(
                pageNumber,
                pageSize,
                sortBy,
                sortDir
        );
        return ResponseEntity.status(HttpStatus.OK).body(productDTOPageInfo);
    }
    @PostMapping("/validate-product")
    public ResponseEntity<?> validateProduct(
            @Valid @RequestBody ProductDTO productDTO,
            BindingResult result
    ){
        log.info("ProductDTO: {}",productDTO.toString());
        if(result.hasErrors()){
            Map<String,Object> errorResponse = new HashMap<>();
            for (FieldError fieldError : result.getFieldErrors()) {
                errorResponse.put(
                        fieldError.getField(),
                        fieldError.getDefaultMessage()
                );
            }
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }

        return ResponseEntity.ok(Map.of(
                "valid", true,
                "message", "Product is valid"
        ));
    }



}
