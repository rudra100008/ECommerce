package com.E_Commerce.ServicesImpl;

import com.E_Commerce.DTO.CartItemDTO;
import com.E_Commerce.Entity.CartItem;
import com.E_Commerce.Entity.Product;
import com.E_Commerce.Entity.User;
import com.E_Commerce.Exception.ResourceNotFoundException;
import com.E_Commerce.Mapper.CartItemMapper;
import com.E_Commerce.Repository.*;
import com.E_Commerce.Securty.AuthUtils;
import com.E_Commerce.Services.CartItemService;
import com.E_Commerce.Services.ReservationService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CartItemServiceImpl implements CartItemService {
    private final CartItemRepository cartItemRepository;
    private final CartItemMapper cartItemMapper;
    private final ProductRepository productRepository;
    private final ReservationService reservationService;
    private final AuthUtils authUtils;
    private final UserRepository userRepository;

    @Override
    @Transactional
    public CartItemDTO updateQuantityOfItem(Integer cartItemId, Integer newQuantity) {
        // Validate quantity
        if(newQuantity < 1) {
            throw new IllegalArgumentException("Quantity must be at least 1.");
        }
        if(newQuantity > 100) {
            throw new IllegalArgumentException("Quantity cannot exceed 100");
        }

        // Get cart item and validate user
        CartItem cartItem = cartItemRepository.findById(cartItemId)
                .orElseThrow(() -> new ResourceNotFoundException("Cart Item not found."));

        User user = cartItem.getCart().getUser();
        validateUser(user.getUserId());

        int oldQuantity = cartItem.getQuantity();
        if (oldQuantity == newQuantity) {
            return this.cartItemMapper.toCartItemDTO(cartItem);
        }

        // Update reservation for the cart item
        updateReservationForCartItem(cartItem, user, newQuantity);

        // Update cart item quantity
        cartItem.setQuantity(newQuantity);
        CartItem updatedCartItem = cartItemRepository.save(cartItem);

        return this.cartItemMapper.toCartItemDTO(updatedCartItem);
    }

    @Override
    @Transactional
    public void deleteCartItem(Integer cartItemId) {
        CartItem cartItem = this.cartItemRepository.findById(cartItemId)
                .orElseThrow(() -> new ResourceNotFoundException("Cart item not found."));

        User user = cartItem.getCart().getUser();
        validateUser(user.getUserId());

        // Release reservation for this cart item
        releaseReservationForCartItem(cartItem, user);

        // Delete cart item
        this.cartItemRepository.deleteById(cartItemId);
    }

    @Override
    public Double getSubTotal(List<CartItemDTO> cartItemDTOs) {
        List<Integer> productIds = cartItemDTOs.stream()
                .map(CartItemDTO::getProductId)
                .collect(Collectors.toList());

        Map<Integer, Integer> itemMap = cartItemDTOs.stream()
                .collect(Collectors.toMap(
                        CartItemDTO::getProductId,
                        CartItemDTO::getQuantity
                ));

        List<Product> products = this.productRepository.findAllProductByIds(productIds);

        double subTotal = 0.0;
        for (Product product : products) {
            Integer quantity = itemMap.get(product.getProductId());
            if (quantity != null && product.getTotalPrice() != null) {
                subTotal += quantity * product.getTotalPrice();
            }
        }

        System.out.println("SubTotal: " + subTotal);
        return subTotal;
    }

    // ========== HELPER METHODS ==========

    private void validateUser(Integer userId) {
        User loggedInUser = this.authUtils.getLoggedInUser();

        if(!loggedInUser.getUserId().equals(userId)) {
            throw new AccessDeniedException("You are not authorized to modify this cart item.");
        }
    }

    private void updateReservationForCartItem(CartItem cartItem, User user, Integer newQuantity) {
        try {
            reservationService.updateReservation(
                    user.getUserId(),
                    cartItem.getProduct().getProductId(),
                    newQuantity
            );
        } catch (ResourceNotFoundException e) {
            // If reservation doesn't exist, create a new one
            createReservationForCartItem(cartItem, user);
        } catch (Exception e) {
            throw new RuntimeException("Failed to update reservation: " + e.getMessage(), e);
        }
    }

    private void createReservationForCartItem(CartItem cartItem, User user) {
        try {
            reservationService.createReservation(
                    user.getUserId(),
                    cartItem.getProduct().getProductId(),
                    cartItem.getQuantity()
            );
        } catch (Exception e) {
            throw new RuntimeException("Failed to create reservation: " + e.getMessage(), e);
        }
    }

    private void releaseReservationForCartItem(CartItem cartItem, User user) {
        try {
            reservationService.deleteReservation(
                    user.getUserId(),
                    cartItem.getProduct().getProductId()
            );
        } catch (Exception e) {
            // Log but don't throw to allow deletion to proceed
            System.err.println("Failed to release reservation for cart item: " + e.getMessage());
        }
    }
}