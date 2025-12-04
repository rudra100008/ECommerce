package com.E_Commerce.DTO;


import com.E_Commerce.Entity.ShippingAddress;
import com.E_Commerce.Enum.OrderStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OrderDTO {
    private Integer orderId;
    private LocalDateTime orderDate;
    private OrderStatus status;
    private Double totalAmount;


    private Integer userId;

    @Builder.Default
    private List<Integer> orderItemIds = new ArrayList<>();

    private Integer paymentId;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;


    private ShippingAddress shippingAddress;

}
