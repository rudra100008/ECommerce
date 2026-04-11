package com.E_Commerce.ServicesImpl;

import com.E_Commerce.DTO.CartDTO;
import com.E_Commerce.DTO.CartItemDTO;
import com.E_Commerce.Entity.*;
import com.E_Commerce.Exception.InsufficientStockException;
import com.E_Commerce.Exception.ResourceNotFoundException;
import com.E_Commerce.Exception.ServiceUnavailableException;
import com.E_Commerce.Mapper.CartItemMapper;
import com.E_Commerce.Mapper.CartMapper;
import com.E_Commerce.Repository.CartItemRepository;
import com.E_Commerce.Repository.CartRepository;
import com.E_Commerce.Securty.AuthUtils;
import com.E_Commerce.Services.CartService;
import com.E_Commerce.Services.InventoryService;
import com.E_Commerce.Services.ProductService;
import com.E_Commerce.Services.ReservationService;
import jakarta.persistence.LockTimeoutException;
import jakarta.persistence.PessimisticLockException;
import lombok.RequiredArgsConstructor;
import lombok.val;
import lombok.extern.slf4j.Slf4j;

import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
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
    private final InventoryService inventoryService;
    private final ProductService productService;
    private final ReservationService reservationService;

    @Override
    @Transactional
    public CartDTO createCart(CartDTO cartDTO) {
        Cart cart = this.cartMapper.toCart(cartDTO);

        User loggedInUser = validateUser(cart.getUser().getUserId());
        cart.setUser(loggedInUser);

        if (cart.getCartItem() != null && !cart.getCartItem().isEmpty()) {
            for (CartItem cartItem : cart.getCartItem()) {
                processNewCartItem(cartItem, cart, loggedInUser);
            }
        }

        loggedInUser.setCart(cart);
        Cart savedCart = this.cartRepository.save(cart);
        log.info("Cart created for user: {}", loggedInUser.getUserId());
        return this.cartMapper.toCartDTO(savedCart);
    }

    @Override
    @Transactional
    public void createCartForUser(User user) {
        if (user.getCart() == null) {
            Cart cart = Cart.builder()
                    .user(user)
                    .createdAt(LocalDateTime.now())
                    .updatedAt(LocalDateTime.now())
                    .cartItem(new ArrayList<>())
                    .build();

            this.cartRepository.save(cart);
            user.setCart(cart);
        }else{
            log.info("Cart already exists for user({}) : {}",user.getUserId(),user.getUsername());
        }
    }

    @Override
    @Transactional
    public CartDTO addItemToCart(Integer cartId, CartItemDTO cartItemDTO) {
        validateCartItemDTO(cartItemDTO);
        Product product = getProductById(cartItemDTO.getProductId());

        Cart cart = this.cartRepository.findById(cartId)
                .orElseThrow(() -> new ResourceNotFoundException("Cart " + cartId + " not found"));
                
        User loggedInUser = validateUser(cart.getUser().getUserId());

        
       

        boolean itemExists = isCartItemAlreadyInCart(cartItemDTO, cart);

        if(itemExists) {
             updateExistingCartItemQuantity(cartItemDTO, cart, loggedInUser,product);
        } else {
            validateStockAvailability(product, cartItemDTO.getQuantity());
            addNewItemToCart(cartItemDTO, cart, loggedInUser,product);
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
        validateUser(cart.getUser().getUserId());

        log.info("Cart fetched successfully with ID: {}", cartId);
        return cartMapper.toCartDTO(cart);
    }

    @Override
    @Transactional
    public void deleteCartById(Integer cartId) {
        Cart cart = this.cartRepository.findById(cartId)
                .orElseThrow(() -> new ResourceNotFoundException(String.format("Cart(%d) not found", cartId)));

        // Validate user authorization
        validateUser(cart.getUser().getUserId());

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
        validateUser(userId);

        Cart cart = cartRepository.findByUserId(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Cart not found for user ID: " + userId));

        return cartMapper.toCartDTO(cart);
    }

    @Override
    @Transactional
    public void clearCart(Integer cartId) {
        Cart cart = this.cartRepository.findById(cartId)
                .orElseThrow(() -> new ResourceNotFoundException("Cart " + cartId + " not found."));

        validateUser(cart.getUser().getUserId());

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


    private void processNewCartItem(CartItem cartItem, Cart cart, User user) {
        // Load managed entities
        Product product = getProductById(cartItem.getProduct().getProductId());
        cartItem.setProduct(product);
        cartItem.setCart(cart);

        validateStockAvailability(product, cartItem.getQuantity());
        createReservationForCartItem(cartItem, user);
    }

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


    // update quantity of a cartItem in  a cart
    private void updateExistingCartItemQuantity(CartItemDTO cartItemDTO, Cart cart, User user, Product product) {
        cart.getCartItem().stream()
                .filter(cartItem -> cartItem.getProduct().getProductId().equals(cartItemDTO.getProductId()))
                .findFirst()
                .ifPresent(existingItem -> {
                    int newTotalQuantity = existingItem.getQuantity() + cartItemDTO.getQuantity();
                    log.info("NewTotalQuantity: {}",newTotalQuantity);
                    validateStockAvailability(product, cartItemDTO.getQuantity());
                    updateReservationForCartItem(existingItem, user, newTotalQuantity);

                    existingItem.setQuantity(newTotalQuantity);
                    existingItem.setCart(cart);
                });

    }


    // add a  new item to cart
    private Cart addNewItemToCart(CartItemDTO cartItemDTO, Cart cart, User user,Product product) {

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

    private void validateStockAvailability(Product product, Integer requestedQuantity)  {
        try {
            Inventory inventory = this.inventoryService.fetchInventoryWithLock(product.getProductId());
            int totalReservationQuantity =  this.reservationService.getTotalReservationByInventoryId(inventory.getId());
            if (inventory.getAvailableQuantity(totalReservationQuantity) <= 0) {
                throw new InsufficientStockException(product.getProductName() + " is out of stock");
            }

            if (inventory.getAvailableQuantity(totalReservationQuantity) < requestedQuantity) {
                throw new InsufficientStockException(
                        String.format("Insufficient stock for %s. Requested: %d, Available: %d",
                                product.getProductName(), requestedQuantity, inventory.getAvailableQuantity(totalReservationQuantity))
                );
            }
        }catch (LockTimeoutException | PessimisticLockException e){
            throw new ServiceUnavailableException("System is busy with this product. Please try again in a few seconds.",e);
        }
    }
    private void validateStockAvailability(Integer productId,Integer requestedQuantity){
        Product product = getProductById(productId);
        validateStockAvailability(product,requestedQuantity);
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
            cartItem.setQuantity(newQuantity);
            createReservationForCartItem(cartItem, user);
        } catch (Exception e) {
            log.error("Failed to update reservation for cart item: {}", e.getMessage());
            throw new RuntimeException("Failed to update reservation: " + e.getMessage(), e);
        }
    }

    // CartServiceImpl
    private void releaseReservationForCartItem(CartItem cartItem, User user) {
        try {
            reservationService.deleteReservation(
                    user.getUserId(),
                    cartItem.getProduct().getProductId()
            );
            log.info("Reservation released for product {} user {}",
                    cartItem.getProduct().getProductId(), user.getUserId());

        } catch (ResourceNotFoundException e) {
            // Already released or never existed — not a real error
            log.debug("Reservation already released for product {}",
                    cartItem.getProduct().getProductId());

        } catch (Exception e) {
            // Log it clearly but don't block cart deletion
            // Reservation expires automatically via expiresAt field
            log.error("Failed to release reservation for product {} user {}. " +
                            "Will expire automatically at {}",
                    cartItem.getProduct().getProductId(),
                    user.getUserId(),
                    LocalDateTime.now().plusWeeks(1),
                    e);
            // Don't throw — cart deletion must proceed
        }
    }

    private Product getProductById(Integer productId){
        return this.productService.findProductEntityById(productId);
    }

    private User validateUser(Integer userId){
        User user = authUtils.getLoggedInUser();
        if(user.getUserId().equals(userId)){
            return user;
        }
        throw new AccessDeniedException("You are not allowed to access resource.Access Denied");
    }
}