package com.E_Commerce.Utils;

import com.E_Commerce.Config.RequestUserContext;
import com.E_Commerce.DTO.UserDTO.UserResponseDTO;
import com.E_Commerce.Entity.User;
import com.E_Commerce.Exception.ResourceNotFoundException;
import com.E_Commerce.Repository.UserRepository;
import com.E_Commerce.Services.UserService;

import jakarta.annotation.Resource;
import lombok.RequiredArgsConstructor;

import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class AuthUtils {
    private final RequestUserContext requestUserContext;
    private final UserRepository userRepository;

    public User getLoggedInUser() {
        return requestUserContext.getCurrentUser();
    }

    public User resolveCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication == null && !authentication.isAuthenticated()
                && authentication instanceof AnonymousAuthenticationToken) {
            throw new AccessDeniedException("Not authenticated");
        }

        Object principal = authentication.getPrincipal();

        return switch (principal) {
            case UserDetails userDetails -> this.userRepository.findByEmail(userDetails.getUsername())
                    .orElseThrow(() -> new ResourceNotFoundException("User not found."));

            case DefaultOAuth2User auth2User -> this.userRepository.findByEmail(auth2User.getAttribute("email"))
                    .orElseThrow(() -> new ResourceNotFoundException("User not found."));
            default ->
                throw new AccessDeniedException("Unknown principal type");
        };
    }

}
