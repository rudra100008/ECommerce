package com.E_Commerce.Entity;

import com.E_Commerce.Enum.OrderStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "failedReleases")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FailedRelease {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer failedReleaseId;

    @OneToOne
    @JoinColumn(name = "user_id",nullable = false)
    private User user;

    @OneToOne
    @JoinColumn(name = "product_id",nullable = false)
    private Product product;

    @OneToOne
    @JoinColumn(name = "cartItem_id",nullable = false)
    private CartItem cartItem;


    private int retryCount;

    private OrderStatus orderStatus;
}
