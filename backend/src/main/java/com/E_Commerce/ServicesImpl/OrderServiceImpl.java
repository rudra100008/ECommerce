package com.E_Commerce.ServicesImpl;

import com.E_Commerce.DTO.OrderDTO;
import com.E_Commerce.Repository.OrderRepository;
import com.E_Commerce.Services.OrderServices;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderServices {
    private final OrderRepository orderRepository;


    @Override
    public OrderDTO createOrder(OrderDTO orderDTO) {

        return null;
    }
}
