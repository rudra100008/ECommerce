package com.E_Commerce.ServicesImpl.AddressDataSet;

import com.E_Commerce.Entity.AddressDataSet.Province;
import com.E_Commerce.Exception.ResourceNotFoundException;
import com.E_Commerce.Repository.AddressDataSet.ProvinceRepository;
import com.E_Commerce.Services.AddressDataSet.ProvinceService;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProvinceServiceImpl implements ProvinceService {
    private final ProvinceRepository provinceRepository;

    @Override
    @Transactional(readOnly = true)
    @Cacheable(value = "provinces", key = "'all'")
    public List<Province> fetchAllProvince() {
        return this.provinceRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    @Cacheable(value = "provinces", key = "#provinceId")
    public Province fetchProvinceById(Integer provinceId) {
        if(provinceId == null){
            throw new RuntimeException("Province not found.");
        }

        return this.provinceRepository.findById(provinceId)
                .orElseThrow(()-> new ResourceNotFoundException("Province not found"));
    }
}
