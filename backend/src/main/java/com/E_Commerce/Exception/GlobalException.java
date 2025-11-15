package com.E_Commerce.Exception;

import jakarta.validation.ConstraintViolationException;
import org.springframework.boot.autoconfigure.graphql.GraphQlProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalException {

    private ResponseEntity<?> errorResponse(HttpStatus status, String message, WebRequest request){
        Map<String,Object> response = new HashMap<>();
        response.put("timeStamp", LocalDateTime.now());
        response.put("status",status.value());
        response.put("Error",status.getReasonPhrase());
        response.put("message",message);
        response.put("path", request.getDescription(false));

        return ResponseEntity.status(status).body(response);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> handleException(Exception e,WebRequest request){
        e.printStackTrace();
        return errorResponse(
                HttpStatus.INTERNAL_SERVER_ERROR,
                "An unexcepted error occurred: "+e.getMessage(),
                request
        );
    }
    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<?> handleIllegalArgumentException(IllegalArgumentException e,WebRequest request){
        return  errorResponse(
                HttpStatus.BAD_REQUEST,
                e.getMessage(),
                request
        );
    }

    @ExceptionHandler(IllegalAccessException.class)
    public ResponseEntity<?> handleIllegalAccessException(IllegalAccessException e, WebRequest request){
        return errorResponse(HttpStatus.UNAUTHORIZED,e.getMessage(),request);
    }

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<?> handleResourceNotFoundException(ResourceNotFoundException e, WebRequest request) {
        return errorResponse(
                HttpStatus.NOT_FOUND,
                e.getMessage(),
                request
        );
    }
    @ExceptionHandler(AlreadyExitsException.class)
    public ResponseEntity<?> handleAlreadyExistsException(AlreadyExitsException e, WebRequest request) {
        return errorResponse(
                HttpStatus.BAD_REQUEST,
                e.getMessage(),
                request
        );
    }
    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<?> handleConstraintViolationException(ConstraintViolationException e,WebRequest request){
        return errorResponse(HttpStatus.BAD_REQUEST,"Validation Error:"+e.getMessage(),request);
    }
    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<?> handleBadCredentialsException(BadCredentialsException e,WebRequest request){
        return errorResponse(HttpStatus.UNAUTHORIZED,e.getMessage(),request);
    }
    @ExceptionHandler(UsernameNotFoundException.class)
    public ResponseEntity<?> handleUserNameNotFoundException(UsernameNotFoundException e,WebRequest request){
        return errorResponse(HttpStatus.NOT_FOUND,e.getMessage(),request);
    }
    @ExceptionHandler(ImageValidException.class)
    public ResponseEntity<?> handleImageValidException(ImageValidException e,WebRequest request){
        return  errorResponse(HttpStatus.BAD_REQUEST,e.getMessage(),request);
    }
    @ExceptionHandler(AccessDeniedException.class)
    public ResponseEntity<?> handleAccessDeniedException(AccessDeniedException e,WebRequest request){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String role = determineRole(authentication);
        Map<String, Object> body = new HashMap<>();
        body.put("error",HttpStatus.FORBIDDEN);
        body.put("message","You don't have permission to access this resource.");
        body.put("role",role);
        body.put("redirectUrl", getRedirectUrl(role));
        return ResponseEntity.status(HttpStatus.FORBIDDEN).body(body);
    }
    @ExceptionHandler(SecurityException.class)
    public ResponseEntity<?> handleSecurityException(SecurityException e,WebRequest request){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String role = determineRole(authentication);
        Map<String, Object> body = new HashMap<>();
        body.put("error",HttpStatus.FORBIDDEN);
        body.put("message",e.getLocalizedMessage());
        body.put("role",role);
        body.put("redirectUrl", getRedirectUrl(role));
        return ResponseEntity.status(HttpStatus.FORBIDDEN).body(body);
    }
    @ExceptionHandler(IOException.class)
    public ResponseEntity<?> handleIOException(IOException e,WebRequest request){
        return errorResponse(HttpStatus.BAD_REQUEST,e.getMessage(),request);
    }

    @ExceptionHandler(BusinessValidationException.class)
    public ResponseEntity<?> handleBusinessValidationException(BusinessValidationException e,WebRequest request){
        return  errorResponse(
                HttpStatus.CONFLICT,
                e.getMessage(),
                request
        );
    }
    @ExceptionHandler(InsufficientStockException.class)
    public ResponseEntity<?> handleInsufficientStockException(InsufficientStockException e,WebRequest request){
        return  errorResponse(
                HttpStatus.BAD_REQUEST,
                e.getMessage(),
                request
        );
    }
    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<?> handleRunTimeException(RuntimeException e,WebRequest request){
        return  errorResponse(
                HttpStatus.BAD_REQUEST,
                e.getMessage(),
                request
        );
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
        } else if (role.equals("ROLE_CUSTOMER")) {
            return "http://localhost:3000/";
        }
        return null;
    }

}
