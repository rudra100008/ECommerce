package com.E_Commerce.Mapper;

import com.E_Commerce.DTO.AddressDTO;
import com.E_Commerce.DTO.UserDTO;
import com.E_Commerce.Entity.Address;
import com.E_Commerce.Entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {
    @Mapping(target = "password", ignore = true)
    UserDTO toUserDTO(User user);

    User toUser(UserDTO userDTO);

    @Mapping(source = "user.userId",target = "userId")
    AddressDTO toAddressDTO(Address address);

    @Mapping(target = "user", ignore = true)
    Address toAddress(AddressDTO addressDTO);

    List<AddressDTO> toAddressDTOList(List<Address> addresses);
    List<Address> toAddressList(List<AddressDTO> addressDTOS);

    default User createUserWithAddress(UserDTO userDTO){
        if(userDTO == null){
            return null;
        }
        User user = new User();
        user.setUserId(userDTO.getUserId());
        user.setUsername(userDTO.getUsername());
        user.setEmail(userDTO.getEmail());
        user.setPassword(userDTO.getPassword());
        user.setFullName(userDTO.getFullName());
        user.setPhoneNumber(userDTO.getPhoneNumber());
        user.setRoles(userDTO.getRoles());
        user.setProfileImageUrl(userDTO.getProfileImageUrl());


        if(userDTO.getAddresses() != null){
            List<Address> addresses = toAddressList(userDTO.getAddresses());
            for(Address address : addresses){
                address.setUser(user);
            }
            user.setAddresses(addresses);
        }
        return user;
    }
}
