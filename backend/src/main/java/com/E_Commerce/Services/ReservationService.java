package com.E_Commerce.Services;

import com.E_Commerce.Entity.Reservation;
import org.springframework.stereotype.Service;

@Service
public interface ReservationService {
    void createReservation(Integer userId,Integer productId,int reservedQuantity);
    Reservation updateReservation(Integer userId,Integer productId,Integer reservedQuantity);
    void deleteReservation(Integer userId,Integer productId);
    int getTotalReservationByInventoryId(int inventoryId);
    int getTotalReservationByProductId(int productId);


}
