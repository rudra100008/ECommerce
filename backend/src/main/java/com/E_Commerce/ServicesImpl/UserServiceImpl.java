package com.E_Commerce.ServicesImpl;

import com.E_Commerce.DTO.UserDTO;
import com.E_Commerce.Entity.Address;
import com.E_Commerce.Entity.Cart;
import com.E_Commerce.Entity.User;
import com.E_Commerce.Exception.AlreadyExitsException;
import com.E_Commerce.Exception.ImageInvalidException;
import com.E_Commerce.Exception.ResourceNotFoundException;
import com.E_Commerce.Mapper.UserMapper;
import com.E_Commerce.Repository.CartRepository;
import com.E_Commerce.Repository.UserRepository;
import com.E_Commerce.Securty.AuthUtils;
import com.E_Commerce.Services.ImageService;
import com.E_Commerce.Services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final CartRepository cartRepository;
    private final ImageService imageService;
    private final AuthUtils authUtils;


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
    @Transactional
    public UserDTO saveUser(UserDTO userDTO) {
        User user = this.userMapper.toUser(userDTO);
        if(user.getAddresses() == null){
            user.setAddresses(new ArrayList<>());
        }else{
            user.setAddresses(user.getAddresses());
        }
        user.setHasCustomImage(true);
        User savedUser = this.userRepository.save(user);
        createCartForUser(savedUser);
        return userMapper.toUserDTO(savedUser);
    }

    @Override
    @Transactional
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
    @Transactional(readOnly = true)
    public UserDTO findByEmail(String email) {
         User user = this.userRepository.findByEmail(email).
                 orElseThrow(()-> new ResourceNotFoundException(email+" not found in server."));
        UserDTO userDTO = userMapper.toUserDTO(user);
         if(Boolean.TRUE.equals(user.getHasCustomImage())){
             userDTO.setProfileImageUrl(getUserImageUrl(user.getUserId()));
         }else{
             userDTO.setProfileImageUrl(user.getProfileImageUrl());
         }
         List<Integer> adddressIds = user.getAddresses().stream().
                 map(Address::getAddressId).toList();
         userDTO.setAddressIds(adddressIds);
         if(user.getCart() != null){
             userDTO.setCartId(user.getCart().getId());
         }

         return userDTO;

    }

    @Override
    @Transactional()
    public UserDTO uploadUserImage(MultipartFile imageFile, Integer userId) {
        User loggedInUser = authUtils.getLoggedInUser();
        if(!userId.equals(loggedInUser.getUserId())){
            throw new SecurityException("User is not allowed to upload Image.");
        }
        try{
            String imageDir = "users";
            User user =  getUser(userId);

            if (Boolean.TRUE.equals(user.getHasCustomImage() && user.getProfileImageUrl() != null)){
                if(!user.getProfileImageUrl().contains("googleusercontent.com")){
                    imageService.deleteImage(user.getProfileImageUrl(),user.getUsername());
                }
            }
            String imagePath = this.imageService.uploadImage(imageDir,imageFile);
            user.setProfileImageUrl(imagePath);
            user.setHasCustomImage(true);
            User savedUser = userRepository.save(user);
            return userMapper.toUserDTO(savedUser);
        }catch (IOException e){
            throw new RuntimeException("Image upload failed: "+e.getMessage());
        }
    }

    @Override
    @Transactional
    public UserDTO uploadUserImageAndFullName(MultipartFile imageFile, Integer userId, String fullName) {
        User loggedInUser = authUtils.getLoggedInUser();
        if (!userId.equals(loggedInUser.getUserId())) {
            throw new SecurityException("User is not allowed to upload Image or update fullName.");
        }

        try {
            String imageDir = "users";
            User user = getUser(userId);

            // Handle image upload
            if (imageFile != null && !imageFile.isEmpty()) {
                // Delete old custom image if exists
                if (Boolean.TRUE.equals(user.getHasCustomImage()) && user.getProfileImageUrl() != null) {
                    if (!user.getProfileImageUrl().contains("googleusercontent.com")) {
                        imageService.deleteImage(user.getProfileImageUrl(),user.getUsername());
                    }
                }

                String imagePath = this.imageService.uploadImage(imageDir, imageFile);
                user.setProfileImageUrl(imagePath);
                user.setHasCustomImage(true);
            }

            if (fullName != null && !fullName.trim().isEmpty()) {
                user.setFullName(fullName.trim());
            }

            User savedUser = userRepository.save(user);
            return userMapper.toUserDTO(savedUser);

        } catch (IOException e) {
            throw new ImageInvalidException("Image upload or fullName update failed: " + e.getMessage());
        }
    }

    @Override
    public UserDTO revertToGoogleImage(Integer userId) {
        User loggedInUser = authUtils.getLoggedInUser();
        if (!userId.equals(loggedInUser.getUserId())) {
            throw new SecurityException("User is not allowed to reset image.");
        }
        User user = getUser(userId);
        if (!"GOOGLE".equals(user.getProvider())) {
            throw new IllegalStateException("Only Google login users can reset to Google image");
        }
        if (user.getGoogleProfileImageUrl() == null) {
            throw new ResourceNotFoundException("No Google profile image available");
        }

        try{
            if(Boolean.TRUE.equals(user.getHasCustomImage() && user.getProfileImageUrl() != null)){
                if(!user.getProfileImageUrl().contains("googleusercontent.com")){
                    imageService.deleteImage(user.getProfileImageUrl(),user.getUsername());
                }
            }

            user.setProfileImageUrl(user.getGoogleProfileImageUrl());
            user.setHasCustomImage(false);
            User savedUser = this.userRepository.save(user);
            return this.userMapper.toUserDTO(savedUser);
        }catch (IOException e){
            throw new RuntimeException("Failed to delete old image: "+e.getMessage());
        }
    }

    @Override
    public byte[] fetchUserImage(String imagePath,Integer userId) {
        try{
            return this.imageService.getImage(imagePath);
        }catch(IOException e){
            throw new RuntimeException("Image fetching failed");
        }
    }


    // helper method
    private void createCartForUser(User user){
        Cart cart = Cart.builder()
                .user(user)
                .cartItem(new ArrayList<>())
                .build();
        this.cartRepository.save(cart);
    }
    private User getUser(Integer userId){
        return userRepository.findById(userId)
                .orElseThrow(()-> new ResourceNotFoundException("user not found"));
    }

    private String getUserImageUrl(Integer userId){
        return "/api/user/" + userId + "/fetchUserImage";
    }
}
