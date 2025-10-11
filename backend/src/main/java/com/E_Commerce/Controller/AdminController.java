package com.E_Commerce.Controller;

import com.E_Commerce.DTO.CategoryRequest;
import com.E_Commerce.DTO.ProductDTO;
import com.E_Commerce.Entity.Category;
import com.E_Commerce.Services.CategoryService;
import com.E_Commerce.Services.ImageService;
import com.E_Commerce.Services.ProductService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.autoconfigure.graphql.GraphQlProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {
    private final ProductService productService;
    private final ImageService imageService;
    private final CategoryService categoryService;


    @PostMapping("/addProduct")
    public ResponseEntity<?> addProduct(
            @Valid @RequestPart ProductDTO productDTO,
            BindingResult result
//            @RequestPart List<MultipartFile> imageFiles
            )
    {
        if(result.hasErrors()){
            Map<String,Object> errorResponse = new HashMap<>();
            result.getFieldErrors()
                    .forEach(field-> errorResponse.put(field.getField(), field.getDefaultMessage()));

            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }
//        List<String> imageUrls = new ArrayList<>();
//                if(imageFiles != null && !imageFiles.isEmpty()) {
//                    for(MultipartFile imageFile : imageFiles) {
//                        if(!imageFile.isEmpty()) {
//                            try {
//                                String imageUrl = imageService.uploadImage(productDTO.getProductName(), imageFile);
//                                imageUrls.add(imageUrl);
//                            } catch (IOException e) {
//                                Map<String, String> errorResponse = new HashMap<>();
//                                errorResponse.put("error", "Failed to upload image: " + e.getMessage());
//                                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
//                            }
//                        }
//                    }
//                }
//                productDTO.setImageUrls(imageUrls);
       ProductDTO savedProductDTO = this.productService.createProduct(productDTO);

        return ResponseEntity.status(HttpStatus.CREATED).body(savedProductDTO);
    }

    @PostMapping("addProductImage/{productId}")
    public ResponseEntity<?> addProductImage(
            @PathVariable("productId")Integer productId,
            @RequestPart(name = "productImage") List<MultipartFile> imageFiles
    ){
        ProductDTO foundProduct = this.productService.findByProductId(productId);
        List<String> imageUrls = null;
        if(imageFiles != null && !imageFiles.isEmpty()){
            for(MultipartFile imageFile : imageFiles){
                if(imageFile != null && !imageFile.isEmpty()){
                    try{
                        String imageUrl = this.imageService.uploadImage(foundProduct.getProductName(),imageFile);
                        imageUrls.add(imageUrl);
                    }catch(IOException e){
                        Map<String, String> errorResponse = new HashMap<>();
                        errorResponse.put("error", "Failed to upload image: " + e.getMessage());
                        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
                    }
                }
            }
        }
        foundProduct.setImageUrls(imageUrls);
        this.productService.createProduct(foundProduct);
        return ResponseEntity.status(HttpStatus.OK).body("Image Uploaded.");
    }
    @PostMapping("/category")
    public ResponseEntity<?> createCategory(
            @RequestBody CategoryRequest categoryRequest
            ){
        Category category = this.categoryService.createCategory(categoryRequest.getName());

        return  ResponseEntity.status(HttpStatus.CREATED).body(category);
    }
}
