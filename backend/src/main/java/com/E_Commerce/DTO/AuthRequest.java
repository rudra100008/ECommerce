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
@NoArgsConstructor
@AllArgsConstructor
public class AuthRequest {
    @Email
    @NotNull(message = "email is required.")
    @NotBlank(message = "email is required")
    private String email;
    @NotNull(message = "password is required")
    @NotBlank(message = "password is required")
    private String password;

}
