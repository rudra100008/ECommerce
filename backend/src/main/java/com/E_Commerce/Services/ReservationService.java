package com.E_Commerce.Services;

import com.E_Commerce.Entity.Reservation;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ReservationService {
    Reservation createReservation(Integer userId,Integer productId,int reservedQuantity);
    Reservation updateReservation(Integer userId,Integer productId,Integer reservedQuantity);
    void deleteReservation(Integer userId,Integer productId);
}
