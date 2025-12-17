package com.E_Commerce.Entity.AddressDataSet;

import jakarta.persistence.*;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity(name = "municipalities")
public class Municipality {
    @Id
    @Column(name = "id")
    private Integer id;
    private String englishName;
    private String nepaliName;
    private int wards;
    @ManyToOne
    @JoinColumn(name = "district_id",nullable = false)
    @ToString.Exclude
    private District district;
}
