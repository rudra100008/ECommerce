package com.E_Commerce.ServicesImpl;

import com.E_Commerce.DTO.CartDTO;
import com.E_Commerce.DTO.CartItemDTO;
import com.E_Commerce.Entity.*;
import com.E_Commerce.Exception.InsufficientStockException;
import com.E_Commerce.Exception.ResourceNotFoundException;
import com.E_Commerce.Mapper.CartItemMapper;
import com.E_Commerce.Mapper.CartMapper;
import com.E_Commerce.Repository.CartItemRepository;
import com.E_Commerce.Repository.CartRepository;
import com.E_Commerce.Repository.InventoryRepository;
import com.E_Commerce.Repository.ProductRepository;
import com.E_Commerce.Securty.AuthUtils;
import com.E_Commerce.Services.CartService;
import com.E_Commerce.Services.ReservationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

@Service
@RequiredArgsConstructor
@Slf4j
public class CartServiceImpl implements CartService {
    private final CartRepository cartRepository;
    private final CartItemRepository cartItemRepository;
    private final CartMapper cartMapper;
    private final AuthUtils authUtils;
    private final CartItemMapper cartItemMapper;
    private final InventoryRepository inventoryRepository;
    private final ProductRepository productRepository;
    private final ReservationService reservationService;

    @Override
    @Transactional
    public CartDTO createCart(CartDTO cartDTO) {
        User loggedInUser = authUtils.getLoggedInUser();
        Cart cart = this.cartMapper.toCart(cartDTO);

        // Set user for the cart
        cart.setUser(loggedInUser);

        // Process cart items if any
        if(cart.getCartItem() != null && !cart.getCartItem().isEmpty()){
            for(CartItem cartItem : cart.getCartItem()){
                cartItem.setCart(cart);
                // Validate stock and create reservation for each item
                validateStockAvailability(cartItem.getProduct().getProductId(), cartItem.getQuantity());
                createReservationForCartItem(cartItem, loggedInUser);
            }
        }

        // Link cart to user
        loggedInUser.setCart(cart);

        Cart savedCart = this.cartRepository.save(cart);
        return this.cartMapper.toCartDTO(savedCart);
    }

    @Override
    @Transactional
    public CartDTO addItemToCart(Integer cartId, CartItemDTO cartItemDTO) {
        validateCartItemDTO(cartItemDTO);
        User loggedInUser = authUtils.getLoggedInUser();

        Cart cart = this.cartRepository.findById(cartId)
                .orElseThrow(() -> new ResourceNotFoundException("Cart " + cartId + " not found"));

        // Validate user authorization
        if(!cart.getUser().getUserId().equals(loggedInUser.getUserId())){
            throw new SecurityException("User not authorized to modify this cart.");
        }

        boolean itemExists = isCartItemAlreadyInCart(cartItemDTO, cart);

        if(itemExists) {
            cart = updateExistingCartItemQuantity(cartItemDTO, cart, loggedInUser);
        } else {
            validateStockAvailability(cartItemDTO.getProductId(), cartItemDTO.getQuantity());
            cart = addNewItemToCart(cartItemDTO, cart, loggedInUser);
        }

        Cart savedCart = this.cartRepository.save(cart);
        return this.cartMapper.toCartDTO(savedCart);
    }

    @Override
    @Transactional(readOnly = true)
    public CartDTO fetchCartById(Integer cartId) {
        Cart cart = this.cartRepository.findById(cartId)
                .orElseThrow(() -> new ResourceNotFoundException("Cart ID " + cartId + " not found."));

        // Validate user can view this cart
        User loggedInUser = authUtils.getLoggedInUser();
        if(!cart.getUser().getUserId().equals(loggedInUser.getUserId())) {
            throw new SecurityException("User not authorized to view this cart.");
        }

        log.info("Cart fetched successfully with ID: {}", cartId);
        return cartMapper.toCartDTO(cart);
    }

    @Override
    @Transactional
    public void deleteCartById(Integer cartId) {
        Cart cart = this.cartRepository.findById(cartId)
                .orElseThrow(() -> new ResourceNotFoundException("Cart " + cartId + " not found."));

        // Validate user authorization
        User loggedInUser = authUtils.getLoggedInUser();
        if(!cart.getUser().getUserId().equals(loggedInUser.getUserId())) {
            throw new SecurityException("User not authorized to delete this cart.");
        }

        // Release all reservations for cart items
        if(cart.getCartItem() != null) {
            for(CartItem cartItem : cart.getCartItem()) {
                releaseReservationForCartItem(cartItem, cart.getUser());
            }
        }

        // Remove cart reference from user
        cart.getUser().setCart(null);

        this.cartRepository.deleteById(cartId);
        log.info("Cart deleted and reservations released. Cart ID: {}", cartId);
    }

    @Override
    @Transactional(readOnly = true)
    public CartDTO getCartByUserId(Integer userId) {
        User loggedInUser = authUtils.getLoggedInUser();

        if(!loggedInUser.getUserId().equals(userId)) {
            throw new SecurityException("You can only view your own cart.");
        }

        Cart cart = cartRepository.findByUserId(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Cart not found for user ID: " + userId));

        return cartMapper.toCartDTO(cart);
    }

    @Override
    @Transactional
    public void clearCart(Integer cartId) {
        Cart cart = this.cartRepository.findById(cartId)
                .orElseThrow(() -> new ResourceNotFoundException("Cart " + cartId + " not found."));

        User loggedInUser = authUtils.getLoggedInUser();
        if(!cart.getUser().getUserId().equals(loggedInUser.getUserId())) {
            throw new SecurityException("User not authorized to clear this cart.");
        }

        // Release reservations for all items
        if(cart.getCartItem() != null) {
            for(CartItem cartItem : cart.getCartItem()) {
                releaseReservationForCartItem(cartItem, cart.getUser());
            }
            cart.getCartItem().clear();
        }

        this.cartRepository.save(cart);
        log.info("Cart cleared. Cart ID: {}", cartId);
    }

    // ========== HELPER METHODS ==========

    private void validateCartItemDTO(CartItemDTO cartItemDTO) {
        if (cartItemDTO == null) {
            throw new IllegalArgumentException("CartItem cannot be null");
        }
        if (cartItemDTO.getProductId() == null) {
            throw new IllegalArgumentException("Product ID cannot be null");
        }
        if (cartItemDTO.getQuantity() == null || cartItemDTO.getQuantity() <= 0) {
            throw new IllegalArgumentException("Quantity must be greater than 0");
        }
        if (cartItemDTO.getQuantity() > 100) {
            throw new IllegalArgumentException("Quantity cannot exceed 100 items");
        }
    }

    private boolean isCartItemAlreadyInCart(CartItemDTO cartItemDTO, Cart cart) {
        if(cart.getCartItem() == null || cart.getCartItem().isEmpty()) {
            return false;
        }

        return cart.getCartItem().stream()
                .anyMatch(cartItem -> cartItem.getProduct().getProductId().equals(cartItemDTO.getProductId()));
    }

    private Cart updateExistingCartItemQuantity(CartItemDTO cartItemDTO, Cart cart, User user) {
        cart.getCartItem().stream()
                .filter(cartItem -> cartItem.getProduct().getProductId().equals(cartItemDTO.getProductId()))
                .findFirst()
                .ifPresent(existingItem -> {
                    int newTotalQuantity = existingItem.getQuantity() + cartItemDTO.getQuantity();
                    System.out.println("NewTotalQuantity: "+ newTotalQuantity);
                    validateStockAvailability(cartItemDTO.getProductId(), newTotalQuantity);
                    updateReservationForCartItem(existingItem, user, newTotalQuantity);

                    existingItem.setQuantity(newTotalQuantity);
                    existingItem.setCart(cart);
                });

        return cart;
    }

    private Cart addNewItemToCart(CartItemDTO cartItemDTO, Cart cart, User user) {
        Product product = productRepository.findById(cartItemDTO.getProductId())
                .orElseThrow(() -> new ResourceNotFoundException("Product with ID " + cartItemDTO.getProductId() + " not found"));

        CartItem newCartItem = CartItem.builder()
                .product(product)
                .quantity(cartItemDTO.getQuantity())
                .cart(cart)
                .build();

        createReservationForCartItem(newCartItem, user);

        if(cart.getCartItem() == null) {
            cart.setCartItem(new ArrayList<>());
        }
        cart.getCartItem().add(newCartItem);

        return cart;
    }

    private void validateStockAvailability(Integer productId, Integer requestedQuantity) {
        Product product = this.productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product with ID " + productId + " not found"));

        Inventory inventory = this.inventoryRepository.findByProduct(product)
                .orElseThrow(() -> new ResourceNotFoundException("Inventory not found for product ID " + productId));

        if (inventory.getAvailableQuantity() <= 0) {
            throw new InsufficientStockException(product.getProductName() + " is out of stock");
        }

        if (inventory.getAvailableQuantity() < requestedQuantity) {
            throw new InsufficientStockException(
                    String.format("Insufficient stock for %s. Requested: %d, Available: %d",
                            product.getProductName(), requestedQuantity, inventory.getAvailableQuantity())
            );
        }
    }

    private void createReservationForCartItem(CartItem cartItem, User user) {
        try {
            reservationService.createReservation(
                    user.getUserId(),
                    cartItem.getProduct().getProductId(),
                    cartItem.getQuantity()
            );
            log.info("Reservation created for product {} (quantity: {}) for user {}",
                    cartItem.getProduct().getProductId(), cartItem.getQuantity(), user.getUserId());
        } catch (Exception e) {
            log.error("Failed to create reservation for cart item: {}", e.getMessage());
            throw new RuntimeException("Failed to reserve item: " + e.getMessage(), e);
        }
    }

    private void updateReservationForCartItem(CartItem cartItem, User user, Integer newQuantity) {
        try {
            reservationService.updateReservation(
                    user.getUserId(),
                    cartItem.getProduct().getProductId(),
                    newQuantity
            );
            log.info("Reservation updated for product {} (new quantity: {}) for user {}",
                    cartItem.getProduct().getProductId(), newQuantity, user.getUserId());
        } catch (ResourceNotFoundException e) {
            // If reservation doesn't exist, create a new one
            createReservationForCartItem(cartItem, user);
        } catch (Exception e) {
            log.error("Failed to update reservation for cart item: {}", e.getMessage());
            throw new RuntimeException("Failed to update reservation: " + e.getMessage(), e);
        }
    }

    private void releaseReservationForCartItem(CartItem cartItem, User user) {
        try {
            reservationService.deleteReservation(
                    user.getUserId(),
                    cartItem.getProduct().getProductId()
            );
            log.info("Reservation released for product {} for user {}",
                    cartItem.getProduct().getProductId(), user.getUserId());
        } catch (Exception e) {
            log.error("Failed to release reservation for cart item: {}", e.getMessage());
            // Don't throw to allow operation to proceed
        }
    }
}