package com.E_Commerce.Controller;

import com.E_Commerce.DTO.UserDTO;
import com.E_Commerce.DTO.AuthRequest;
import com.E_Commerce.DTO.AuthResponse;
import com.E_Commerce.Entity.Cart;
import com.E_Commerce.Entity.Role;
import com.E_Commerce.Entity.User;
import com.E_Commerce.Exception.ResourceNotFoundException;
import com.E_Commerce.Repository.CartRepository;
import com.E_Commerce.Repository.RoleRepository;
import com.E_Commerce.Repository.UserRepository;
import com.E_Commerce.Securty.CustomUserDetailsService;
import com.E_Commerce.Securty.JwtAuthenticationHandler;
import com.E_Commerce.Securty.JwtUtil;
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
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class AuthenticationController {
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;
    private final CustomUserDetailsService userDetailsService;
    private final UserService userService;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final RoleRepository roleRepository;
    private final JwtAuthenticationHandler authenticationHandler;
    private final CartRepository cartRepository;


    @PostMapping("/login")
    public ResponseEntity<?> login(
            @Valid @RequestBody AuthRequest authRequest,
            BindingResult result,
            HttpServletResponse servletResponse,
            HttpServletRequest servletRequest
            )
    {
        if(result.hasErrors()){
            Map<String,Object> errorResponse = new HashMap<>();
            result.getFieldErrors().forEach(f-> errorResponse.put(f.getField(),f.getDefaultMessage()));
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            authRequest.getEmail(),
                            authRequest.getPassword()
                    )
            );
            authenticationHandler.onAuthenticationSuccess(servletRequest,servletResponse,authentication);
           Object attribute = servletRequest.getAttribute("AUTH_RESPONSE_DATA");
           Map<String,Object> responseData = null;
           if(attribute instanceof Map<?,?>){
               responseData =(Map<String, Object>) attribute;
           }else{
               responseData = new HashMap<>();
           }
            return ResponseEntity.ok(responseData);
        }catch (Exception e){
            Map<String,String> errorResponse =  new HashMap<>();
            errorResponse.put("message","Invalid email or password.");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorResponse);
        }
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(
           @Valid @RequestBody AuthResponse authResponse,
           BindingResult result
    )
    {
        if(result.hasErrors()){
            Map<String,Object> errorResponse = new HashMap<>();
            result.getFieldErrors().forEach(f-> errorResponse.put(f.getField(),f.getDefaultMessage()));
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }
        if(userService.existsByEmail(authResponse.getEmail())) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("message", "Email already exits");
            return ResponseEntity.badRequest().body(errorResponse);
        }
        Role role = roleRepository.findByRoleName(Role.RoleName.ROLE_CUSTOMER)
                .orElseThrow(()-> new ResourceNotFoundException(Role.RoleName.ROLE_CUSTOMER +" not found."));
        UserDTO userDTO = UserDTO.builder()
                .username(authResponse.getUsername())
                .email(authResponse.getEmail())
                .password(passwordEncoder.encode(authResponse.getPassword()))
                .profileImageUrl("default.jpg")
                .roles(Set.of(role))
                .build();

        userService.saveUser(userDTO);
        Map<String, String> successResponse = new HashMap<>();
        successResponse.put("message", "User registered successfully");
        successResponse.put("email", userDTO.getEmail());
        successResponse.put("username", userDTO.getUsername());
        return ResponseEntity.ok(successResponse);
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


    private void createCartForUser(User user){
        Cart cart = Cart.builder()
                .user(user)
                .cartItem(new ArrayList<>())
                .build();
        this.cartRepository.save(cart);
    }
}
