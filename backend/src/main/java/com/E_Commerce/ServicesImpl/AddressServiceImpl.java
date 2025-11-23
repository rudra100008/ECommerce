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
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;


@Service
@RequiredArgsConstructor
public class AddressServiceImpl implements AddressService {
    private final UserRepository userRepository;
    private final AddressMapper addressMapper;
    private final AddressRepository addressRepository;


    @Override
    @Transactional
    public AddressDTO addAddress(AddressDTO addressDTO) {
        Address address = this.addressMapper.toAddress(addressDTO);
        User user = getUser(addressDTO.getUserId());
        address.setUser(user);

        Address savedAddress = this.addressRepository.save(address);
        return addressMapper.toAddressDTO(savedAddress);
    }

    @Override
    @Transactional
    public List<AddressDTO> fetchAddressList(Integer userId) {
        List<Address>  addressList = addressRepository.fetchAllByUserId(userId)
                .orElseThrow(()-> new ResourceNotFoundException("address not found for userId: "+ userId));
        List<AddressDTO> addressDTOList = new ArrayList<>();
        for (Address address : addressList){
            addressDTOList.add(addressMapper.toAddressDTO(address));
        }
        return addressDTOList;
    }

    @Override
    public AddressDTO updateAddress(AddressDTO addressDTO) {
        Address existingAddress = this.addressRepository.findById(addressDTO.getAddressId())
                .orElseThrow(()-> new ResourceNotFoundException("address not found."));
        if(!existingAddress.getUser().getUserId().equals(addressDTO.getUserId())){
            throw new IllegalStateException("User cannot update this address.");
        }
        updateExistingAddress(existingAddress,addressDTO);

        Address addressUpdated = this.addressRepository.save(existingAddress);
        return this.addressMapper.toAddressDTO(addressUpdated);
    }

    @Override
    @Transactional
    public void removeAddressById(Integer userId, Integer addressId) {
      Address address = this.addressRepository.findById(addressId)
              .orElseThrow(()-> new ResourceNotFoundException("address not found"));
      if(!address.getUser().getUserId().equals(userId)){
          throw new IllegalStateException("User cannot delete this address.");
      }

      addressRepository.delete(address);
    }

    private User getUser(Integer userId){
        return  this.userRepository.findById(userId)
                .orElseThrow(()-> new ResourceNotFoundException("User not found."));
    }

    private void updateExistingAddress(Address existingAddress,AddressDTO addressDTO){
        if(addressDTO.getDistrict() != null && !addressDTO.getDistrict().trim().isEmpty()){
            existingAddress.setDistrict(addressDTO.getDistrict().trim());
        }
        if(addressDTO.getProvince() != null && !addressDTO.getProvince().trim().isEmpty()){
            existingAddress.setProvince(addressDTO.getProvince().trim());
        }
        if(addressDTO.getMunicipality() != null && !addressDTO.getMunicipality().trim().isEmpty()){
            existingAddress.setMunicipality(addressDTO.getMunicipality().trim());
        }
        if(addressDTO.getWardNumber() != null && addressDTO.getWardNumber() > 0 && addressDTO.getWardNumber() <= 35){
            existingAddress.setWardNumber(addressDTO.getWardNumber());
        }
        if(addressDTO.getLandmark() != null && !addressDTO.getLandmark().trim().isEmpty()){
            existingAddress.setLandmark(addressDTO.getLandmark().trim());
        }
    }
}
