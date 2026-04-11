package com.E_Commerce.Scheduler;

import com.E_Commerce.Entity.Reservation;
import com.E_Commerce.Enum.ReservationStatus;
import com.E_Commerce.Repository.ReservationRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

// New simple component — add this
@Component
@RequiredArgsConstructor
@Slf4j
public class ReservationExpiryScheduler {

    private final ReservationRepository reservationRepository;

    // Runs every hour
    @Scheduled(fixedDelay = 300_000)
    @Transactional
    public void cleanupExpiredReservations() {
        // Find all ACTIVE reservations that have passed their expiry time
        List<Reservation> expiredReservations = reservationRepository
                .findExpiredActiveReservations(LocalDateTime.now());

        if (expiredReservations.isEmpty()) return;

        expiredReservations.forEach(reservation ->
                reservation.setStatus(ReservationStatus.EXPIRED)
        );

        reservationRepository.saveAll(expiredReservations);
        log.info("Cleaned up {} expired reservations", expiredReservations.size());
    }
}
