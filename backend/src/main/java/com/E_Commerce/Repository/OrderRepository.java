package com.E_Commerce.Repository;

import com.E_Commerce.Entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order,Integer> {
    @Query("SELECT o from Order o WHERE o.status = 'DELIVERED'")
    List<Order> findOrderWithDeliveredStatus();

    @Query("SELECT o FROM Order o WHERE o.id =:orderId AND o.user.userId =:userId AND o.status = 'PENDING' ")
    Order findPendingOrderByOrderIdAndUserId(@Param("orderId")Integer orderId,@Param("userId")Integer userId);

    @Query("SELECT o FROM Order o WHERE o.id =:orderId AND o.user.userId =:userId AND o.status = 'DRAFT' ")
    Order findDraftOrderByOrderIdAndUserId(@Param("userId")Integer userId,@Param("orderId")Integer orderId);

    @Query("SELECT o FROM Order o WHERE o.user.userId =:userId AND o.status = 'DRAFT' ")
    Order findDRAFTOrderByUser(@Param("userId")int userId);
}
