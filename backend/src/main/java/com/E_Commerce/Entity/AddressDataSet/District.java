package com.E_Commerce.Entity.AddressDataSet;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity(name = "districts")
public class District {
    @Id
    @Column(name = "id")
    private Integer id;

    private String englishName;
    private String nepaliName;

    @ManyToOne
    @JoinColumn(name = "province_id")
    @ToString.Exclude
    private Province province;

    @OneToMany(mappedBy = "district",cascade = CascadeType.ALL,orphanRemoval = true)
    @Builder.Default
    @ToString.Exclude
    private List<Municipality> municipalities = new ArrayList<>();

}
