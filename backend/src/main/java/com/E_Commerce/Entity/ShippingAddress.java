package com.E_Commerce.Entity;

import com.E_Commerce.Enum.AddressType;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Embeddable
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ShippingAddress {
    private String shippingDistrict;
    private String shippingProvince;
    private String shippingMunicipality;
    private Integer shippingWardNumber;
    private String shippingLandmark;
    private String shippingArea;
    private String houseNumber;
    private AddressType addressType;
}

