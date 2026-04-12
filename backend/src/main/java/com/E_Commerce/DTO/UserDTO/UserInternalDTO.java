package com.E_Commerce.DTO.UserDTO;

import java.util.Set;

// Internal DTO (optional)
public record UserInternalDTO(
    Integer userId,
    String username,
    String email,
    String password,
    Set<String> roles
) {}
