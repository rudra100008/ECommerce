package com.E_Commerce.ServicesImpl;

import com.E_Commerce.DTO.CartItemDTO;
import com.E_Commerce.Entity.CartItem;
import com.E_Commerce.Entity.Inventory;
import com.E_Commerce.Exception.ResourceNotFoundException;
import com.E_Commerce.Mapper.CartItemMapper;
import com.E_Commerce.Repository.CartItemRepository;
import com.E_Commerce.Repository.InventoryRepository;
import com.E_Commerce.Services.CartItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CartItemServiceImpl implements CartItemService {
    private final CartItemRepository cartItemRepository;
    private final CartItemMapper cartItemMapper;
    private final InventoryRepository inventoryRepository;
    @Override
    public CartItemDTO updateQuantityOfItem(Integer cartItemId, Integer newQuantity) {
        if(newQuantity < 1){
            throw  new IllegalArgumentException("Quantity must be  at least 1.");
        }
        if(newQuantity > 100){
            throw  new IllegalArgumentException("Quantity cannot exceed 100");
        }
       CartItem cartItem = cartItemRepository.findById(cartItemId)
               .orElseThrow(()-> new ResourceNotFoundException("Cart Item not found."));
        int oldItem  = cartItem.getQuantity();
        int difference = newQuantity - oldItem;
        if (difference == 0) {
            return this.cartItemMapper.toCartItemDTO(cartItem);
        }
        Inventory inventory = this.inventoryRepository.findByProduct(cartItem.getProduct())
                .orElseThrow(()-> new ResourceNotFoundException("Inventory not found."));
        if(difference > 0){
            inventory.reserveQuantity(difference);
        }else{
            inventory.releaseReservedQuantity(Math.abs(difference));
        }
        this.inventoryRepository.save(inventory);
        cartItem.setQuantity(newQuantity);
        CartItem updateCartItem = cartItemRepository.save(cartItem);
        return this.cartItemMapper.toCartItemDTO(updateCartItem);
    }

    @Override
    public void deleteCartItem(Integer cartItemId) {
        CartItem cartItem = this.cartItemRepository.findById(cartItemId)
                .orElseThrow(()-> new ResourceNotFoundException("cartItem not found."));
        Inventory inventory = this.inventoryRepository.findByProduct(cartItem.getProduct())
                .orElseThrow(()-> new ResourceNotFoundException("Inventory not found."));
        inventory.releaseReservedQuantity(cartItem.getQuantity());
        this.inventoryRepository.save(inventory);
        this.cartItemRepository.deleteById(cartItemId);
    }
}
