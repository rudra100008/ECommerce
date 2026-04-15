package com.E_Commerce.Mapper;

import com.E_Commerce.DTO.ProductDTO;
import com.E_Commerce.Entity.*;
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
    @Mapping(target = "reservedQuantity", ignore = true)
    @Mapping(target = "availableQuantity",ignore = true)
    @Mapping(target = "isInStock",ignore = true)
    @Mapping(target = "createdAt",source = "createdAt")
    @Mapping(target = "updatedAt",source = "updatedAt")
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

       if (productDTO.getImageUrls() != null && !productDTO.getImageUrls().isEmpty()) {
           List<ProductImage> productImages = mapUrlsToImages(productDTO.getImageUrls(), product);
           product.setProductImages(productImages);
       }

       Integer stockQuantity = productDTO.getStockQuantity();
       if (productDTO.getStockQuantity() != null) {

           Inventory inventory = Inventory.builder()
                   .stockQuantity(stockQuantity)
                   .product(product)
                   .build();

           product.setInventory(inventory);
       }

        return product;
    }
    default List<ProductImage> mapUrlsToImages(List<String> imageUrls, Product product) {
        if (imageUrls == null || imageUrls.isEmpty()) {
            return new ArrayList<>();
        }

        List<ProductImage> productImages = new ArrayList<>();
        for (String imageUrl : imageUrls) {
            ProductImage productImage = ProductImage.builder()
                    .imageUrl(imageUrl)
                    .product(product)
                    .build();
            productImages.add(productImage);
        }
        return productImages;
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
