package com.E_Commerce.Securty;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.InsufficientAuthenticationException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import java.io.IOException;
@Component
public class CustomAuthenticationEntryPoint implements AuthenticationEntryPoint {
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
        if(request.getRequestURI().startsWith("/api/")){
            response.setStatus(HttpStatus.UNAUTHORIZED.value());
            response.setContentType("application/json");
            String errorMessage = "Authentication required.";
            if(authException instanceof InsufficientAuthenticationException){
                errorMessage = "Token expired.Please re-login again";
                response.getWriter().write(
                        String.format("{\"error\" : \"token_expired\", \"message\" : \" %s\" }",errorMessage)
                );
                return;
            }

            response.getWriter().write(
                    String.format("{\"error\": \"authentication_required\",\"message\":\"%s\"}",errorMessage)
            );

        }else{
            response.sendRedirect("/oauth2/authorization/google");
        }
    }
}
