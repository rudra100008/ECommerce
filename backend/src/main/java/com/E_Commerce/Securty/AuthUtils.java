package com.E_Commerce.Securty;

import com.E_Commerce.Entity.User;
import com.E_Commerce.Exception.ResourceNotFoundException;
import com.E_Commerce.Repository.UserRepository;
import com.E_Commerce.Services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class AuthUtils {
    private final UserRepository userRepository;

    public User getLoggedInUser(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if(!authentication.isAuthenticated()){
            throw new IllegalArgumentException("No authenticated user found");
        }
        return userRepository.findByEmail(authentication.getName()).orElseThrow(()->
                new ResourceNotFoundException(authentication.getName() +"user not found"));
    }
}
