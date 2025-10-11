package com.E_Commerce.Services;

import com.E_Commerce.Entity.Category;
import org.springframework.stereotype.Service;

@Service
public interface CategoryService {
    Category createCategory(String name);
}
