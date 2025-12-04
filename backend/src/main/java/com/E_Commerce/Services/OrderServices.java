package com.E_Commerce.Services;

import com.E_Commerce.DTO.OrderDTO;
import org.springframework.stereotype.Service;

@Service
public interface OrderServices {
    OrderDTO createOrder(OrderDTO orderDTO);
}
