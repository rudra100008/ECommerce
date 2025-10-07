package com.E_Commerce.Exception;

public class AlreadyExitsException extends RuntimeException{
    public AlreadyExitsException(String message){
        super(message);
    }
}
