package com.E_Commerce.Controller;

import com.E_Commerce.CustomResponse;
import com.E_Commerce.DTO.CartItemDTO;
import com.E_Commerce.DTO.CreateOrderRequest;
import com.E_Commerce.DTO.OrderDTO;
import com.E_Commerce.DTO.OrderItemDTO;
import com.E_Commerce.Services.OrderServices;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    @PostMapping("/getSubTotal")
    public ResponseEntity<?> getSubTotal(
            @RequestBody List<CartItemDTO> cartItemDTOs
    ){
        System.out.println("CartItemDTO: " +cartItemDTOs.toString());
        Double subTotal = this.orderServices.getSubTotal(cartItemDTOs);
        System.out.println("SubTotal: "+subTotal);
        return ResponseEntity.status(HttpStatus.OK).body(subTotal);
    }
}
