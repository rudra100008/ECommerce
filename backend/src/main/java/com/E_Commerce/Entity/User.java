package com.E_Commerce.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userId;
    private String username;
    private String email;
    private String password;
    private String fullName;
    private String phoneNumber;
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private Set<Role> roles = new HashSet<>();

    private String provider;
    private String providerId;
    private String profileImageUrl;
    private String googleProfileImageUrl;

    @Column(name = "has_custom_image")
    private Boolean hasCustomImage = false;

    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Address> addresses = new ArrayList<>();
    @OneToOne(mappedBy = "user",cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.LAZY)
    private Cart cart;
    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Payment> payments = new ArrayList<>();

    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Reservation> reservations = new ArrayList<>();


    public void addReservation(Reservation reservation){
        if(this.reservations ==  null){
            this.reservations = new ArrayList<>();
        }
        this.reservations.add(reservation);
        reservation.setUser(this);
    }
    public void removeReservation(Reservation reservation){
        if(this.reservations == null){
            this.reservations = new ArrayList<>();
        }
         this.reservations.remove(reservation);
        reservation.setUser(null);
    }
}
