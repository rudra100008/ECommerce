package com.E_Commerce.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "addresses")
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer addressId;
    private String district;
    private String province;
    private String municipality;
    private Integer wardNumber;
    private String landmark;// famous place eg "Near Bhat Bhateni Supermarket", "Opposite of Everest Bank", "Behind Boudha Stupa"
    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;
}
