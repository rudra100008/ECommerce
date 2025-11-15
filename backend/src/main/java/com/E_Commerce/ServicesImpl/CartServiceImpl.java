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
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService {
    private final CartRepository cartRepository;
    private final CartItemRepository cartItemRepository;
    private final CartMapper cartMapper;
    private final AuthUtils authUtils;
    private final CartItemMapper cartItemMapper;
    private final InventoryRepository inventoryRepository;
    private final ProductRepository productRepository;
    Logger logger = LoggerFactory.getLogger(CartServiceImpl.class);

    @Override
    @Transactional
    public CartDTO createCart(CartDTO cartDTO) {
        User loggedInUser = authUtils.getLoggedInUser();
        Cart cart = this.cartMapper.toCart(cartDTO);
        if(cart.getCartItem() != null){
            for(CartItem cartItem : cart.getCartItem()){
                cartItem.setCart(cart);
            }
        }
        if(cart.getUser() != null){
            if(cart.getUser().getUserId().equals(loggedInUser.getUserId())){
                loggedInUser.setCart(cart);
            }
        }
        Cart savedCart = this.cartRepository.save(cart);
        return this.cartMapper.toCartDTO(savedCart);
    }

    @Override
    @Transactional
    public CartDTO addItemToCart(Integer cartId, CartItemDTO cartItemDTO) {
        validateCartItemDTO(cartItemDTO);
        User loggedInUser = authUtils.getLoggedInUser();
        Cart cart = this.cartRepository.findById(cartId)
                .orElseThrow(()-> new ResourceNotFoundException(cartId + " not found"));

        if(!cart.getUser().getUserId().equals(loggedInUser.getUserId())){
            throw new SecurityException("User not authorized to modify this cart.");
        } else{
            cart.setUser(loggedInUser);
        }
       boolean itemExists = isCartItemAlreadyInCart(cartItemDTO,cart);
        if(itemExists){
           cart = updateExistingCartItemQuantity(cartItemDTO,cart);
        }else{
            validateStockAvailability(cartItemDTO.getProductId(), cartItemDTO.getQuantity());
            cart = addNewItemToCart(cartItemDTO,cart);
        }
        Cart savedCart = this.cartRepository.save(cart);
        return this.cartMapper.toCartDTO(savedCart);
    }


    @Override
    @Transactional(readOnly = true)
    public CartDTO fetchCartById(Integer cartId) {
       Cart cart = this.cartRepository.findById(cartId)
               .orElseThrow(()-> new ResourceNotFoundException("CartId not found."));
        logger.info("Cart fetched successfully with ID: {}", cartId);
        return cartMapper.toCartDTO(cart);
    }

    @Override
    @Transactional
    public void deleteCartById(Integer cartId) {
        Cart cart = this.cartRepository.findById(cartId)
                .orElseThrow(()-> new ResourceNotFoundException("cart not found."));
        for(CartItem cartItem : cart.getCartItem()){
            Inventory inventory =  this.inventoryRepository.findByProduct(cartItem.getProduct())
                    .orElseThrow(()-> new ResourceNotFoundException("Inventory not found."));
            inventory.releaseReservedQuantity(cartItem.getQuantity());
            this.inventoryRepository.save(inventory);
        }

        this.cartRepository.deleteById(cartId);
        logger.info("Cart deleted and inventory released. Cart ID: {}", cartId);
    }


    //helper method

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
        if (cartItemDTO.getQuantity() > 100) { // example limit
            throw new IllegalArgumentException("Quantity cannot exceed 100 items");
        }
    }
    private boolean isCartItemAlreadyInCart(CartItemDTO cartItemDTO,Cart cart){
        return cart.getCartItem().stream()
                .anyMatch(cartItem -> cartItem.getProduct().getProductId().equals(cartItemDTO.getProductId()));
    }
    private Cart updateExistingCartItemQuantity(CartItemDTO cartItemDTO,Cart cart){
        cart.getCartItem().stream()
                .filter(cartItem -> cartItem.getProduct().getProductId().equals(cartItemDTO.getProductId()))
                .findFirst()
                .ifPresent(existingItem->{
                    int newTotalQuantity = existingItem.getQuantity() + cartItemDTO.getQuantity();

                    validateStockAvailability(cartItemDTO.getProductId(), newTotalQuantity);

                    existingItem.setQuantity(newTotalQuantity);
                    existingItem.setCart(cart); // relationship is maintained
                });

        return cart;
    }

    private Cart addNewItemToCart(CartItemDTO cartItemDTO,Cart cart){
        CartItem newCartItem = this.cartItemMapper.toCartItem(cartItemDTO);
        newCartItem.setCart(cart); // relationship is maintained
        if(cart.getCartItem() == null){
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
            throw new IllegalArgumentException(product.getProductName() + " is out of stock");
        }

        if (inventory.getAvailableQuantity() < requestedQuantity) {
            throw new IllegalArgumentException(
                    String.format("Insufficient stock for %s. Requested: %d, Available: %d",
                            product.getProductName(), requestedQuantity, inventory.getAvailableQuantity())
            );
        }
        inventory.reserveQuantity(requestedQuantity);
        this.inventoryRepository.save(inventory);
    }
}
