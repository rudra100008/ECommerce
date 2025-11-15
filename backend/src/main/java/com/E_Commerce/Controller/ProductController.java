package com.E_Commerce.Controller;

import com.E_Commerce.Config.PageConfig;
import com.E_Commerce.DTO.PageInfo;
import com.E_Commerce.DTO.ProductDTO;
import com.E_Commerce.Entity.ProductImage;
import com.E_Commerce.Services.ImageService;
import com.E_Commerce.Services.ProductImageService;
import com.E_Commerce.Services.ProductService;
import lombok.RequiredArgsConstructor;
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
    public ResponseEntity<?> handleProductUpdate(
            @RequestBody ProductDTO productDTO
    ){
        ProductDTO updatedProduct = this.productService.updateProduct(productDTO);
        Map<String,Object> response = new HashMap<>();
        response.put("message","Product successfully updated.");
        response.put("product",updatedProduct);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @GetMapping("/fetchProducts")
    public ResponseEntity<?> fetchRandomProducts(
            @RequestParam(required = false,defaultValue = PageConfig.PAGE_NUMBER,name = "pageNumber")Integer pageNumber,
            @RequestParam(required = false,defaultValue = PageConfig.PAGE_SIZE,name = "pageSize")Integer pageSize
    ){
        PageInfo<ProductDTO> productDTOPageInfo = this.productService.findRandomProduct(pageNumber,pageSize);
        this.productService.deleteProductsWithoutImages(productDTOPageInfo.getData());
        productDTOPageInfo.getData()
                .forEach(productDTO ->setFirstImageUrl(productDTO) );
        return ResponseEntity.status(HttpStatus.OK).body(productDTOPageInfo);
    }

    @GetMapping("/{productId}")
    public ResponseEntity<?> findProductById(
            @PathVariable(name = "productId")Integer productId
    )
    {
        ProductDTO productDTO = this.productService.findByProductId(productId);
        productDTO.setImageUrls(getImageUrls(productDTO));
        return  ResponseEntity.status(HttpStatus.OK).body(productDTO);
    }



    // createImageUrl for first product imageUrl
    private ProductDTO setFirstImageUrl(ProductDTO productDTO){
        List<ProductImage> productImageList = this.productImageService.getProductImageByProductId(productDTO.getProductId());

        if(!productImageList.isEmpty()) {
            ProductImage productImage = productImageList.get(0);
            String imageUrl = "/api/product/" + productDTO.getProductId() + "/image/" + productImage.getId();
            productDTO.setImageUrls(List.of(imageUrl));
        }
        return  productDTO;
    }
    private List<String> getImageUrls(ProductDTO productDTO){
        List<ProductImage> productImages = this.productImageService.getProductImageByProductId(productDTO.getProductId());
        List<String> imageUrls = new ArrayList<>();
        if(!productImages.isEmpty()){
            for(ProductImage productImage : productImages){
               String imageUrl = "/api/product/" + productDTO.getProductId() + "/image/" + productImage.getId();
               imageUrls.add(imageUrl);
            }
        }
        return imageUrls;
    }


}
