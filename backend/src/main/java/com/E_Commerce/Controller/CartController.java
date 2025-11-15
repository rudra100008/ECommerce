package com.E_Commerce.Controller;

import com.E_Commerce.DTO.AddToCartRequest;
import com.E_Commerce.DTO.CartDTO;
import com.E_Commerce.DTO.CartItemDTO;
import com.E_Commerce.DTO.ProductDTO;
import com.E_Commerce.Entity.Inventory;
import com.E_Commerce.Services.CartItemService;
import com.E_Commerce.Services.CartService;
import com.E_Commerce.Services.InventoryService;
import com.E_Commerce.Services.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/cart")
public class CartController {
    private final CartService cartService;
    private final CartItemService cartItemService;
    private final ProductService productService;
    private final InventoryService inventoryService;

    @PostMapping()
    public ResponseEntity<?> createCart(
            @RequestBody CartDTO cartDTO
    ){
        CartDTO savedCartDTO = this.cartService.createCart(cartDTO);
        Map<String,Object> response = new HashMap<>();
        response.put("message","Cart created for user: " + savedCartDTO.getUserId());
        response.put("Cart",savedCartDTO);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }
    @PostMapping("/addToCart")
    public ResponseEntity<Map<String,Object>> addToCart(
            @RequestBody AddToCartRequest addToCartRequest
    ){
        CartDTO savedCartDTO = this.cartService.addItemToCart(addToCartRequest.getCartId(),addToCartRequest.getCartItemDTO());
        ProductDTO productDTO = this.productService.findByProductId(addToCartRequest.getCartItemDTO().getProductId());
        Map<String,Object> response = new HashMap<>();
        response.put("message",String.format("%d x %s is added to cart.",addToCartRequest.getCartItemDTO().getQuantity(),productDTO.getProductName()));
        response.put("Cart",savedCartDTO);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @GetMapping("/fetchProductInCart")
    public ResponseEntity<Map<String,Object>> fetchProductInCart(
            @RequestParam("cartId")Integer cartId
    ){
        CartDTO cartDTO = this.cartService.fetchCartById(cartId);
        Map<String,Object> response = new HashMap<>();
        response.put("message","Items in cart");
        response.put("Cart",cartDTO);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @PostMapping("/{cartItemId}/update-quantity/{quantity}")
    public ResponseEntity<?> updateQuantity(
            @PathVariable("cartItemId")Integer cartItemId,
            @PathVariable("quantity") Integer quantity
    ){
        CartItemDTO cartItemDTO = this.cartItemService.updateQuantityOfItem(cartItemId,quantity);
        return ResponseEntity.status(HttpStatus.OK).body(cartItemDTO);
    }
    @DeleteMapping("/{cartItemId}/delete-item")
    public ResponseEntity<?> deleteCartItem(
            @PathVariable("cartItemId")Integer cartItemId
    ){
        this.cartItemService.deleteCartItem(cartItemId);
        return ResponseEntity.ok("Cart Item is removed.");
    }
}
