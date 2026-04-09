package com.E_Commerce.Entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
    private Integer id;
    @Enumerated(EnumType.STRING)
    @Column(unique = true,nullable = false)
    private RoleName roleName; //ROLE_ADMIN,ROLE_CUSTOMER

    public enum RoleName{
        ROLE_ADMIN,
        ROLE_CUSTOMER
    }
}