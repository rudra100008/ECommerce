package com.E_Commerce.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Enumerated(EnumType.STRING)
    @Column(unique = true,nullable = false)
    private RoleName roleName; //ROLE_ADMIN,ROLE_CUSTOMER

    public enum RoleName{
        ROLE_ADMIN,
        ROLE_CUSTOMER
    }
}