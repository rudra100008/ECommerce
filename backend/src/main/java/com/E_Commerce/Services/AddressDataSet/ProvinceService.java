package com.E_Commerce.Services.AddressDataSet;

import com.E_Commerce.Entity.AddressDataSet.Province;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProvinceService {
    List<Province> fetchAllProvince();
    Province fetchProvinceById(Integer provinceId);
}
