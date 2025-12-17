package com.E_Commerce.Entity.AddressDataSet;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity(name = "provinces")
public class Province {
    @Id
    @Column(name = "id")
    private Integer id;

    private String englishName;
    private String nepaliName;

    @OneToMany(mappedBy = "province",cascade = CascadeType.ALL,orphanRemoval = true)
    @Builder.Default
    @ToString.Exclude
    private List<District> districts = new ArrayList<>();


}
