package com.E_Commerce.ServicesImpl.AddressDataSet;

import com.E_Commerce.Entity.AddressDataSet.Municipality;
import com.E_Commerce.Exception.ResourceNotFoundException;
import com.E_Commerce.Repository.AddressDataSet.MunicipalityRepository;
import com.E_Commerce.Services.AddressDataSet.MunicipalityService;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MunicipalityServiceImpl implements MunicipalityService {
    private final MunicipalityRepository municipalityRepository;

    @Override
    @Transactional(readOnly = true)
    @Cacheable(value = "municipalities", key = "'all'")
    public List<Municipality> fetchAllMunicipality() {
        return this.municipalityRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    @Cacheable(value = "municipalities", key = "'district_' + #districtId")
    public List<Municipality> fetchMunicipalityByDistrictId(int districtId) {
        return this.municipalityRepository.findMunicipalityByDistrict(districtId);
    }

    @Override
    @Transactional(readOnly = true)
    @Cacheable(value = "municipalities",key = "'municipality_' + #municipalityId")
    public Municipality fetchById(int municipalityId) {
        return this.municipalityRepository.findById(municipalityId)
                .orElseThrow(()-> new ResourceNotFoundException("Municipality not found"));
    }
}
