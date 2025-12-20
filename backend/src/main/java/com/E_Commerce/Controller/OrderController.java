package com.E_Commerce.Controller;

import com.E_Commerce.CustomResponse;
import com.E_Commerce.DTO.*;
import com.E_Commerce.Entity.ShippingAddress;
import com.E_Commerce.Services.OrderServices;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/order")
public class OrderController {
    private final OrderServices orderServices;


    @PostMapping
    public ResponseEntity<?> createOrder(
            @RequestBody CreateOrderRequest orderRequest
            )
    {
        OrderDTO createdOrder = this.orderServices.createOrder(orderRequest.getOrderDTO(),orderRequest.getOrderItemDTOs());

        return ResponseEntity.status(HttpStatus.CREATED).body(new CustomResponse<OrderDTO>(
                createdOrder,
                "Order creation successful"
        ));
    }

    @PostMapping("/shippingAddress")
    public ResponseEntity<?> postShippingAddress(
            @Valid @RequestBody ShippingAddressDTO shippingAddressDTO,
            BindingResult result
    ){
        ShippingAddressDTO savedAddress = this.orderServices.saveShippingAddress(shippingAddressDTO);
        return ResponseEntity.status(HttpStatus.OK).body(savedAddress);
    }

    @DeleteMapping("/{orderId}")
    public ResponseEntity<?> deleteOrder(
            @PathVariable("orderId")Integer orderId
    ){
        this.orderServices.cancelOrder(orderId);
        return null;
    }

//    @PostMapping("/getSubTotal")
//    public ResponseEntity<?> getSubTotal(
//            @RequestBody List<CartItemDTO> cartItemDTOs
//    ){
//        System.out.println("CartItemDTO: " +cartItemDTOs.toString());
//        Double subTotal = this.orderServices.getSubTotal(cartItemDTOs);
//        System.out.println("SubTotal: "+subTotal);
//        return ResponseEntity.status(HttpStatus.OK).body(subTotal);
//    }
}
