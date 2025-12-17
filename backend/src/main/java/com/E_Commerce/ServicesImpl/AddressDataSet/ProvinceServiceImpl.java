package com.E_Commerce.ServicesImpl.AddressDataSet;

import com.E_Commerce.Entity.AddressDataSet.Province;
import com.E_Commerce.Repository.AddressDataSet.ProvinceRepository;
import com.E_Commerce.Services.AddressDataSet.ProvinceService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProvinceServiceImpl implements ProvinceService {
    private final ProvinceRepository provinceRepository;

    @Override
    public List<Province> fetchAllProvince() {
        return this.provinceRepository.findAll();
    }
}
