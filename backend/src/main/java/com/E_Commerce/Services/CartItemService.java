package com.E_Commerce.Services;

import com.E_Commerce.DTO.CartItemDTO;
import org.springframework.stereotype.Service;

@Service
public interface CartItemService {
    CartItemDTO updateQuantityOfItem(Integer cartItemId,Integer quantity);
    void deleteCartItem(Integer cartItemId);
}
