package com.E_Commerce.Controller;

import com.E_Commerce.DTO.AddressDTO;
import com.E_Commerce.DTO.AddressDataSet.DistrictResponse;
import com.E_Commerce.DTO.AddressDataSet.MunicipalityResponse;
import com.E_Commerce.DTO.AddressDataSet.ProvinceDTO;
import com.E_Commerce.DTO.AddressDataSet.ProvinceResponse;
import com.E_Commerce.DTO.ProductDTO;
import com.E_Commerce.Entity.AddressDataSet.District;
import com.E_Commerce.Entity.AddressDataSet.Municipality;
import com.E_Commerce.Entity.AddressDataSet.Province;
import com.E_Commerce.Repository.AddressDataSet.ProvinceRepository;
import com.E_Commerce.Services.AddressDataSet.DistrictService;
import com.E_Commerce.Services.AddressDataSet.MunicipalityService;
import com.E_Commerce.Services.AddressDataSet.ProvinceService;
import com.E_Commerce.Services.AddressService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.coyote.Response;
import org.springframework.boot.autoconfigure.graphql.GraphQlProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/address")
@Slf4j
public class AddressController {
    private final AddressService addressService;
    private final DistrictService districtService;
    private final ProvinceService provinceService;
    private final MunicipalityService municipalityService;

    @PostMapping("/addAddress")
    public ResponseEntity<?> addAddress(
            @RequestBody AddressDTO addressDTO
    ) {
        AddressDTO addedAddress = addressService.addAddress(addressDTO);

        return ResponseEntity.status(HttpStatus.OK).body(addedAddress);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<?> fetchAllAddress(
            @PathVariable("userId")Integer userId
    ){
        List<AddressDTO> addressDTOList = addressService.fetchAddressList(userId);

        return  ResponseEntity.status(HttpStatus.OK).body(addressDTOList);
    }

    @PutMapping("/updateAddress")
    public ResponseEntity<?> updateAddress(
            @RequestBody AddressDTO addressDTO
    ){
        AddressDTO updatedAddressDTO = this.addressService.updateAddress(addressDTO);

        return ResponseEntity.status(HttpStatus.OK).body(
                Map.of("message","Address Updated",
                        "address",updatedAddressDTO
                )
        );
    }
    @DeleteMapping("/{addressId}/user/{userId}")
    public ResponseEntity<?> removeAddress(
            @PathVariable("addressId")Integer addressId,
            @PathVariable("userId")Integer userId
    ){
        this.addressService.removeAddressById(userId,addressId);

        return ResponseEntity.status(HttpStatus.OK).body(Map.of("message","Address Removed"));
    }

    @GetMapping("/province")
    public ResponseEntity<?> fetchAllProvinceData(){
        List<Province> provinces = this.provinceService.fetchAllProvince();
        log.info("Provinces : {}",provinces);
        List<ProvinceResponse> provinceResponses = toProvinceResponse(provinces);
        return ResponseEntity.status(HttpStatus.OK).body(provinceResponses);
    }
    @GetMapping("/district/{provinceId}")
    public ResponseEntity<?> fetchDistrictByProvinceId(
            @PathVariable("provinceId")Integer provinceId
    ){
        List<District> districts = this.districtService.fetchByProvinceId(provinceId);
        List<DistrictResponse> districtResponses = toDistrictResponse(districts);
        return ResponseEntity.status(HttpStatus.OK)
                .body(districtResponses);
    }

    @GetMapping("/municipality/{districtId}")
    public ResponseEntity<?> fetchMunicipalityByDistrictId(
            @PathVariable("districtId")int districtId
    ){
        List<Municipality> municipalities = this.municipalityService.fetchMunicipalityByDistrictId(districtId);
        List<MunicipalityResponse> municipalityResponse = toMunicipalityResponse(municipalities);
        return ResponseEntity.status(HttpStatus.OK)
                .body(municipalityResponse);
    }


    //helper method

    private List<ProvinceResponse> toProvinceResponse(List<Province> provinces){
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

    private List<DistrictResponse> toDistrictResponse(List<District> districts){
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

    private List<MunicipalityResponse> toMunicipalityResponse(List<Municipality> municipalities){
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
