package com.E_Commerce.Services;

import com.E_Commerce.DTO.UserDTO;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public interface UserService {
    UserDTO saveUser(UserDTO userDTO);
    UserDTO fetchUser(Integer userId);
    UserDTO updateUser(UserDTO userDTO);
    void deleteUser(Integer userId);
    Boolean existsByEmail(String email);
    UserDTO findByEmail(String email);

    UserDTO uploadUserImage(MultipartFile imageFile,Integer userId);
    byte[] fetchUserImage(String completeImageDir,Integer userId);

}
