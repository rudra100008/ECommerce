package com.E_Commerce.Services.AddressDataSet;

import com.E_Commerce.Entity.AddressDataSet.Municipality;
import org.springframework.stereotype.Service;

import javax.print.attribute.standard.MediaName;
import java.util.List;

@Service
public interface MunicipalityService {
    List<Municipality> fetchAllMunicipality();
    List<Municipality> fetchMunicipalityByDistrictId(int districtId);
}
