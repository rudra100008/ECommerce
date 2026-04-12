package com.E_Commerce.Services;

import com.E_Commerce.DTO.UserDTO.UserResponseDTO;
import com.E_Commerce.DTO.UserDTO.UserRequestDTO;
import com.E_Commerce.Entity.Role;
import com.E_Commerce.Entity.User;

import java.util.Set;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public interface UserService {
    UserResponseDTO saveUser(UserRequestDTO requestDTO,Set<Role> roles);
    UserResponseDTO fetchById(Integer userId);
    User fetchUserEntityById(Integer userId);
    UserResponseDTO updateUser(UserRequestDTO dto);
    void deleteUser(Integer userId);
    Boolean existsByEmail(String email);
    UserResponseDTO findByEmail(String email);
    User findUserEntityByEmail(String email);

    UserResponseDTO uploadUserImage(MultipartFile imageFile,Integer userId);
    UserResponseDTO uploadUserImageAndFullName(MultipartFile imageFile,Integer userId,String fullName);
    UserResponseDTO revertToGoogleImage(Integer userId);
    byte[] fetchUserImage(String completeImageDir,Integer userId);

}
