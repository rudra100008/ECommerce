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
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    @GetMapping("/{orderId}/user/{userId}")
    public ResponseEntity<?> getOrderDetails(
            @PathVariable("orderId") Integer orderId,
            @PathVariable("userId")Integer userId
    ){
        OrderDTO orderDTO = this.orderServices.getOrderDetails(orderId,userId);

        return ResponseEntity.ok(orderDTO);
    }



    @DeleteMapping("/{orderId}")
    public ResponseEntity<?> deleteOrder(
            @PathVariable("orderId")Integer orderId
    ){
        this.orderServices.cancelOrder(orderId);
        return null;
    }

    @PostMapping("/{orderId}/shippingAddress/user/{userId}")
    public ResponseEntity<?> saveShippingAddress(
            @PathVariable("orderId") Integer orderId,
            @PathVariable("userId") Integer userId,

            @Valid @RequestBody OrderDTO orderDTO,
            BindingResult result
    ){
        if(result.hasErrors()){
            Map<String,Object> errorRes = new HashMap<>();
            result.getFieldErrors()
                    .forEach(error -> errorRes.put(error.getField(),error.getDefaultMessage()));
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorRes);
        }
         this.orderServices.saveShippingAddress(orderDTO.getShippingAddressDTO(),orderId,userId);
        OrderDTO savedOrderDTO = this.orderServices.saveFullNameAndPhoneNumberInOrder(orderDTO);
        return ResponseEntity.status(HttpStatus.OK).body(savedOrderDTO);
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

