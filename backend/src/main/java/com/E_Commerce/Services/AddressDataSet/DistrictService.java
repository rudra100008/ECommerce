package com.E_Commerce.Services.AddressDataSet;

import com.E_Commerce.Entity.AddressDataSet.District;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface DistrictService {
    List<District> fetchAllDistricts();
    List<District> fetchByProvinceId(int provinceId);

    District fetchById(int districtId);
}
