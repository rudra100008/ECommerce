package com.E_Commerce.Controller;

import com.E_Commerce.DTO.AddressDTO;
import com.E_Commerce.Services.AddressService;
import lombok.RequiredArgsConstructor;
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
}
