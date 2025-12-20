package com.E_Commerce.Entity;

import com.E_Commerce.Enum.ReservationStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "reservations")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer reservationId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "inventory_id", nullable = false)
    private Inventory inventory;

    @Column(nullable = false)
    private Integer reservedQuantity;

    @Column(nullable = false)
    private LocalDateTime reservedAt;

    @Column(nullable = false)
    private LocalDateTime expiresAt;

    @Enumerated(EnumType.STRING)
    private ReservationStatus status;



    // Helper method to check if reservation is active
    public boolean isActive() {
        return status == ReservationStatus.ACTIVE &&
                LocalDateTime.now().isBefore(expiresAt);
    }
    public void releaseReservedQuantity(Integer quantity){
        this.reservedQuantity -= quantity;
        if(reservedQuantity < 0){
            reservedQuantity = 0;
        }
    }

    // Helper method to check if expired
    public boolean isExpired() {
        return LocalDateTime.now().isAfter(expiresAt);
    }
}