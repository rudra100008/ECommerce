package com.E_Commerce.ServicesImpl;

import com.E_Commerce.DTO.CategoryDTO;
import com.E_Commerce.DTO.PageInfo;
import com.E_Commerce.Entity.Category;
import com.E_Commerce.Exception.ResourceNotFoundException;
import com.E_Commerce.Repository.CategoryRepository;
import com.E_Commerce.Services.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {
    private final CategoryRepository categoryRepository;


    @Override
    @Transactional
    public Category createCategory(String name) {
     return this.categoryRepository.findByName(name)
             .orElseGet(()->{
                 Category category = Category.builder()
                         .name(name)
                         .build();
                 return this.categoryRepository.save(category);
             });
    }

    @Override
    @Transactional(readOnly = true)
    public Category findById(Integer categoryId) {
         return this.categoryRepository.findById(categoryId)
                 .orElseThrow(()-> new ResourceNotFoundException("Category not found"));
    }

    @Override
    @Transactional(readOnly = true)
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
