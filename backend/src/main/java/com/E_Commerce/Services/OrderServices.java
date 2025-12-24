package com.E_Commerce.Services;

import com.E_Commerce.DTO.*;
import com.E_Commerce.Entity.ShippingAddress;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface OrderServices {
    OrderDTO createOrder(OrderDTO orderDTO, List<OrderItemDTO> orderItemDTOS);
    Double getSubTotal(List<CartItemDTO> cartItemDTOs);
    void cancelOrder(Integer orderId);
    OrderDTO saveShippingAddress(ShippingAddressDTO shippingAddressDTO,Integer orderId,Integer userId);
    OrderDTO saveFullNameAndPhoneNumberInOrder(OrderDTO orderDTO);
    OrderDTO getOrderDetails(Integer orderId,int userId);
}
