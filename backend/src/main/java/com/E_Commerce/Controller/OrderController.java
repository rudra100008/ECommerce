package com.E_Commerce.Controller;

import com.E_Commerce.CustomResponse;
import com.E_Commerce.DTO.*;
import com.E_Commerce.DTO.OrderDTO.CreateOrderRequest;
import com.E_Commerce.DTO.OrderDTO.OrderResponse;
import com.E_Commerce.DTO.OrderDTO.UpdateOrderRequest;
import com.E_Commerce.Entity.ShippingAddress;
import com.E_Commerce.Services.OrderServices;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/order")
public class OrderController {
    private final OrderServices orderServices;

    @PostMapping
    public ResponseEntity<?> createOrder(
            @Valid @RequestBody CreateOrderRequest request,
            BindingResult result) {
        if (result.hasErrors()) {
            Map<String, Object> errors = new HashMap<>();
            result.getFieldErrors()
                  .forEach(e -> errors.put(e.getField(), e.getDefaultMessage()));
            return ResponseEntity.badRequest().body(errors);
        }
        OrderResponse response = orderServices.createOrder(request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(new CustomResponse<>(response, "Order creation successful"));
    }

    @GetMapping("/{orderId}/user/{userId}")
    public ResponseEntity<?> getOrderDetails(
            @PathVariable Integer orderId,
            @PathVariable Integer userId) {
        OrderResponse response = orderServices.getOrderDetails(orderId, userId);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{orderId}")
    public ResponseEntity<?> deleteOrder(@PathVariable Integer orderId) {
        orderServices.cancelOrder(orderId);
        return ResponseEntity.ok(Map.of("message", "Order cancelled."));
    }

    @PutMapping("/{orderId}/user/{userId}") 
    public ResponseEntity<?> updateOrder(
            @PathVariable Integer orderId,
            @PathVariable Integer userId,
            @Valid @RequestBody UpdateOrderRequest request,
            BindingResult result) {
        if (result.hasErrors()) {
            Map<String, Object> errors = new HashMap<>();
            result.getFieldErrors()
                  .forEach(e -> errors.put(e.getField(), e.getDefaultMessage()));
            return ResponseEntity.badRequest().body(errors);
        }
        OrderResponse response = orderServices.updateOrder(orderId, userId, request); // ← pass orderId
        return ResponseEntity.ok(response);
    }
}
