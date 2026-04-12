package com.E_Commerce.Controller;

import com.E_Commerce.DTO.CartDTO;
import com.E_Commerce.DTO.UserDTO.UserResponseDTO;
import com.E_Commerce.Entity.Address;
import com.E_Commerce.Entity.Role;
import com.E_Commerce.Entity.User;
import com.E_Commerce.Exception.ResourceNotFoundException;
import com.E_Commerce.Repository.UserRepository;
import com.E_Commerce.Securty.AuthUtils;
import com.E_Commerce.Services.CartService;
import com.E_Commerce.Services.ImageService;
import com.E_Commerce.Services.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
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

import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
@Slf4j
public class UserController {
    private final UserService userService;
    private final UserRepository userRepository;
    private final ImageService imageService;
    private final AuthUtils authUtils;
    private final CartService cartService;


    @GetMapping("/me")
    public ResponseEntity<?> getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated() || authentication instanceof AnonymousAuthenticationToken) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        Object principal = authentication.getPrincipal();
        UserResponseDTO responseDTO;

        switch (principal) {
            case UserDetails userDetails ->
                    responseDTO = this.userService.findByEmail(userDetails.getUsername());
            case DefaultOAuth2User defaultOAuth2User ->
                    responseDTO = this.userService.findByEmail(defaultOAuth2User.getAttribute("email"));
            default -> {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }
        }

        return ResponseEntity.ok(responseDTO);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/fetchUser/{userId}")
    public ResponseEntity<?> fetchUser(
            @PathVariable("userId")Integer userId
    ){
        UserResponseDTO responseDTO = this.userService.fetchById(userId);

        return ResponseEntity.ok(responseDTO);
    }

    @PostMapping(path = "/{userId}/userImageAndFullName",consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> insertUserImageAndFullName(
            @PathVariable("userId")Integer userId,
            @RequestPart(name = "userImage",required = false) MultipartFile imageFile,
            @RequestParam(name = "fullName",required = false) String fullName
    ){

        UserResponseDTO responseDTO =  this.userService.uploadUserImageAndFullName(imageFile,userId,fullName);
        return ResponseEntity.status(HttpStatus.OK).body(responseDTO);
    }

    @GetMapping(path = "/{userId}/fetchUserImage",produces = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> fetchUserImage(
            @PathVariable("userId")Integer userId
    ){
        try{
            User user = this.userService.fetchUserEntityById(userId);
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
    // //helper method
    // private String getUserImageUrl(Integer userId){
    //     return "/api/user/" + userId + "/fetchUserImage";
    // }

    // private Set<Role.RoleName> getRoles(User user){
    //     return user.getRoles().stream().map(Role::getRoleName).collect(Collectors.toSet());
    // }
    // private List<Integer> getAddressIds(List<Address> addresses){
    //     return addresses.stream().map(Address::getAddressId).toList();
    // }
    // private CartDTO createCart(UserResponseDTO user){
    //     CartDTO cartDTO = CartDTO.
    //             builder()
    //             .userId(user.userId())
    //             .createdAt(LocalDateTime.now())
    //             .updatedAt(LocalDateTime.now())
    //             .build();
    //     return this.cartService.createCart(cartDTO);
    // }
}
