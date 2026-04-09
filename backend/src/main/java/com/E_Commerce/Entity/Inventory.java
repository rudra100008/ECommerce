package com.E_Commerce.Entity;

import com.E_Commerce.Enum.ReservationStatus;
import com.E_Commerce.Exception.InsufficientStockException;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "inventory")
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString(exclude = {
        "reservations",
        "product"
})
public class Inventory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
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
    public Integer getAvailableQuantity(int reservedQuantity){
        return this.stockQuantity - reservedQuantity;
    }

    public Boolean isInStock(int reservedQuantity){
        return getAvailableQuantity(reservedQuantity) > 0;
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
