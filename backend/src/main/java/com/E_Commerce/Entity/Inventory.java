package com.E_Commerce.Entity;

import com.E_Commerce.Enum.ReservationStatus;
import com.E_Commerce.Exception.InsufficientStockException;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "inventory")
public class Inventory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer stockQuantity; // number of products in stock
    @OneToMany(mappedBy = "inventory", fetch = FetchType.LAZY)
    @Builder.Default
    private List<Reservation> reservations = new ArrayList<>();

    @OneToOne
    @JoinColumn(name = "product_id",nullable = false)
    private Product product;

    //helper  method

    public Integer getReservedQuantity() {
        return reservations.stream()
                .filter(Reservation::isActive)
                .mapToInt(Reservation::getReservedQuantity)
                .sum();
    }
    public Integer getAvailableQuantity(){
        return this.stockQuantity - getReservedQuantity();
    }

    public Boolean isInStock(){
        return getAvailableQuantity() > 0;
    }

    public void addReservation(Reservation reservation){
        if(this.reservations ==  null){
            this.reservations = new ArrayList<>();
        }
        this.reservations.add(reservation);
        reservation.setInventory(this);
    }
    public void removeReservation(Reservation reservation){
        if(this.reservations == null){
            this.reservations = new ArrayList<>();
        }
        this.reservations.remove(reservation);
        reservation.setInventory(null);
    }



}
