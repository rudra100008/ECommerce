package com.E_Commerce.Services;

import com.E_Commerce.DTO.AddressDTO;
import com.E_Commerce.Entity.Address;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface AddressService {
    AddressDTO addAddress(AddressDTO addressDTO);
    List<AddressDTO> fetchAddressList(Integer userId);

    AddressDTO updateAddress(AddressDTO addressDTO);
    void removeAddressById(Integer userId,Integer addressId);

}
