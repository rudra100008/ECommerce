package com.E_Commerce.Repository;

import com.E_Commerce.Entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order,Integer> {
    @Query("SELECT o from Order o WHERE o.status = 'DELIVERED'")
    List<Order> findOrderWithDeliveredStatus();
}
