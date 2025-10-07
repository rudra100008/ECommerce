package com.E_Commerce.ServicesImpl;

import com.E_Commerce.DTO.UserDTO;
import com.E_Commerce.Entity.User;
import com.E_Commerce.Exception.AlreadyExitsException;
import com.E_Commerce.Exception.ResourceNotFoundException;
import com.E_Commerce.Mapper.UserMapper;
import com.E_Commerce.Repository.UserRepository;
import com.E_Commerce.Services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final UserMapper userMapper;


    private void validateUsernameUniqueness(String username){
        if(userRepository.existsByUsername(username)){
            throw new AlreadyExitsException(username + " already exists.");
        }
    }

    private void validateUsernameUniqueness(String current,String updated){
        if(updated != null &&
                !updated.equals(current) &&
                userRepository.existsByUsername(updated))
        {
            throw new AlreadyExitsException(updated + " already exits");
        }
    }

    private void validateEmailUniqueness(String email){
        if(userRepository.existsByEmail(email)){
            throw new AlreadyExitsException(email+" already exists");
        }
    }

    private void validateEmailUniqueness(String current,String updated){
        if(updated != null &&
                !updated.equals(current) &&
                userRepository.existsByEmail(updated))
        {
            throw new AlreadyExitsException(updated + " already exits.");
        }
    }

    private void validatePhoneNumberUniqueness(String phoneNumber){
        if(userRepository.existsByPhoneNumber(phoneNumber)){
            throw  new AlreadyExitsException(phoneNumber + " already exits.");
        }
    }

    private void validatePhoneNumberUniqueness(String current, String updated){
        if(updated != null &&
                !updated.equals(current) &&
                userRepository.existsByPhoneNumber(updated))
        {
            throw new AlreadyExitsException(updated + " already exits.");
        }
    }

    @Override
    public UserDTO saveUser(UserDTO userDTO) {

        User user = this.userMapper.createUserWithAddress(userDTO);
        User savedUser = this.userRepository.save(user);
        return userMapper.toUserDTO(savedUser);
    }

    @Override
    public UserDTO fetchUser(Integer userId) {
        User user = this.userRepository.findById(userId)
                .orElseThrow(()-> new ResourceNotFoundException("User not found."));

        return userMapper.toUserDTO(user);
    }

    @Override
    public UserDTO updateUser(UserDTO userDTO) {
        return null;
    }

    @Override
    public void deleteUser(Integer userId) {

    }

    @Override
    public Boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }

    @Override
    public UserDTO findByEmail(String email) {
         User user = this.userRepository.findByEmail(email).
                 orElseThrow(()-> new ResourceNotFoundException(email+" not found in server."));
        return userMapper.toUserDTO(user);
    }
}
