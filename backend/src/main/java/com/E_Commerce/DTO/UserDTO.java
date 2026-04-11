package com.E_Commerce.DTO;

import com.E_Commerce.Entity.Role;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.List;
import java.util.Set;


public record UserDTO(

    Integer userId,

    @NotNull(message = "username is required")
    @NotBlank(message = "username is required.")
    String username,
    @Email
    @NotNull(message = "email is required.")
    @NotBlank(message = "email is required")
    String email,
    @NotNull(message = "password is required.")
    @NotBlank(message = "password is required")
    String password,
    String fullName,
    String phoneNumber,
    Set<Role> roles,
    String profileImageUrl,
    List<Integer> addressIds,
    Integer cartId,
    boolean hasCustomImage
)  {

}
