package com.E_Commerce.Exception;

import jakarta.validation.ConstraintViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.BadCredentialsException;
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
        return  errorResponse(
                HttpStatus.FORBIDDEN,
                "Access Denied: You don't have permission to access this resource.",
                request
        );
    }
    @ExceptionHandler(IOException.class)
    public ResponseEntity<?> handleIOException(IOException e,WebRequest request){
        return errorResponse(HttpStatus.BAD_REQUEST,e.getMessage(),request);
    }

}
