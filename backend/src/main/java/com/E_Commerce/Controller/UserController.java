package com.E_Commerce.Controller;

import com.E_Commerce.DTO.UserDTO;
import com.E_Commerce.Services.UserService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    Logger logger = LoggerFactory.getLogger(UserController.class);

    @PreAuthorize("hasRole('CUSTOMER')")
    @GetMapping("/me")
    public ResponseEntity<?> getCurrentUser(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if(authentication == null || !authentication.isAuthenticated() || authentication instanceof AnonymousAuthenticationToken){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        Object principal = authentication.getPrincipal();
        if(principal instanceof UserDetails ){
            UserDetails userDetails = (UserDetails) principal;
            UserDTO user = this.userService.findByEmail(userDetails.getUsername());
            Map<String, Object> responseBody = new HashMap<>();
            responseBody.put("userId", user.getUserId());
            responseBody.put("email", user.getEmail());
            responseBody.put("username", user.getUsername());
            responseBody.put("profileImageUrl",user.getProfileImageUrl());
            responseBody.put("roles",user.getRoles());
            return  ResponseEntity.ok(responseBody);
        } else if (principal instanceof DefaultOAuth2User) {
            DefaultOAuth2User oAuth2User = (DefaultOAuth2User) principal;
            UserDTO user = this.userService.findByEmail(oAuth2User.getAttribute("email"));
            Map<String, Object> responseBody = new HashMap<>();
            responseBody.put("userId", user.getUserId());
            responseBody.put("email", user.getEmail());
            responseBody.put("username", user.getUsername());
            responseBody.put("profileImageUrl",user.getProfileImageUrl());
            responseBody.put("roles",user.getRoles());
            return  ResponseEntity.ok(responseBody);
        }
        return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/fetchUser/{userId}")
    public ResponseEntity<?> fetchUser(
            @PathVariable("userId")Integer userId
    ){
        UserDTO  userDTO = this.userService.fetchUser(userId);

        return ResponseEntity.ok(userDTO);
    }
}
