package com.E_Commerce.Securty;

import com.E_Commerce.Entity.Cart;
import com.E_Commerce.Entity.Role;
import com.E_Commerce.Entity.User;
import com.E_Commerce.Exception.ResourceNotFoundException;
import com.E_Commerce.Repository.CartRepository;
import com.E_Commerce.Repository.RoleRepository;
import com.E_Commerce.Repository.UserRepository;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cache.CacheManager;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import java.io.IOException;
import java.util.*;

@Component
@RequiredArgsConstructor
public class OAuth2AuthenticationHandler implements AuthenticationSuccessHandler {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final CustomUserDetailsService userDetailsService;
    private final JwtUtil jwtUtil;
    private final CacheManager cacheManager;
    @Lazy
    private final PasswordEncoder passwordEncoder;
    private final CartRepository cartRepository;

    Logger logger = LoggerFactory.getLogger(OAuth2AuthenticationHandler.class);
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {

        DefaultOAuth2User oAuth2User = (DefaultOAuth2User) authentication.getPrincipal();
        logger.info(oAuth2User.getName());
        oAuth2User.getAttributes().forEach((key,value)->{
            logger.info("{}=>{}",key,value);
        });

        String email = oAuth2User.getAttribute("email");
        String name = oAuth2User.getAttribute("name");
        String googleImageUrl = oAuth2User.getAttribute("picture");
        String googleId = oAuth2User.getAttribute("sub");


        User user = saveUser(name,email,googleImageUrl,googleId);
        if(user.getCart() == null) {
            createCartForUser(user);
        }
        final UserDetails userDetails = this.userDetailsService.loadUserByUsername(user.getEmail());
        final String token = jwtUtil.generateToken(userDetails);

        setJwtCookies(response,token);
        response.sendRedirect("http://localhost:3000");

    }

//    private User saveUser(String name,String email,String picture){
//
//    }
    private User saveUser(String name,String email,String picture,String googleId){
        try{
           return this.userRepository.findByEmail(email).map(
                    existingUser-> updateExistingUser(existingUser,name,picture,googleId)
            ).orElseGet(()->createNewUser(name,email,picture,googleId));
        }catch (Exception e){
            throw new RuntimeException("Failed to process OAuth2 user",e);
        }
    }
    private void setJwtCookies(HttpServletResponse response,String token){
        Cookie cookie = new Cookie("token",token);
        cookie.setHttpOnly(true);
        cookie.setSecure(false);
        cookie.setMaxAge(24*60*60); //1 day
        cookie.setPath("/");
        response.addCookie(cookie);
    }

    private User updateExistingUser(User user, String name, String picture, String googleId) {
        boolean needsUpdate = false;

        // Update username if changed
        if (!Objects.equals(user.getUsername(), name)) {
            user.setUsername(name);
            needsUpdate = true;
        }

        // Update provider ID if not set
        if (user.getProviderId() == null && googleId != null) {
            user.setProviderId(googleId);
            needsUpdate = true;
        }

        // Update Google profile image URL (but keep custom image if exists)
        if (!Objects.equals(user.getGoogleProfileImageUrl(), picture)) {
            user.setGoogleProfileImageUrl(picture);
            needsUpdate = true;

            // Only update profileImageUrl if user hasn't uploaded a custom image
            if (!Boolean.TRUE.equals(user.getHasCustomImage())) {
                user.setProfileImageUrl(picture);
            }
        }

        return needsUpdate ? this.userRepository.save(user) : user;
    }

    private User createNewUser(String name,String email,String picture,String googleId){
        Role role = roleRepository.findByRoleName(Role.RoleName.ROLE_CUSTOMER)
                .orElseThrow(()-> new ResourceNotFoundException(Role.RoleName.ROLE_CUSTOMER +" not found."));
        User newUser = User.builder()
                .username(name)
                .email(email)
                .provider("GOOGLE")
                .providerId(googleId)
                .profileImageUrl(picture)
                .googleProfileImageUrl(picture)
                .hasCustomImage(false)
                .password(passwordEncoder.encode(generateRandomPassword()))
                .addresses(new ArrayList<>())
                .payments(new ArrayList<>())
                .roles(Set.of(role))
                .build();
        this.userRepository.save(newUser);
        return newUser;
    }
    private String generateRandomPassword(){
        return UUID.randomUUID().toString()+ "_"+System.currentTimeMillis();
    }
    private void createCartForUser(User user){
        Cart cart = Cart.builder()
                .user(user)
                .cartItem(new ArrayList<>())
                .build();
        this.cartRepository.save(cart);
    }
}
