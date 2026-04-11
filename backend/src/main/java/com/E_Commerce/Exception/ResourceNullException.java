package com.E_Commerce.Exception;

public class ResourceNullException extends RuntimeException {
    public ResourceNullException(String message){
        super(message);
    }

    public ResourceNullException(String message,Throwable cause){
        super(message,cause);
    }
    
}
