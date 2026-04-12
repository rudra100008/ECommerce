package com.E_Commerce.Mapper;

import com.E_Commerce.DTO.UserDTO.UserInternalDTO;
import com.E_Commerce.DTO.UserDTO.UserResponseDTO;
import com.E_Commerce.DTO.UserDTO.UserRequestDTO;
import com.E_Commerce.Entity.Address;
import com.E_Commerce.Entity.Role;
import com.E_Commerce.Entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.Named;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface UserMapper {

    // @Mapping(target = "password", ignore = true)
    // @Mapping(target = "addressIds", source = "addresses", qualifiedByName =
    // "mapAddressesToIds")
    // @Mapping(source = "cart.id", target = "cartId")
    // @Mapping(target = "profileImageUrl", ignore = true)
    // @Mapping(target = "hasCustomImage", source = "hasCustomImage",
    // qualifiedByName = "mapHasCustomImage")
    // UserDTO toUserDTO(User user);

    // @Mapping(target = "addresses", ignore = true)
    // @Mapping(target = "cart", ignore = true)
    // @Mapping(target = "payments", ignore = true)
    // @Mapping(target = "roles", ignore = true)
    // User toUser(UserDTO userDTO);

    @Mapping(target = "userId", ignore = true)
    @Mapping(target = "addresses", ignore = true)
    @Mapping(target = "cart", ignore = true)
    @Mapping(target = "payments", ignore = true)
    @Mapping(target = "roles", ignore = true)
    void updateUserFromDTO(UserRequestDTO dto, @MappingTarget User user);

    @Mapping(target = "userId", ignore = true)
    @Mapping(target = "addresses", ignore = true)
    @Mapping(target = "cart", ignore = true)
    @Mapping(target = "payments", ignore = true)
    @Mapping(target = "roles", ignore = true) // ← keep this
    @Mapping(target = "reservations", ignore = true)
    @Mapping(target = "hasCustomImage", ignore = true)
    @Mapping(target = "provider", ignore = true)
    @Mapping(target = "providerId", ignore = true)
    @Mapping(target = "profileImageUrl", ignore = true)
    @Mapping(target = "googleProfileImageUrl", ignore = true)
    User toUser(UserRequestDTO dto);

    @Mapping(target = "addressIds", source = "addresses", qualifiedByName = "mapAddressesToIds")
    @Mapping(target = "cartId", source = "cart.id")
    @Mapping(target = "roles", source = "roles", qualifiedByName = "mapRolesToNames")
    @Mapping(target = "profileImageUrl", source = ".", qualifiedByName = "resolveProfileImage")
    UserResponseDTO toUserResponseDTO(User user);

    @Mapping(target = "roles", ignore = true)
    UserInternalDTO toUserInternalDTO(User user);

    @Named("mapAddressesToIds")
    default List<Integer> mapAddressesToIds(List<Address> addresses) {
        if (addresses == null)
            return null;
        return addresses.stream()
                .map(Address::getAddressId)
                .collect(Collectors.toList());
    }

    @Named("mapHasCustomImage")
    default boolean mapHasCustomImage(Boolean hasCustomImage) {
        return Boolean.TRUE.equals(hasCustomImage);
    }

    @Named("mapRolesToNames")
    default Set<Role.RoleName> mapRolesToNames(Set<Role> roles) {
        if (roles == null)
            return Set.of();
        return roles.stream().map(Role::getRoleName).collect(Collectors.toSet());
    }

    @Named("resolveProfileImage")
    default String resolveProfileImage(User user) {
        if (Boolean.TRUE.equals(user.getHasCustomImage())) {
            return "/api/user/" + user.getUserId() + "/fetchUserImage";
        }
        return user.getProfileImageUrl(); // Google URL or null
    }
}