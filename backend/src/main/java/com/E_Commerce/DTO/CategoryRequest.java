package com.E_Commerce.DTO;

import com.E_Commerce.Entity.Product;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CategoryRequest {
    private Integer categoryId;
    @NotNull(message = "Category is required.")
    @NotBlank(message = "Category is required.")
    private String name;
    private List<Product> products = new ArrayList<>();
}
