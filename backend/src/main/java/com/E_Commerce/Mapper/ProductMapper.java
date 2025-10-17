package com.E_Commerce.Mapper;

import com.E_Commerce.DTO.ProductDTO;
import com.E_Commerce.Entity.Category;
import com.E_Commerce.Entity.Inventory;
import com.E_Commerce.Entity.Product;
import com.E_Commerce.Entity.ProductImage;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring")
public interface ProductMapper {

    @Mapping(source = "category.categoryId", target = "categoryId")
    @Mapping(source = "productImages", target = "imageUrls", qualifiedByName = "mapImagesToUrl")
    @Mapping(source = "inventory.stockQuantity", target = "stockQuantity")
    ProductDTO toProductDTO(Product product);


   default Product toProduct(ProductDTO productDTO){
        if(productDTO == null){
            return null;
        }
        Product product = Product.builder()
                .productId(productDTO.getProductId())
                .productName(productDTO.getProductName())
                .description(productDTO.getDescription())
                .price(productDTO.getPrice())
                .discount(productDTO.getDiscount())
                .sku(productDTO.getSku())
                .isActive(true) // Default to active
                .productImages(new ArrayList<>())
                .orderItems(new ArrayList<>())
                .cartItems(new ArrayList<>())
                .build();

       Category category = new Category();
       category.setCategoryId(productDTO.getCategoryId());
       product.setCategory(category);


       if(productDTO.getImageUrls() != null && !productDTO.getImageUrls().isEmpty()){
           List<ProductImage> productImages = new ArrayList<>();
           for(String imageUrl : productDTO.getImageUrls()){
               ProductImage productImage = ProductImage.builder()
                       .imageUrl(imageUrl)
                       .product(product)
                       .build();
               productImages.add(productImage);
           }

           product.setProductImages(productImages);
       }

       if (productDTO.getStockQuantity() != null) {
           Inventory inventory = Inventory.builder()
                   .stockQuantity(productDTO.getStockQuantity())
                   .reservedQuantity(0)
                   .product(product) // Set bidirectional relationship
                   .build();
           product.setInventory(inventory);
       }

        return product;
    }

    @Named("mapImagesToUrl")
    default List<String> mapImagesToUrl(List<ProductImage> productImage){

       if(productImage == null){
           return  new ArrayList<>();
       }
      return productImage.stream().map(
               ProductImage::getImageUrl
       ).toList();
    }


}
