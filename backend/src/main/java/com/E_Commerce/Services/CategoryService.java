package com.E_Commerce.Services;

import com.E_Commerce.DTO.CategoryDTO;
import com.E_Commerce.DTO.PageInfo;
import com.E_Commerce.Entity.Category;
import org.springframework.stereotype.Service;

@Service
public interface CategoryService {
    Category createCategory(String name);
    Category findById(Integer categoryId);
    PageInfo<CategoryDTO> fetchAllCategory(Integer pageNumber, Integer pageSize);
}
