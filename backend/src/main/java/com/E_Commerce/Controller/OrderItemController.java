package com.E_Commerce.Controller;

import com.E_Commerce.DTO.OrderItemDTO;
import com.E_Commerce.Services.OrderItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/orderItem")
public class OrderItemController {
    private final OrderItemService orderItemService;

    @PostMapping("/fetchAllOrderItems")
    public ResponseEntity<?> fetchAllOrderItems(
            @RequestBody List<Integer> orderItemIds
    ){
        List<OrderItemDTO> orderItemDTOS = this.orderItemService.fetchAllOrderItems(orderItemIds);


        return ResponseEntity.status(HttpStatus.OK).body(orderItemDTOS);

    }
}
