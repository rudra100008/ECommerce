package com.E_Commerce.Exception;

public class BusinessValidationException extends RuntimeException{
    public BusinessValidationException(String message){
        super(message);
    }
}
