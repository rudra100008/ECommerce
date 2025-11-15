package com.E_Commerce.Mapper;

import com.E_Commerce.DTO.CartItemDTO;
import com.E_Commerce.Entity.CartItem;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface CartItemMapper {
    @Mapping(source = "id",target = "cartItemId")
    @Mapping(source = "product.productId",target = "productId")
    @Mapping(source = "cart.id",target = "cartId")
    CartItemDTO toCartItemDTO(CartItem cartItem);

    @Mapping(source = "cartItemId",target = "id")
    @Mapping(source = "productId",target = "product.productId")
    @Mapping(source = "cartId",target = "cart.id")
    @Mapping(target = "product", ignore = true) // Add this to avoid incomplete product object
    @Mapping(target = "cart", ignore = true)
    CartItem toCartItem(CartItemDTO cartItemDTO);
}
