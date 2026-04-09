package com.E_Commerce.Services;


import org.springframework.stereotype.Service;

@Service
public interface AsyncReservationReleaseService {

    public void processFailedRelease();
}
