package com.E_Commerce.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class PageInfo<T> {
    private List<T> data = new ArrayList<>();
    private Integer pageNumber;
    private Integer pageSize;
    private Integer totalPage;
    private Long totalElement;
    private Boolean lastPage;

}
