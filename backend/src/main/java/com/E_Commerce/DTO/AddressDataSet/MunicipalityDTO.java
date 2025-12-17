package com.E_Commerce.DTO.AddressDataSet;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonIgnoreProperties(ignoreUnknown = true)
public class MunicipalityDTO {
    private Integer id;
    private String name;
    private int wards;
    private Integer district_id;
}
