package com.E_Commerce.Securty;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;


@Component
@RequiredArgsConstructor
public class JwtAuthenticationHandler implements AuthenticationSuccessHandler {
    private final JwtUtil jwtUtil;
    private final CustomUserDetailsService userDetailsService;
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        final UserDetails userDetails = userDetailsService.loadUserByUsername(authentication.getName());
        final String token  = jwtUtil.generateToken(userDetails);
        Cookie cookie = new Cookie("token",token);
        cookie.setHttpOnly(true);
        cookie.setSecure(false);
        cookie.setPath("/");
        cookie.setMaxAge(24*60*60);//1 day
        response.addCookie(cookie);

        response.setStatus(HttpServletResponse.SC_OK);
        response.setContentType("application/json");

        String role = determineRole(authentication);
        Map<String,String> res = new HashMap<>();
        res.put("email", authentication.getName());
        res.put("role",role);
        res.put("redirectUrl",getRedirectUrl(role));
        res.put("message","Login Successful");
        request.setAttribute("AUTH_RESPONSE_DATA",res);
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
        }else{
            return "http://localhost:3000";
        }
    }
}
