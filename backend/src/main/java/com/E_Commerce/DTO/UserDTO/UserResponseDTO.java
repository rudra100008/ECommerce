package com.E_Commerce.DTO.UserDTO;

import java.util.List;
import java.util.Set;

import com.E_Commerce.Entity.Role;

public record UserResponseDTO(
                Integer userId, String username, String email,
                String fullName, String phoneNumber,
                List<Integer> addressIds, Integer cartId, Set<Role.RoleName> roles, String profileImageUrl) {

}
