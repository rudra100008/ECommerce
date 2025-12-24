package com.E_Commerce.DTO;

import com.E_Commerce.Entity.Role;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonIgnoreProperties("password")
public class UserResponse {
    private Integer userId;

    private String username;

    private String email;
    private String password;
    private String fullName;
    private String phoneNumber;
    private Set<Role.RoleName> roles = new HashSet<>();
    private String profileImageUrl;
    private List<Integer> addressIds;
    private Integer cartId;
    private boolean hasCustomImage;
}
