package com.E_Commerce.ServicesImpl;

import com.E_Commerce.DTO.UserDTO;
import com.E_Commerce.Entity.Address;
import com.E_Commerce.Entity.User;
import com.E_Commerce.Exception.AlreadyExitsException;
import com.E_Commerce.Exception.ImageInvalidException;
import com.E_Commerce.Exception.ResourceNotFoundException;
import com.E_Commerce.Exception.ResourceNullException;
import com.E_Commerce.Mapper.UserMapper;
import com.E_Commerce.Repository.UserRepository;
import com.E_Commerce.Securty.AuthUtils;
import com.E_Commerce.Services.CartService;
import com.E_Commerce.Services.ImageService;
import com.E_Commerce.Services.UserService;
import lombok.RequiredArgsConstructor;

import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.config.annotation.rsocket.RSocketSecurity.AuthorizePayloadsSpec.Access;
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
    private final CartService cartService;
    private final ImageService imageService;
    private final AuthUtils authUtils;

    private static final String GOOGLE_USER_CONTENT = "googleusercontent.com";

    private void validateUsernameUniqueness(String username) {
        if (userRepository.existsByUsername(username)) {
            throw new AlreadyExitsException(username + " already exists.");
        }
    }

    private void validateUsernameUniqueness(String current, String updated) {
        if (updated != null &&
                !updated.equals(current) &&
                userRepository.existsByUsername(updated)) {
            throw new AlreadyExitsException(updated + " already exits");
        }
    }

    private void validateEmailUniqueness(String email) {
        if (userRepository.existsByEmail(email)) {
            throw new AlreadyExitsException(email + " already exists");
        }
    }

    private void validateEmailUniqueness(String current, String updated) {
        if (updated != null &&
                !updated.equals(current) &&
                userRepository.existsByEmail(updated)) {
            throw new AlreadyExitsException(updated + " already exits.");
        }
    }

    private void validatePhoneNumberUniqueness(String phoneNumber) {
        if (userRepository.existsByPhoneNumber(phoneNumber)) {
            throw new AlreadyExitsException(phoneNumber + " already exits.");
        }
    }

    private void validatePhoneNumberUniqueness(String current, String updated) {
        if (updated != null &&
                !updated.equals(current) &&
                userRepository.existsByPhoneNumber(updated)) {
            throw new AlreadyExitsException(updated + " already exits.");
        }
    }

    @Override
    @Transactional
    public UserDTO saveUser(UserDTO userDTO) {
        User user = this.userMapper.toUser(userDTO);
        if (user.getAddresses() == null) {
            user.setAddresses(new ArrayList<>());
        }
        user.setHasCustomImage(true);
        User savedUser = this.userRepository.save(user);
        this.cartService.createCartForUser(user);
        return userMapper.toUserDTO(savedUser);
    }

    @Override
    @Transactional(readOnly = true)
    public User fetchUserEntityById(Integer userId) {
        if (userId == null) {
            throw new ResourceNullException("userId is null");
        }
        return this.userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found."));
    }

    @Override
    @Transactional(readOnly = true)
    public UserDTO fetchById(Integer userId) {
        if (userId == null) {
            throw new ResourceNullException("userId is null");
        }
        User user = this.userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found."));
        return userMapper.toUserDTO(user);
    }

    @Override
    public UserDTO updateUser(UserDTO userDTO) {
        return null;
    }

    @Override
    public void deleteUser(Integer userId) {
        User user = getUser(userId);
        if (user != null) {
            this.userRepository.delete(user);
        }
        throw new ResourceNullException("User is null or empty");
    }

    @Override
    public Boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }

    @Override
    @Transactional(readOnly = true)
    public UserDTO findByEmail(String email) {
        User user = this.userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException(email + " not found in server."));

        // String profileImageUrl;
        // if (Boolean.TRUE.equals(user.getHasCustomImage())) {
        //     profileImageUrl = getUserImageUrl(user.getUserId());
        // } else {
        //     profileImageUrl = user.getProfileImageUrl();
        // }
        // List<Integer> adddressIds = user.getAddresses().stream().map(Address::getAddressId).toList();

        // Integer cartId = (user.getCart() != null) ? user.getCart().getId() : null;

        return toUserDTOWithImage(user);
    }

    @Override
    public User findUserEntityByEmail(String email) {
        if (email == null || email.isEmpty()) {
            throw new IllegalArgumentException("Email given is null or empty");
        }
        return this.userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("Email not found"));
    }

    @Override
    @Transactional()
    public UserDTO uploadUserImage(MultipartFile imageFile, Integer userId) {
        User user = validateUser(userId, "You are not allowed to upload user image.Access Denied");
        try {
            String imageDir = "users";

            if (user.getHasCustomImage() && user.getProfileImageUrl() != null
                    && !user.getProfileImageUrl().contains(GOOGLE_USER_CONTENT)) {
                imageService.deleteImage(user.getProfileImageUrl(), user.getUsername());
            }

            String imagePath = this.imageService.uploadImage(imageDir, imageFile);
            user.setProfileImageUrl(imagePath);
            user.setHasCustomImage(true);
            User savedUser = userRepository.save(user);
            return userMapper.toUserDTO(savedUser);
        } catch (IOException e) {
            throw new ImageInvalidException("Image upload failed: " + e.getMessage());
        }
    }

    @Override
    @Transactional
    public UserDTO uploadUserImageAndFullName(MultipartFile imageFile, Integer userId, String fullName) {
        User user = validateUser(userId, "You are not allowed to upload user image or edit fullName");

        try {
            String imageDir = "users";

            // Handle image upload
            if (imageFile != null && !imageFile.isEmpty()) {
                // Delete old custom image if exists
                if (Boolean.TRUE.equals(user.getHasCustomImage()) && user.getProfileImageUrl() != null
                        && !user.getProfileImageUrl().contains(GOOGLE_USER_CONTENT)) {
                    imageService.deleteImage(user.getProfileImageUrl(), user.getUsername());
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
        User user = validateUser(userId, "You are not allowed to revert google image.");

        if (!"GOOGLE".equals(user.getProvider())) {
            throw new IllegalStateException("Only Google login users can reset to Google image");
        }
        if (user.getGoogleProfileImageUrl() == null) {
            throw new ResourceNotFoundException("No Google profile image available");
        }

        try {
            if (user.getHasCustomImage() && user.getProfileImageUrl() != null
                    && !user.getProfileImageUrl().contains(GOOGLE_USER_CONTENT)) {
                imageService.deleteImage(user.getProfileImageUrl(), user.getUsername());
            }

            user.setProfileImageUrl(user.getGoogleProfileImageUrl());
            user.setHasCustomImage(false);
            User savedUser = this.userRepository.save(user);
            return this.userMapper.toUserDTO(savedUser);
        } catch (IOException e) {
            throw new ImageInvalidException("Failed to delete old image: " + e.getMessage());
        }
    }

    @Override
    public byte[] fetchUserImage(String imagePath, Integer userId) {
        try {
            return this.imageService.getImage(imagePath);
        } catch (IOException e) {
            throw new ImageInvalidException("Image fetching failed");
        }
    }

    // helper method

    private User getUser(Integer userId) {
        if (userId == null) {
            throw new IllegalArgumentException("UserId is null");
        }
        return userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("user not found"));
    }

    private User validateUser(Integer userId, String message) {
        User user = this.authUtils.getLoggedInUser();
        if (!user.getUserId().equals(userId)) {
            throw new AccessDeniedException(message != null ? message : "User is not allowed to access this service.");
        }
        return user;
    }

    private String getUserImageUrl(Integer userId) {
        return "/api/user/" + userId + "/fetchUserImage";
    }

    private UserDTO toUserDTOWithImage(User user) {
    UserDTO base = userMapper.toUserDTO(user); // profileImageUrl will be null here

    String profileImageUrl;
    if (Boolean.TRUE.equals(user.getHasCustomImage())) {
        profileImageUrl = getUserImageUrl(user.getUserId());
    } else {
        profileImageUrl = user.getProfileImageUrl(); // Google URL or null
    }

    // Reconstruct the record with the resolved image URL
    return new UserDTO(
        base.userId(),
        base.username(),
        base.email(),
        base.password(),
        base.fullName(),
        base.phoneNumber(),
        base.roles(),
        profileImageUrl,        // resolved here
        base.addressIds(),
        base.cartId(),
        base.hasCustomImage()
    );
}
}
