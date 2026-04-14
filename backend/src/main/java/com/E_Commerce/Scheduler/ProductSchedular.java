package com.E_Commerce.Scheduler;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.E_Commerce.Repository.ProductRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j
public class ProductSchedular {
    private final ProductRepository productRepository;

    @Scheduled(cron = "0 0 2 * * *")
    @Transactional
    public void cleanupProductsWithoutImages() {
        int deleted = productRepository.deleteProductsWithoutImages();
        log.info("Scheduled cleanup: deleted {} products without images", deleted);
    }

}
