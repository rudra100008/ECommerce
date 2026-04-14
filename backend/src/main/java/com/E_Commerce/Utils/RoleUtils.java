package com.E_Commerce.Utils;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Component;


@Component
public class RoleUtils {
     public String determineRole(Authentication authentication) {
        return authentication.getAuthorities().stream()
            .map(GrantedAuthority::getAuthority)
            .filter(role -> role.startsWith("ROLE_"))
            .findFirst()
            .orElse("ROLE_CUSTOMER");
    }

    public String getRedirectUrl(String role) {
        return switch (role) {
            case "ROLE_ADMIN" -> "http://localhost:3000/admin";
            default -> "http://localhost:3000";
        };
    }
}
