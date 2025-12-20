package com.E_Commerce.ServicesImpl;

import com.E_Commerce.Entity.Inventory;
import com.E_Commerce.Entity.Reservation;
import com.E_Commerce.Entity.User;
import com.E_Commerce.Enum.ReservationStatus;
import com.E_Commerce.Exception.InsufficientStockException;
import com.E_Commerce.Exception.ResourceNotFoundException;
import com.E_Commerce.Repository.InventoryRepository;
import com.E_Commerce.Repository.ReservationRepository;
import com.E_Commerce.Repository.UserRepository;
import com.E_Commerce.Securty.AuthUtils;
import com.E_Commerce.Services.ReservationService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ReservationServiceImpl implements ReservationService {
    private final ReservationRepository reservationRepository;
    private final InventoryRepository inventoryRepository;
    private final UserRepository userRepository;
    private final AuthUtils authUtils;

    @Override
    @Transactional
    public Reservation createReservation(Integer userId,Integer productId,int reservedQuantity) {
        validateUser(userId);

        User user = getUser(userId);
        Inventory inventory = getInventory(productId);

        validateStockAvailability(reservedQuantity,inventory);
        Reservation existingReservation = this.reservationRepository.findActiveReservationByUserAndProduct(
                user.getUserId(),
                productId,
                LocalDateTime.now()
        );
        if (existingReservation != null){
            return updatingExistingReservation(existingReservation,reservedQuantity,inventory);
        }
        Reservation reservation = Reservation
                .builder()
                .inventory(inventory)
                .user(user)
                .reservedAt(LocalDateTime.now())
                .expiresAt(LocalDateTime.now().plusWeeks(1))
                .reservedQuantity(reservedQuantity)
                .status(ReservationStatus.ACTIVE)
                .build();

        user.addReservation(reservation);
        inventory.addReservation(reservation);
        return this.reservationRepository.save(reservation);
    }

    @Override
    @Transactional
    public Reservation updateReservation(Integer userId,Integer productId,Integer reservedQuantity) {
        validateUser(userId);
        Inventory inventory =  getInventory(productId);
        Reservation reservation = this.reservationRepository.findActiveReservationByUserAndProduct(
                userId, productId, LocalDateTime.now());

        if (reservation == null) {
            throw new ResourceNotFoundException("Reservation not found");
        }

        int quantity = reservedQuantity - reservation.getReservedQuantity();
        if (quantity > 0){
            validateStockAvailability(quantity,inventory);
        }

        reservation.setReservedQuantity(reservedQuantity);
        reservation.setReservedAt(LocalDateTime.now());
        reservation.setExpiresAt(LocalDateTime.now().plusWeeks(1));
        reservation.setStatus(ReservationStatus.ACTIVE);

        return reservationRepository.save(reservation);
    }

    @Override
    @Transactional
    public void deleteReservation(Integer userId,Integer productId) {
        validateUser(userId);
        Inventory inventory = getInventory(productId);
        Reservation reservation = this.reservationRepository.findByUserIdAndInventoryId(userId,inventory.getId());

        this.reservationRepository.delete(reservation);
    }


    //helper method
    private Reservation updatingExistingReservation(Reservation reservation,int newQuantity,Inventory inventory){
        validateStockAvailability(newQuantity-reservation.getReservedQuantity(),inventory);
        reservation.setReservedQuantity(newQuantity);
        reservation.setReservedAt(LocalDateTime.now());
        reservation.setExpiresAt(LocalDateTime.now().plusWeeks(1));
        return reservationRepository.save(reservation);
    }
    private Inventory getInventory(int productId){
        return this.inventoryRepository.findByProductId(productId)
                .orElseThrow(()->  new ResourceNotFoundException("Inventory not found."));
    }
    private User getUser(int userId){
        return  this.userRepository.findById(userId)
                .orElseThrow(()-> new ResourceNotFoundException("User not found"));
    }
    private void validateUser(int userId){
        User loggedInUser = authUtils.getLoggedInUser();
        if(!loggedInUser.getUserId().equals(userId)){
            throw new AccessDeniedException("You are not allowed to access reservation service.");
        }
    }
    private void validateStockAvailability(int reservedQuantity,Inventory inventory){
        if(inventory.getAvailableQuantity() < reservedQuantity){
            throw new InsufficientStockException(inventory.getProduct().getProductName() + " is not in stock.");
        }
    }
}
