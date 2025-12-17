package com.E_Commerce.ServicesImpl.AddressDataSet;

import com.E_Commerce.Entity.AddressDataSet.Municipality;
import com.E_Commerce.Repository.AddressDataSet.MunicipalityRepository;
import com.E_Commerce.Services.AddressDataSet.MunicipalityService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MunicipalityServiceImpl implements MunicipalityService {
    private final MunicipalityRepository municipalityRepository;

    @Override
    public List<Municipality> fetchAllMunicipality() {
        return this.municipalityRepository.findAll();
    }

    @Override
    public List<Municipality> fetchMunicipalityByDistrictId(int districtId) {
        return this.municipalityRepository.findMunicipalityByDistrict(districtId);
    }
}
