package com.E_Commerce.DTO;


import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AddressDTO {
    private Integer addressId;
    @NotBlank(message = "District is required")
    private String district;
    @NotBlank(message = "Province is required")
    private String province;
    @NotBlank(message = "Municipality is required.")
    private String  municipality;
    @NotNull(message = "Ward number is required.")
    @Min(value = 1,message = "Ward number must be at least 1")
    @Max(value = 35,message = "Ward number should not exceed 35")
    private Integer wardNumber;
    @NotBlank(message = "Landmark is required.")
    private String landmark;// famous place eg "Near BhatBhateni Supermarket", "Opposite of Everest Bank", "Behind Boudha Stupa"
    private Integer userId;
}
