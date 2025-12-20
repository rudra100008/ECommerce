package com.E_Commerce.Services;

import com.E_Commerce.DTO.CartItemDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CartItemService {
    CartItemDTO updateQuantityOfItem(Integer cartItemId,Integer quantity);
    void deleteCartItem(Integer cartItemId);
    Double getSubTotal(List<CartItemDTO> cartItemDTOs);
}
