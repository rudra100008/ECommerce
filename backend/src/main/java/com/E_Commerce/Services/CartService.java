package com.E_Commerce.Services;

import com.E_Commerce.DTO.CartDTO;
import com.E_Commerce.DTO.CartItemDTO;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.stereotype.Service;

@Service
public interface CartService {
    CartDTO createCart(CartDTO cartDTO);
    CartDTO addItemToCart(Integer cartId, CartItemDTO cartItemDTO);

    CartDTO fetchCartById(Integer cartId);

    void deleteCartById(Integer cartId);
}
