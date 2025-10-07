package com.E_Commerce.Controller;

import com.E_Commerce.DTO.UserDTO;
import com.E_Commerce.Entity.AuthRequest;
import com.E_Commerce.Entity.AuthResponse;
import com.E_Commerce.Entity.Role;
import com.E_Commerce.Entity.RoleRequest;
import com.E_Commerce.Exception.ResourceNotFoundException;
import com.E_Commerce.Repository.RoleRepository;
import com.E_Commerce.Repository.UserRepository;
import com.E_Commerce.Securty.CustomUserDetailsService;
import com.E_Commerce.Securty.JwtUtil;
import com.E_Commerce.Services.UserService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
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
    private final JwtUtil jwtUtil;
    private final CustomUserDetailsService userDetailsService;
    private final UserService userService;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final RoleRepository roleRepository;


    @PostMapping("/login")
    public ResponseEntity<?> login(
            @Valid @RequestBody AuthRequest authRequest,
            BindingResult result,
            HttpServletResponse servletResponse
            )
    {
        if(result.hasErrors()){
            Map<String,Object> errorResponse = new HashMap<>();
            result.getFieldErrors().forEach(f-> errorResponse.put(f.getField(),f.getDefaultMessage()));
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            authRequest.getEmail(),
                            authRequest.getPassword()
                    )
            );
        }catch (Exception e){
            Map<String,String> errorResponse =  new HashMap<>();
            errorResponse.put("message","Invalid email or password.");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorResponse);
        }
        final UserDetails userDetails = userDetailsService.loadUserByUsername(authRequest.getEmail());
        final String token = jwtUtil.generateToken(userDetails);

        Cookie cookie = new Cookie("token",token);
        cookie.setHttpOnly(true);
        cookie.setSecure(false);
        cookie.setPath("/");
        cookie.setMaxAge(24*60*60);//1 day
        servletResponse.addCookie(cookie);
        Map<String,String> response = new HashMap<>();
        response.put("email", authRequest.getEmail());
        response.put("message","Login Successful");
        return ResponseEntity.ok(response);
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
}
