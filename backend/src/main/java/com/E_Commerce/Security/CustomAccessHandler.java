package com.E_Commerce.Security;

import com.E_Commerce.Utils.RoleUtils;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

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
@RequiredArgsConstructor
public class CustomAccessHandler implements AccessDeniedHandler {
    private final RoleUtils roleUtils;

    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException accessDeniedException) throws IOException, ServletException {
        response.setStatus(HttpStatus.FORBIDDEN.value());
        response.setContentType("application/json");

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String role = this.roleUtils.determineRole(authentication);
        Map<String, Object> body = new HashMap<>();
        body.put("error","forbidden");
        body.put("message","You don't have permission to access this resource.");
        body.put("role",role);
        body.put("redirectUrl", roleUtils.getRedirectUrl(role));

        new ObjectMapper().writeValue(response.getOutputStream(),body);
    }


}
