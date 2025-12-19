package com.E_Commerce.DTO.AddressDataSet;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class DistrictResponse {
    private Integer districtId;
    private Integer provinceId;
    private String englishName;
    private String nepaliName;
}
