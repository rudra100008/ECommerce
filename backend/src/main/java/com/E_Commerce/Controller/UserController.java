package com.E_Commerce.Controller;

import com.E_Commerce.DTO.CartDTO;
import com.E_Commerce.DTO.UserDTO;
import com.E_Commerce.DTO.UserResponse;
import com.E_Commerce.Entity.Address;
import com.E_Commerce.Entity.Cart;
import com.E_Commerce.Entity.Role;
import com.E_Commerce.Entity.User;
import com.E_Commerce.Exception.ResourceNotFoundException;
import com.E_Commerce.Repository.CartRepository;
import com.E_Commerce.Repository.UserRepository;
import com.E_Commerce.Securty.AuthUtils;
import com.E_Commerce.Services.CartService;
import com.E_Commerce.Services.ImageService;
import com.E_Commerce.Services.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
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

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
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

        com.E_Commerce.DTO.UserResponse userResponse = UserResponse
                .builder()
                .userId(user.getUserId())
                .email(user.getEmail())
                .username(user.getUsername())
                .fullName(user.getFullName())
                .phoneNumber(user.getPhoneNumber())
                .addressIds(getAddressIds(user.getAddresses()))
                .hasCustomImage(user.getHasCustomImage())
                .roles(getRoles(user))
                .build();


        if (Boolean.TRUE.equals(user.getHasCustomImage())) {
//
            userResponse.setProfileImageUrl(getUserImageUrl(user.getUserId()));
        } else {
//
            userResponse.setProfileImageUrl(user.getProfileImageUrl());
        }



        if (user.getCart() != null) {
            userResponse.setCartId(user.getCart().getId());
        } else {
            CartDTO cartDTO = createCart(user);
            userResponse.setCartId(cartDTO.getCartId());
        }

        return ResponseEntity.ok(userResponse);
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

    private Set<Role.RoleName> getRoles(User user){
        return user.getRoles().stream().map(Role::getRoleName).collect(Collectors.toSet());
    }
    private List<Integer> getAddressIds(List<Address> addresses){
        return addresses.stream().map(Address::getAddressId).toList();
    }
    private CartDTO createCart(User user){
        CartDTO cartDTO = CartDTO.
                builder()
                .userId(user.getUserId())
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .build();
        return this.cartService.createCart(cartDTO);
    }
}
