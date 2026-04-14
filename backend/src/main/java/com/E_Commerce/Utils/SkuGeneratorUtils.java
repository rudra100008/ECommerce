package com.E_Commerce.Utils;

import com.E_Commerce.DTO.ProductDTO;
import com.E_Commerce.Entity.Category;
import com.E_Commerce.Exception.BusinessValidationException;
import com.E_Commerce.Repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Component
@RequiredArgsConstructor
public class SkuGeneratorUtils {

    private final ProductRepository productRepository;

    /**
     * Runs in its own transaction with a synchronized lock.
     * REQUIRES_NEW = suspends the caller's transaction,
     * so the SKU is committed before the product is saved.
     */
    // SkuGeneratorUtils.java
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public synchronized String generateUniqueSku(ProductDTO productDTO, Category category) {
        if (productDTO.getSku() != null && !productDTO.getSku().isBlank()) {
            String manualSku = productDTO.getSku().trim().toUpperCase();
            if (productRepository.existsBySku(manualSku)) {
                throw new BusinessValidationException("SKU already exists: " + manualSku);
            }
            return manualSku;
        }

        String baseSku = generateBaseSku(productDTO, category);
        Set<String> existingSkus = new HashSet<>(productRepository.findSkuStartingWith(baseSku));

        if (!existingSkus.contains(baseSku)) {
            return baseSku;
        }

        int counter = 1;
        String candidate;
        do {
            candidate = baseSku + "_" + counter;
            counter++;
            if (counter > 999) {
                return baseSku + "_" + UUID.randomUUID().toString().substring(0, 6).toUpperCase();
            }
        } while (existingSkus.contains(candidate));

        return candidate;
    }

    private String generateBaseSku(ProductDTO productDTO, Category category) {
        if (productDTO.getProductName() == null || category.getName() == null) {
            throw new BusinessValidationException("Product name and category are required for SKU generation");
        }

        String categoryPart = normalize(category.getName());
        String productPart = normalize(productDTO.getProductName());

        // Truncate to keep SKU readable and within DB column size
        if (categoryPart.length() > 20)
            categoryPart = categoryPart.substring(0, 20);
        if (productPart.length() > 30)
            productPart = productPart.substring(0, 30);

        // Remove trailing underscore after truncation
        categoryPart = categoryPart.replaceAll("_$", "");
        productPart = productPart.replaceAll("_$", "");

        return categoryPart + "_" + productPart;
    }

    private String normalize(String input) {
        return input
                .trim()
                .toUpperCase()
                .replaceAll("[^A-Z0-9]+", "_")
                .replaceAll("^_|_$", "");
    }
}
