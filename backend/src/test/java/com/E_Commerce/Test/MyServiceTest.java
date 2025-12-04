package com.E_Commerce.Test;


import com.E_Commerce.DTO.OrderDTO;
import com.E_Commerce.Entity.Order;
import com.E_Commerce.Mapper.OrderMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import java.time.LocalDateTime;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class MyServiceTest {
    @Autowired
    private OrderMapper orderMapper;
    @Test
    void testOrderToDTOMapping(){
        LocalDateTime testDate = LocalDateTime.now();
        Order order = Order.builder()
                .id(1)
                .totalAmount(100.00)
                .orderDate(testDate)
                .build();


        OrderDTO orderDTO = orderMapper.toOrderDTO(order);

        assertNotNull(orderDTO, "OrderDTO should not be null");
        assertEquals(1, orderDTO.getOrderId(), "Order ID should match");
        assertEquals(100.00, orderDTO.getTotalAmount(), "Total amount should match");
        assertEquals(testDate, orderDTO.getOrderDate(), "Order date should match");
        System.out.println("Order Entity: " + order);
        System.out.println("Mapped OrderDTO: " + orderDTO);

    }


}