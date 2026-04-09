package com.E_Commerce.ServicesImpl;

import com.E_Commerce.Entity.Inventory;
import com.E_Commerce.Entity.Reservation;
import com.E_Commerce.Entity.User;
import com.E_Commerce.Enum.ReservationStatus;
import com.E_Commerce.Exception.InsufficientStockException;
import com.E_Commerce.Exception.ResourceNotFoundException;
import com.E_Commerce.Exception.ServiceUnavailableException;
import com.E_Commerce.Repository.InventoryRepository;
import com.E_Commerce.Repository.ReservationRepository;
import com.E_Commerce.Repository.UserRepository;
import com.E_Commerce.Securty.AuthUtils;
import com.E_Commerce.Services.InventoryService;
import com.E_Commerce.Services.ReservationService;
import com.E_Commerce.Services.UserService;
import jakarta.persistence.LockTimeoutException;
import jakarta.persistence.PessimisticLockException;
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
    private final InventoryService inventoryService;
//    private final UserService userService;
    private final AuthUtils authUtils;

    @Override
    @Transactional
    public void createReservation(Integer userId,Integer productId,int newReservedQuantity) {
        User user = validateUser(userId);
        Inventory inventory = getInventory(productId);
        int totalReservation = getTotalReservationByInventoryId(inventory.getId());
        validateStockAvailability(newReservedQuantity,totalReservation,inventory);
        Reservation existingReservation = this.reservationRepository.findActiveReservationByUserAndProduct(
                user.getUserId(),
                productId,
                LocalDateTime.now()
        );

        if (existingReservation != null){
            int newTotalReservedQuantity = existingReservation.getReservedQuantity() + newReservedQuantity;
            updatingExistingReservation(existingReservation,newTotalReservedQuantity,inventory);
            return ;
        }
        Reservation reservation = Reservation
                .builder()
                .inventory(inventory)
                .user(user)
                .reservedAt(LocalDateTime.now())
                .expiresAt(LocalDateTime.now().plusWeeks(1))
                .reservedQuantity(newReservedQuantity)
                .status(ReservationStatus.ACTIVE)
                .build();

        user.addReservation(reservation);
        inventory.addReservation(reservation);
        this.reservationRepository.save(reservation);
    }

    @Override
    @Transactional
    public Reservation updateReservation(Integer userId,Integer productId,Integer reservedQuantity) {
        validateUser(userId);
        Inventory inventory =  getInventory(productId);
        Reservation reservation = this.reservationRepository.findActiveReservationByUserAndProduct(
                userId, productId, LocalDateTime.now());

        int totalReservation = getTotalReservationByInventoryId(inventory.getId());
        if (reservation == null) {
            throw new ResourceNotFoundException("Reservation not found");
        }

        int quantity = reservedQuantity - reservation.getReservedQuantity();
        if (quantity > 0){
            validateStockAvailability(quantity,totalReservation,inventory);
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
        if(reservation == null){
            throw new ResourceNotFoundException(
                    String.format("Reservation not found or  of product: %s  for userId:%d",
                            inventory.getProduct().getProductName(),
                            userId
                    )
            );

        }
        this.reservationRepository.delete(reservation);
    }

    @Override
    public int getTotalReservationByInventoryId(int inventoryId) {
        return this.reservationRepository.getReservedQuantityByInventoryId(inventoryId,LocalDateTime.now());
    }

    @Override
    public int getTotalReservationByProductId(int productId) {
        return this.reservationRepository.getReservedQuantityByProductId(productId,LocalDateTime.now());
    }


    //helper method
    private Reservation updatingExistingReservation(Reservation reservation,int newQuantity,Inventory inventory){
        reservation.setReservedQuantity(newQuantity);
        reservation.setReservedAt(LocalDateTime.now());
        reservation.setExpiresAt(LocalDateTime.now().plusWeeks(1));
        return reservationRepository.save(reservation);
    }

    private Inventory getInventory(int productId){
        try {
            Inventory inventory = this.inventoryService.fetchInventoryWithLock(productId);
            if(inventory != null){
                return inventory;
            }
            throw new ResourceNotFoundException("Inventory not found");
        }catch (LockTimeoutException | PessimisticLockException e){
            throw new ServiceUnavailableException("System is busy with this product. Please try again in a few seconds.",e);
        }
    }
//    private User getUser(int userId){
//        return  this.userService.fetchUserEntityById(userId);
//    }
    private User validateUser(int userId){
        User loggedInUser = authUtils.getLoggedInUser();
        if(!loggedInUser.getUserId().equals(userId)){
            throw new AccessDeniedException("You are not allowed to access reservation service.");
        }
        return loggedInUser;
    }
    private void validateStockAvailability(int reservedQuantity,int totalReservedQuantity,Inventory inventory){
        if(inventory.getAvailableQuantity(totalReservedQuantity) < reservedQuantity){
            throw new InsufficientStockException(inventory.getProduct().getProductName() + " is not in stock.");
        }
    }
}
