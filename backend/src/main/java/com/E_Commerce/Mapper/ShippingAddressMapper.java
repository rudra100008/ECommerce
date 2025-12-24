package com.E_Commerce.Mapper;

import com.E_Commerce.DTO.ShippingAddressDTO;
import com.E_Commerce.Entity.ShippingAddress;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ShippingAddressMapper {

    ShippingAddress toShippingAddress(ShippingAddressDTO shippingAddressDTO);
    @Mapping(target = "orderId",ignore = true)
    ShippingAddressDTO toShippingAddressDTO(ShippingAddress shippingAddress);
}
