package com.E_Commerce.Securty;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;


import javax.crypto.SecretKey;
import java.security.Key;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Component
public class JwtUtil {
    @Value("${spring.token.secret}")
    private String secret_key;

    @Value("${jwt.token.expires}")
    private long expirationTime;

    private Key signInKey(){
        byte[] key = Base64.getDecoder().decode(secret_key);
        return Keys.hmacShaKeyFor(key);
    }

    public String extractUsername(String token){
        return extractClaim(token, Claims::getSubject);
    }

    public Date extractExpirationTime(String token){
        return extractClaim(token,Claims::getExpiration);
    }

    public <T> T extractClaim(String token, Function<Claims,T> claimsResolver){
        final Claims claims = extractAllClaim(token);
        return claimsResolver.apply(claims);
    }

    private Claims extractAllClaim(String token){
        return Jwts
                .parser() // give tools for opening the envelope
                .verifyWith((SecretKey) signInKey()) // give signature to verify the token signature
                .build() // in here the parser is build
                .parseSignedClaims(token) // finds the claims(subject,issuedAt,ExpirationTime) in the token
                .getPayload(); // create the Claims object to return
    }

    private Boolean isTokenExpired(String token){
        return extractExpirationTime(token).before(new Date());
    }

    private String createToken(Map<String, Object> claims, String subject){
        return Jwts.builder()
                .claims(claims)
                .subject(subject)
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis()+expirationTime))
                .signWith(signInKey())
                .compact();
    }

    public String generateToken(UserDetails userDetails){
        Map<String,Object> claims = new HashMap<>();
        return createToken(claims,userDetails.getUsername());
    }

    public Boolean isTokenValid(String token,UserDetails userDetails){
        String userName = extractUsername(token);
        return (userName.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }
}
