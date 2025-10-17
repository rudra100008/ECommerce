package com.E_Commerce.ServicesImpl;

import com.E_Commerce.DTO.CategoryDTO;
import com.E_Commerce.DTO.PageInfo;
import com.E_Commerce.Entity.Category;
import com.E_Commerce.Exception.ResourceNotFoundException;
import com.E_Commerce.Repository.CategoryRepository;
import com.E_Commerce.Services.CategoryService;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

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

    @Override
    public Category findById(Integer categoryId) {
         return this.categoryRepository.findById(categoryId)
                 .orElseThrow(()-> new ResourceNotFoundException("Category not found"));
    }

    @Override
    public PageInfo<CategoryDTO> fetchAllCategory(Integer pageNumber, Integer pageSize) {
        Pageable pageable = PageRequest.of(pageNumber,pageSize);
        Page<Category> categories = this.categoryRepository.findAll(pageable);
        List<CategoryDTO> categoryDTOS = categories.getContent().stream()
                .map(category -> new CategoryDTO(category.getCategoryId(),category.getName()))
                .collect(Collectors.toList());
        return new  PageInfo<>(
                categoryDTOS,
                pageNumber,
                pageSize,
                categories.getTotalPages(),
                categories.getTotalElements(),
                categories.isLast()
        );
    }


}
