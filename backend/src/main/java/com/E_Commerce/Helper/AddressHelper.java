package com.E_Commerce.Helper;

import com.E_Commerce.DTO.AddressDataSet.DistrictResponse;
import com.E_Commerce.DTO.AddressDataSet.MunicipalityResponse;
import com.E_Commerce.DTO.AddressDataSet.ProvinceResponse;
import com.E_Commerce.Entity.AddressDataSet.District;
import com.E_Commerce.Entity.AddressDataSet.Municipality;
import com.E_Commerce.Entity.AddressDataSet.Province;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class AddressHelper {


    public List<ProvinceResponse> toProvinceResponse(List<Province> provinces){
        return  provinces.stream()
                .map(province ->
                        ProvinceResponse
                                .builder()
                                .provinceId(province.getId())
                                .englishName(province.getEnglishName())
                                .nepaliName(province.getNepaliName())
                                .build())
                .toList();
    }

    public List<DistrictResponse> toDistrictResponse(List<District> districts){
        return districts.stream()
                .map(district ->
                        DistrictResponse
                                .builder()
                                .districtId(district.getId())
                                .nepaliName(district.getNepaliName())
                                .englishName(district.getEnglishName())
                                .provinceId(district.getProvince().getId())
                                .build())
                .toList();
    }

    public List<MunicipalityResponse> toMunicipalityResponse(List<Municipality> municipalities){
        return municipalities.stream()
                .map(municipality ->
                        MunicipalityResponse
                                .builder()
                                .wards(municipality.getWards())
                                .municipalityId(municipality.getId())
                                .districtId(municipality.getDistrict().getId())
                                .provinceId(municipality.getDistrict().getProvince().getId())
                                .englishName(municipality.getEnglishName())
                                .nepaliName(municipality.getNepaliName())
                                .build())
                .toList();
    }
}
