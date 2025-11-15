package com.E_Commerce.Controller;

import com.E_Commerce.Config.PageConfig;
import com.E_Commerce.DTO.CategoryDTO;
import com.E_Commerce.DTO.CategoryRequest;
import com.E_Commerce.DTO.PageInfo;
import com.E_Commerce.DTO.ProductDTO;
import com.E_Commerce.Entity.Category;
import com.E_Commerce.Entity.ProductImage;
import com.E_Commerce.Services.CategoryService;
import com.E_Commerce.Services.ImageService;
import com.E_Commerce.Services.ProductImageService;
import com.E_Commerce.Services.ProductService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
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
    private final ProductImageService productImageService;


    @PostMapping("/addProduct")
    public ResponseEntity<?> addProductForm(
            @Valid @RequestPart("category")CategoryRequest categoryRequest,
            @Valid @RequestPart("product") ProductDTO productDTO,
            BindingResult result,
            @RequestPart("image")List<MultipartFile> imageFiles
    )
    {
        if(result.hasErrors()){
            Map<String,Object> errorResponse = new HashMap<>();
            result.getFieldErrors()
                    .forEach(field-> errorResponse.put(field.getField(), field.getDefaultMessage()));

            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }
        ProductDTO savedProductDTO = new ProductDTO();
        if(categoryRequest != null  && productDTO != null && imageFiles != null || !imageFiles.isEmpty()) {
             savedProductDTO = this.productService.createProductWithImages(productDTO, categoryRequest, imageFiles);
        }
        Map<String,Object> response = new HashMap<>();
        response.put("message","Product added successfully");
        response.put("category",savedProductDTO.getCategoryId());
        response.put("product",savedProductDTO.getProductId());
        response.put("imageUrls",getImageUrls(savedProductDTO));
        return ResponseEntity.status(HttpStatus.CREATED).body(savedProductDTO);
    }

    @PostMapping("addProductImage/{productId}")
    public ResponseEntity<?> addProductImage(
            @PathVariable("productId")Integer productId,
            @RequestPart(name = "images") List<MultipartFile> imageFiles
    ){
        ProductDTO foundProduct = this.productService.findByProductId(productId);
        List<String> imageUrls = new ArrayList<>();
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
        this.productService.updateProductImages(imageUrls,productId);
        return ResponseEntity.status(HttpStatus.OK).body("Image Uploaded.");
    }


    @GetMapping("/products/category/{categoryId}")
    public ResponseEntity<?> fetchProductsWithCategory(
            @RequestParam(defaultValue = PageConfig.PAGE_NUMBER,required = false,name = "pageNumber")Integer pageNumber,
            @RequestParam(defaultValue = PageConfig.PAGE_SIZE,required = false,name = "pageSize")Integer pageSize,
            @PathVariable(name = "categoryId")Integer categoryId
    ){
        Category category = this.categoryService.findById(categoryId);
        PageInfo<ProductDTO> productDTOPageInfo = this.productService.findProducts(pageNumber,pageSize,categoryId);

        this.productService.deleteProductsWithoutImages(productDTOPageInfo.getData());

        for (ProductDTO productDTO : productDTOPageInfo.getData()) {
            productDTO.setImageUrls(getImageUrls(productDTO));
        }
        Map<String,Object> response = new HashMap<>();
        response.put("message","Products of category: "+ category.getName());
        response.put("product",productDTOPageInfo);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @PostMapping("/category")
    public ResponseEntity<?> createCategory(
            @Valid @RequestBody CategoryRequest categoryRequest,
            BindingResult result
            )
    {
        if(result.hasErrors()){
            Map<String ,Object> errorRes = new HashMap<>();
            result.getFieldErrors().forEach(field-> errorRes.put(field.getField(),field.getDefaultMessage()));
            return  ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorRes);
        }
        Category category = this.categoryService.createCategory(categoryRequest.getName());
        CategoryDTO categoryDTO = new CategoryDTO(category.getCategoryId(),category.getName());
        return  ResponseEntity.status(HttpStatus.CREATED).body(categoryDTO);
    }
    private List<String> getImageUrls(ProductDTO productDTO){
        List<String> imageUrls = new ArrayList<>();
        List<ProductImage> productImageList =  this.productImageService.getProductImageByProductId(productDTO.getProductId());
        productImageList.forEach(productImage -> {
            String imageUrl  = "/api/product/"+productImage.getProduct().getProductId() +"/image/"+productImage.getId();
            imageUrls.add(imageUrl);
        });
        return imageUrls;
    }

}
