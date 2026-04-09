package com.E_Commerce.Entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "addresses")
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString(exclude = {
        "user"
})
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
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
