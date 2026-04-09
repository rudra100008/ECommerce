package com.E_Commerce.ServicesImpl;

import com.E_Commerce.Repository.FailedReleaseRepository;
import com.E_Commerce.Services.AsyncReservationReleaseService;
import com.E_Commerce.Services.ReservationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Slf4j
@RequiredArgsConstructor
public class AsyncReservationReleaseServiceImpl implements AsyncReservationReleaseService {
    private final ReservationService reservationService;
    private final FailedReleaseRepository failedReleaseRepository;


    @Override
    @Transactional
    @Async
    public void processFailedRelease() {

    }
}
