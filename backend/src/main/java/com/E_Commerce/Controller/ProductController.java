package com.E_Commerce.Controller;

import com.E_Commerce.DTO.ProductDTO;
import com.E_Commerce.Entity.ProductImage;
import com.E_Commerce.Services.ImageService;
import com.E_Commerce.Services.ProductImageService;
import com.E_Commerce.Services.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.autoconfigure.graphql.GraphQlProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/product")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;
    private final ImageService imageService;
    private final ProductImageService productImageService;


    @GetMapping(value = "/imageUrl/{productId}",produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<?> getProductImageUrls(
            @PathVariable("productId")Integer productId
    ){
        ProductDTO productDTO = this.productService.findByProductId(productId);
        List<ProductImage >productImages = this.productImageService.getProductImageByProductId(productId);
        List<String> imageUrls = new ArrayList<>();
            for (ProductImage p : productImages) {
                String imageUrl = "/api/product/" + productDTO.getProductId() + "/image/" + p.getId();
                imageUrls.add(imageUrl);
                System.out.println("ImageUrls: " + imageUrl);
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

    @GetMapping(value = "/{productId}/image/{productImageId}",produces = {MediaType.IMAGE_JPEG_VALUE,MediaType.IMAGE_PNG_VALUE})
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
    public ResponseEntity<?> handleproductupdate(
            @RequestBody ProductDTO productDTO
    ){
        ProductDTO updatedProduct = this.productService.updateProduct(productDTO);
        Map<String,Object> response = new HashMap<>();
        response.put("message","Product successfully updated.");
        response.put("product",updatedProduct);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }


}
