package com.E_Commerce.ServicesImpl;

import com.E_Commerce.DTO.AddressDTO;
import com.E_Commerce.Entity.Address;
import com.E_Commerce.Entity.User;
import com.E_Commerce.Exception.ResourceNotFoundException;
import com.E_Commerce.Mapper.AddressMapper;
import com.E_Commerce.Repository.AddressRepository;
import com.E_Commerce.Repository.UserRepository;
import com.E_Commerce.Services.AddressService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
@RequiredArgsConstructor
public class AddressServiceImpl implements AddressService {
    private final UserRepository userRepository;
    private final AddressMapper addressMapper;
    private final AddressRepository addressRepository;


    @Override
    public AddressDTO addAddress(AddressDTO addressDTO) {
        Address address = this.addressMapper.toAddress(addressDTO);
        User user = getUser(addressDTO.getUserId());
        address.setUser(user);

        Address savedAddress = this.addressRepository.save(address);
        return addressMapper.toAddressDTO(savedAddress);
    }

    @Override
    public List<AddressDTO> fetchAddressList(Integer userId) {
        List<Address>  addressList = addressRepository.fetchAllByUserId(userId)
                .orElseThrow(()-> new ResourceNotFoundException("address not found for userId: "+ userId));
        List<AddressDTO> addressDTOList = new ArrayList<>();
        for (Address address : addressList){
            addressDTOList.add(addressMapper.toAddressDTO(address));
        }
        return addressDTOList;
    }

    private User getUser(Integer userId){
        return  this.userRepository.findById(userId)
                .orElseThrow(()-> new ResourceNotFoundException("User not found."));
    }
}
