package com.E_Commerce.Controller;

import com.E_Commerce.DTO.AddressDTO;
import com.E_Commerce.DTO.AddressDataSet.ProvinceDTO;
import com.E_Commerce.DTO.ProductDTO;
import com.E_Commerce.Entity.AddressDataSet.District;
import com.E_Commerce.Entity.AddressDataSet.Municipality;
import com.E_Commerce.Entity.AddressDataSet.Province;
import com.E_Commerce.Services.AddressDataSet.DistrictService;
import com.E_Commerce.Services.AddressDataSet.MunicipalityService;
import com.E_Commerce.Services.AddressDataSet.ProvinceService;
import com.E_Commerce.Services.AddressService;
import lombok.RequiredArgsConstructor;
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
        return ResponseEntity.status(HttpStatus.OK).body(Map.of(
                "data",provinces,
                "message","Provinces fetched successfully"
        ));
    }
    @GetMapping("/district/{provinceId}")
    public ResponseEntity<?> fetchDistrictByProvinceId(
            @PathVariable("provinceId")Integer provinceId
    ){
        List<District> districts = this.districtService.fetchByProvinceId(provinceId);
        return ResponseEntity.status(HttpStatus.OK)
                .body(Map.of(
                        "data",districts,
                        "message","Districts fetched successfully"
                ));
    }

    @GetMapping("/municipality/{districtId}")
    public ResponseEntity<?> fetchMunicipalityByDistrictId(
            @PathVariable("districtId")int districtId
    ){
        List<Municipality> municipalities = this.municipalityService.fetchMunicipalityByDistrictId(districtId);
        return ResponseEntity.status(HttpStatus.OK)
                .body(Map.of(
                        "data",municipalities,
                        "message","Municipalities fetched successfully"
                ));
    }
}
