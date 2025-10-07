package com.E_Commerce.Securty;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    private final CustomUserDetailsService customUserDetailsService;
    private final JwtUtil jwtUtil;


    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String path = request.getRequestURI();
//        if(path.startsWith("/api/auth")){
//            filterChain.doFilter(request,response);
//            return;
//        }
//        if(path.startsWith("/oauth2")){
//            filterChain.doFilter(request,response);
//            return;
//        }

        String jwt = null;
        if(request.getCookies() != null){
            System.out.println("=== JWT Filter Debug ===");
            System.out.println("Cookies found: " + request.getCookies().length);
            for(Cookie cookie:request.getCookies()){
                System.out.println("Cookie: " + cookie.getName() + " = " + cookie.getValue());
                if("token".equals(cookie.getName()) && cookie.getValue() != null && !cookie.getValue().isEmpty()){
                     jwt = cookie.getValue();
                     break;
                }
            }
        }
        if(jwt != null) {
           String username = jwtUtil.extractUsername(jwt);
            if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
                UserDetails userDetails = customUserDetailsService.loadUserByUsername(username);
                if (jwtUtil.isTokenValid(jwt, userDetails)) {
                    UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                            userDetails,
                            null,
                            userDetails.getAuthorities()
                    );
                    authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(authToken);
                }
            }
        }
        filterChain.doFilter(request,response);
    }
}
