package com.E_Commerce.DTO;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


public record AuthRequest(
        @Email(message = "email is in wrong format")
        @NotNull(message = "email is required.")
        @NotBlank(message = "email is required")
        String email,
        @NotNull(message = "password is required")
        @NotBlank(message = "password is required")
        String password
) {

}
