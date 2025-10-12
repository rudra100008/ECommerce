package com.E_Commerce.ServicesImpl;

import com.E_Commerce.Entity.Category;
import com.E_Commerce.Exception.ResourceNotFoundException;
import com.E_Commerce.Repository.CategoryRepository;
import com.E_Commerce.Services.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {
    private final CategoryRepository categoryRepository;
    @Override
    public Category createCategory(String name) {
        if(this.categoryRepository.existsByName(name)){
            return this.categoryRepository.findByName(name)
                    .orElseThrow(()-> new ResourceNotFoundException("category not found."));
        }
        Category category = Category.builder()
                .name(name)
                .build();
        return this.categoryRepository.save(category);
    }
}
