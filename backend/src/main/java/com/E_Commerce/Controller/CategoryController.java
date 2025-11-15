package com.E_Commerce.Controller;

import com.E_Commerce.DTO.CategoryDTO;
import com.E_Commerce.DTO.PageInfo;
import com.E_Commerce.Entity.Category;
import com.E_Commerce.Services.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/category")
public class CategoryController {
    private final CategoryService categoryService;
    private static final String PAGE_NUMBER = "0";
    private static final String PAGE_SIZE = "5";

    @GetMapping("/fetchAll")
    public ResponseEntity<?> fetchAllCategory(
            @RequestParam(required = false,defaultValue = PAGE_NUMBER,name = "pageNumber")Integer pageNumber,
            @RequestParam(required = false,defaultValue = PAGE_SIZE,name = "pageSize")Integer pageSize
    ){
        PageInfo<CategoryDTO> categoryPageInfo = this.categoryService.fetchAllCategory(pageNumber,pageSize);

        return ResponseEntity.ok(categoryPageInfo);
    }

    @GetMapping("/{categoryId}")
    public ResponseEntity<?> fetchCategoryById(
            @PathVariable("categoryId") Integer categoryId
    ){
        Category category = categoryService.findById(categoryId);
        CategoryDTO categoryDTO = new CategoryDTO(category.getCategoryId(),category.getName());
        return ResponseEntity.status(HttpStatus.OK).body(categoryDTO);
    }
}
