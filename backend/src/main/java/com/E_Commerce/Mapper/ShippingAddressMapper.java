package com.E_Commerce.Mapper;

import com.E_Commerce.DTO.ShippingAddressDTO;
import com.E_Commerce.Entity.ShippingAddress;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ShippingAddressMapper {

    ShippingAddress toShippingAddress(ShippingAddressDTO shippingAddressDTO);
    ShippingAddressDTO toShippingAddressDTO(ShippingAddress shippingAddress);
}
