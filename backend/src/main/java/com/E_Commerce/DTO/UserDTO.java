package com.E_Commerce.DTO;

import com.E_Commerce.Entity.Role;
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

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDTO {
    private Integer userId;
    @NotNull(message = "username is required")
    @NotBlank(message = "username is required.")
    private String username;
    @Email
    @NotNull(message = "email is required.")
    @NotBlank(message = "email is required")
    private String email;
    @NotNull(message = "password is required.")
    @NotBlank(message = "password is required")
    private String password;
    private String fullName;
    private String phoneNumber;
    private Set<Role> roles = new HashSet<>();
    private String profileImageUrl;
    private List<AddressDTO> addresses;
}
