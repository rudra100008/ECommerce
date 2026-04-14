package com.E_Commerce.Security;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import com.E_Commerce.Entity.Role;
import com.E_Commerce.Utils.RoleUtils;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;


@Component
@RequiredArgsConstructor
public class JwtAuthenticationHandler implements AuthenticationSuccessHandler {
    private final JwtUtil jwtUtil;
    private final CustomUserDetailsService userDetailsService;
    private final RoleUtils roleUtils;

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

        String role = roleUtils.determineRole(authentication);
        Map<String,String> res = new HashMap<>();
        res.put("email", authentication.getName());
        res.put("role",role);
        res.put("redirectUrl",roleUtils.getRedirectUrl(role));
        res.put("message","Login Successful");
        request.setAttribute("AUTH_RESPONSE_DATA",res);
    }

}
