package com.E_Commerce.Mapper;

import com.E_Commerce.DTO.AddressDTO;
import com.E_Commerce.DTO.UserDTO;
import com.E_Commerce.Entity.Address;
import com.E_Commerce.Entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.Named;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


@Mapper(componentModel = "spring")
public interface UserMapper {

    @Mapping(target = "password", ignore = true) // Security
    @Mapping(target = "addressIds", source = "addresses",qualifiedByName = "mapAddressesToIds") // Handle in service
    @Mapping(source = "cart.id", target = "cartId")
    UserDTO toUserDTO(User user);

    @Mapping(target = "addresses", ignore = true)
    @Mapping(target = "cart", ignore = true)
    @Mapping(target = "payments", ignore = true)
    @Mapping(target = "roles", ignore = true) // Handle separately for security
    User toUser(UserDTO userDTO);


    @Mapping(target = "userId", ignore = true)
    @Mapping(target = "addresses", ignore = true)
    @Mapping(target = "cart", ignore = true)
    @Mapping(target = "payments", ignore = true)
    @Mapping(target = "roles", ignore = true)
    void updateUserFromDTO(UserDTO userDTO, @MappingTarget User user);

    @Named("mapAddressesToIds")
    default List<Integer> mapAddressesToIds(List<Address> addresses){
        if(addresses == null){
            return null;
        }
        return addresses.stream()
                .map(Address::getAddressId)
                .collect(Collectors.toList());
    }
}

