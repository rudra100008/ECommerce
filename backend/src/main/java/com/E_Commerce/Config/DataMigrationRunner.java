package com.E_Commerce.Config;

import com.E_Commerce.Entity.Product;
import com.E_Commerce.Repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Component
@RequiredArgsConstructor
public class DataMigrationRunner implements CommandLineRunner {
    private final ProductRepository productRepository;

    @Override
    @Transactional
    public void run(String... args) throws Exception {
        migrateExistingProducts();
    }

    private void migrateExistingProducts(){
        List<Product> productList = this.productRepository.findByCreatedAtIsNull();
        if(productList != null && !productList.isEmpty()){
            LocalDateTime now = LocalDateTime.now();
            productList.forEach(product -> {
                product.setCreatedAt(now);
                product.setUpdatedAt(now);
            });
            this.productRepository.saveAll(productList);
        }
    }
}
