package com.E_Commerce.Utils;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
import com.E_Commerce.ServicesImpl.DataImportService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j
public class DataImportRunner  implements ApplicationRunner {
     private final DataImportService dataImportService;

   @Override
public void run(ApplicationArguments args) {
    log.info("Triggering async data import...");

    // ✅ JUST CALL THIS
    dataImportService.importDataAsync();
}
    
}
