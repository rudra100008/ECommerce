package com.E_Commerce.Services;

import com.E_Commerce.DTO.CartDTO;
import com.E_Commerce.DTO.CartItemDTO;
import com.E_Commerce.Entity.User;
import org.springframework.stereotype.Service;

@Service
public interface CartService {
    CartDTO createCart(CartDTO cartDTO);
    void createCartForUser(User user);
    CartDTO addItemToCart(Integer cartId, CartItemDTO cartItemDTO);

    CartDTO fetchCartById(Integer cartId);

    void deleteCartById(Integer cartId);

    CartDTO getCartByUserId(Integer userId);
    void clearCart(Integer cartId);
}
