package com.E_Commerce.Mapper;

import com.E_Commerce.DTO.AddressDTO;
import com.E_Commerce.Entity.Address;
import com.E_Commerce.Entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

@Mapper(componentModel = "spring")
public interface AddressMapper {
    @Mapping(source = "user.userId",target = "userId")
    AddressDTO toAddressDTO(Address address);
    @Mapping(target = "user",ignore = true)
    Address toAddress(AddressDTO addressDTO);

}
