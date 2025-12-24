package com.E_Commerce.DTO;

import com.E_Commerce.Enum.AddressType;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.mapstruct.MapperConfig;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ShippingAddressDTO {
    private Integer orderId;
    @NotBlank(message = "Shipping district must be selected.")
    private String shippingDistrict;

    @NotBlank(message = "Shipping province must be selected.")
    private String shippingProvince;
    @NotBlank(message = "Shipping municipality must be selected.")
    private String shippingMunicipality;
    @NotNull(message = "Ward number is required.")
    @Min(value = 1,message = "Ward number must be at least 1")
    @Max(value = 32, message = "Ward number must be at most 32")
    private Integer shippingWardNumber;
    private String shippingLandmark;
    @Size(max = 150, message = "Area cannot exceed 150 characters")
    private String shippingArea;
//    @Pattern(regexp = "^[A-Za-z0-9\\s\\-/\\.#,]+$",
//            message = "House number can contain letters, numbers, spaces, hyphens, slashes, dots, commas, and hash")
    private String houseNumber;
    @NotNull(message = "Address type is required")
    private AddressType addressType;

}
