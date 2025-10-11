package com.E_Commerce.DTO;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class AuthResponse {
    @NotNull(message = "username is required.")
    @NotBlank(message = "username is required")
    private  String username;
    @NotNull(message = "email is required.")
    @NotBlank(message = "email is required")
    @Email(message = "Invalid email format")
    private String email;
    @NotNull(message = "password is required")
    @NotBlank(message = "password is required")
    private String password;
}
