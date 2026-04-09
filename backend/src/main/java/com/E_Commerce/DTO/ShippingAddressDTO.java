package com.E_Commerce.DTO;

import com.E_Commerce.Enum.AddressType;
import jakarta.validation.constraints.*;


public record ShippingAddressDTO(
        @NotNull
        @NotBlank(message = "Shipping district must be selected.")
        String shippingDistrict,
        @NotNull
        @NotBlank(message = "Shipping province must be selected.")
        String shippingProvince,
        @NotNull
        @NotBlank(message = "Shipping municipality must be selected.")
        String shippingMunicipality,
        @NotNull(message = "Ward number is required.")
        @Min(value = 1,message = "Ward number must be at least 1")
        @Max(value = 32, message = "Ward number must be at most 32")
        Integer shippingWardNumber,
        String shippingLandmark,
        @Size(max = 150, message = "Area cannot exceed 150 characters")
        String shippingArea,
        String houseNumber,
        @NotNull(message = "Address type is required")
        AddressType addressType

) {


}
