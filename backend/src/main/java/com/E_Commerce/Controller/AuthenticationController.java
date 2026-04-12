package com.E_Commerce.Controller;

import com.E_Commerce.DTO.AuthRequest;
import com.E_Commerce.DTO.AuthResponse;
import com.E_Commerce.DTO.UserDTO.UserRequestDTO;
import com.E_Commerce.DTO.UserDTO.UserResponseDTO;
import com.E_Commerce.Entity.Role;
import com.E_Commerce.Exception.ResourceNotFoundException;
import com.E_Commerce.Repository.RoleRepository;
import com.E_Commerce.Repository.UserRepository;
import com.E_Commerce.Securty.CustomUserDetailsService;
import com.E_Commerce.Securty.JwtAuthenticationHandler;
import com.E_Commerce.Securty.JwtUtil;
import com.E_Commerce.Services.CartService;
import com.E_Commerce.Services.UserService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class AuthenticationController {
    private final AuthenticationManager authenticationManager;
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;
    private final RoleRepository roleRepository;
    private final JwtAuthenticationHandler authenticationHandler;

    @PostMapping("/login")
    public ResponseEntity<?> login(
            @Valid @RequestBody AuthRequest authRequest,
            BindingResult result,
            HttpServletResponse servletResponse,
            HttpServletRequest servletRequest) {
        if (result.hasErrors()) {
            Map<String, Object> errorResponse = new HashMap<>();
            result.getFieldErrors().forEach(f -> errorResponse.put(f.getField(), f.getDefaultMessage()));
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            authRequest.email(),
                            authRequest.password()));
            authenticationHandler.onAuthenticationSuccess(servletRequest, servletResponse, authentication);
            Object attribute = servletRequest.getAttribute("AUTH_RESPONSE_DATA");
            Map<String, Object> responseData;
            if (attribute instanceof Map<?, ?>) {
                responseData = (Map<String, Object>) attribute;
            } else {
                responseData = new HashMap<>();
            }
            return ResponseEntity.ok(responseData);
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("message", "Invalid email or password.");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorResponse);
        }
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(
            @Valid @RequestBody AuthResponse authResponse,
            BindingResult result) {
        if (result.hasErrors()) {
            Map<String, Object> errorResponse = new HashMap<>();
            result.getFieldErrors().forEach(f -> errorResponse.put(f.getField(), f.getDefaultMessage()));
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }
        if (Boolean.TRUE.equals(userService.existsByEmail(authResponse.email()))) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("message", "Email already exits");
            return ResponseEntity.badRequest().body(errorResponse);
        }
        Role CUSTOMER_ROLE = roleRepository.findByRoleName(Role.RoleName.ROLE_CUSTOMER)
                .orElseThrow(() -> new ResourceNotFoundException(Role.RoleName.ROLE_CUSTOMER + " not found."));

        UserRequestDTO requestDTO= new UserRequestDTO(
                authResponse.username(),
                authResponse.email(),
                passwordEncoder.encode(authResponse.password()),
                null,
                null
                );

        UserResponseDTO userResponseDTO =  userService.saveUser(requestDTO,Set.of(CUSTOMER_ROLE));
        return ResponseEntity.ok(userResponseDTO);
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletResponse response) {
        Cookie cookie = new Cookie("token", null);
        cookie.setHttpOnly(true);
        cookie.setSecure(true);
        cookie.setPath("/");
        cookie.setMaxAge(0); // Immediately expire
        response.addCookie(cookie);
        return ResponseEntity.ok().body(Map.of("message", "Logged out successfully"));
    }

}
