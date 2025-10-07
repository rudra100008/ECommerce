package com.E_Commerce.DTO;


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
    private String district;
    private String province;
    private String city;
    private Integer wardNumber;
    private String landmark;// famous place eg "Near BhatBhateni Supermarket", "Opposite of Everest Bank", "Behind Boudha Stupa"
    private Integer userId;
}
