package com.E_Commerce.Mapper;

import com.E_Commerce.DTO.CartDTO;
import com.E_Commerce.Entity.Cart;
import com.E_Commerce.Entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

@Mapper(componentModel = "spring",uses = CartItemMapper.class)
public interface CartMapper {
    @Mapping(source = "id",target = "cartId")
    @Mapping(source = "cartItem",target = "cartItem")
    @Mapping(source = "user.userId", target = "userId")
    CartDTO toCartDTO(Cart cart);


    @Mapping(source = "cartId", target = "id")
    @Mapping(source = "cartItem", target = "cartItem")
    @Mapping(source = "userId",target ="user",qualifiedByName = "userIdToUser")
    Cart toCart(CartDTO cartDTO);

    @Named("userIdToUser")
    default User toUser(Integer userId){
        if(userId == null){
            return  null;
        }
        return User.builder()
                .userId(userId)
                .build();
    }
}
