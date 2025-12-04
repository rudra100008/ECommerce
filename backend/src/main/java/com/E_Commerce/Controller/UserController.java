package com.E_Commerce.Controller;

import com.E_Commerce.DTO.UserDTO;
import com.E_Commerce.Entity.Role;
import com.E_Commerce.Entity.User;
import com.E_Commerce.Exception.ResourceNotFoundException;
import com.E_Commerce.Repository.UserRepository;
import com.E_Commerce.Services.ImageService;
import com.E_Commerce.Services.UserService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    private final UserRepository userRepository;
    private final ImageService imageService;
    Logger logger = LoggerFactory.getLogger(UserController.class);

    @GetMapping("/me")
    public ResponseEntity<?> getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated() || authentication instanceof AnonymousAuthenticationToken) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        Object principal = authentication.getPrincipal();
        User user = null;

        if (principal instanceof UserDetails) {
            UserDetails userDetails = (UserDetails) principal;
            user = this.userRepository.findByEmail(userDetails.getUsername())
                    .orElseThrow(() -> new ResourceNotFoundException("User not found"));
        } else if (principal instanceof DefaultOAuth2User) {
            DefaultOAuth2User oAuth2User = (DefaultOAuth2User) principal;
            user = this.userRepository.findByEmail(oAuth2User.getAttribute("email"))
                    .orElseThrow(() -> new ResourceNotFoundException("User not found"));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        Map<String, Object> responseBody = new HashMap<>();
        responseBody.put("userId", user.getUserId());
        responseBody.put("email", user.getEmail());
        responseBody.put("username", user.getUsername());

        if (Boolean.TRUE.equals(user.getHasCustomImage())) {
            responseBody.put("profileImageUrl", getUserImageUrl(user.getUserId()));
        } else {
            responseBody.put("profileImageUrl", user.getProfileImageUrl());
        }

        responseBody.put("fullName", user.getFullName());
        responseBody.put("hasCustomImage", user.getHasCustomImage());
        responseBody.put("roles", getRoles(user));

        if (user.getCart() != null) {
            responseBody.put("cartId", user.getCart().getId());
        } else {
            responseBody.put("cartId", null); // or create a cart here if needed
        }

        return ResponseEntity.ok(responseBody);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/fetchUser/{userId}")
    public ResponseEntity<?> fetchUser(
            @PathVariable("userId")Integer userId
    ){
        UserDTO  userDTO = this.userService.fetchUser(userId);

        return ResponseEntity.ok(userDTO);
    }

    @PostMapping(path = "/{userId}/userImageAndFullName",consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> insertUserImageAndFullName(
            @PathVariable("userId")Integer userId,
            @RequestPart(name = "userImage",required = false) MultipartFile imageFile,
            @RequestParam(name = "fullName",required = false) String fullName
    ){

        UserDTO userDTO =  this.userService.uploadUserImageAndFullName(imageFile,userId,fullName);
        Map<String,Object> response = new HashMap<>();
        response.put("message","Image uploaded and fullName is updated successful");
        response.put("userImageUrl",getUserImageUrl(userDTO.getUserId()));
        response.put("fullName",userDTO.getFullName());
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @GetMapping(path = "/{userId}/fetchUserImage",produces = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> fetchUserImage(
            @PathVariable("userId")Integer userId
    ){
        try{
            User user = this.userRepository.findById(userId)
                    .orElseThrow(()-> new ResourceNotFoundException("user not found"));
            if (user.getProfileImageUrl() == null || user.getProfileImageUrl().isEmpty()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body("Profile image not found for user");
            }
            MediaType mediaType = this.imageService.determineMediaType(user.getProfileImageUrl());
            byte[] imageBytes = this.userService.fetchUserImage(user.getProfileImageUrl(),user.getUserId());
            return ResponseEntity.status(HttpStatus.OK).contentType(mediaType).body(imageBytes);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error fetching image: " + e.getMessage());
        }
    }


    @GetMapping("/{userId}/revert_to_googleImage")
    public ResponseEntity<?> revertToGoogleImage(
            @PathVariable("userId") Integer userId
    ){
         this.userService.revertToGoogleImage(userId);
        return ResponseEntity.status(HttpStatus.OK).body(Map.of("message","Profile Picture reverted to google Profile Picture."));
    }
    //helper method
    private String getUserImageUrl(Integer userId){
        return "/api/user/" + userId + "/fetchUserImage";
    }

    private List<Role.RoleName> getRoles(User user){
        return user.getRoles().stream().map(Role::getRoleName).toList();
    }
}
