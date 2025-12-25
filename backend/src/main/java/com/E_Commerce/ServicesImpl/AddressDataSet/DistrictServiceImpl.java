package com.E_Commerce.ServicesImpl.AddressDataSet;

import com.E_Commerce.Entity.AddressDataSet.District;
import com.E_Commerce.Exception.ResourceNotFoundException;
import com.E_Commerce.Repository.AddressDataSet.DistrictRepository;
import com.E_Commerce.Services.AddressDataSet.DistrictService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DistrictServiceImpl implements DistrictService {
    private final DistrictRepository districtRepository;


    @Override
    @Transactional
    public List<District> fetchAllDistricts() {
        return this.districtRepository.findAll();
    }

    @Override
    public List<District> fetchByProvinceId(int provinceId) {

        return this.districtRepository.findDistrictByProvinceId(provinceId);
    }

    @Override
    public District fetchById(int districtId) {
        return this.districtRepository.findById(districtId)
                .orElseThrow(()-> new ResourceNotFoundException("District not found"));
    }
}
