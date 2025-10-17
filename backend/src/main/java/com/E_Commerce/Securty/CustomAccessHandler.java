package com.E_Commerce.Securty;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Component
public class CustomAccessHandler implements AccessDeniedHandler {
    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException accessDeniedException) throws IOException, ServletException {
        response.setStatus(HttpStatus.FORBIDDEN.value());
        response.setContentType("application/json");

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String role = determineRole(authentication);
        Map<String, Object> body = new HashMap<>();
        body.put("error","forbidden");
        body.put("message","You don't have permission to access this resource.");
        body.put("role",role);
        body.put("redirectUrl", getRedirectUrl(role));

        new ObjectMapper().writeValue(response.getOutputStream(),body);
    }

    private String determineRole(Authentication authentication){
        return authentication.getAuthorities().stream()
                .map(grantedAuthority -> grantedAuthority.getAuthority())
                .filter(role-> role.startsWith("ROLE_"))
                .findFirst()
                .orElse("ROLE_CUSTOMER");
    }

    private String getRedirectUrl(String role){
        if(role.equals("ROLE_ADMIN")){
            return "http://localhost:3000/admin";
        } else if (role.equals("ROLE_CUSTOMER")) {
            return "http://localhost:3000/";
        }
        return null;
    }
}
