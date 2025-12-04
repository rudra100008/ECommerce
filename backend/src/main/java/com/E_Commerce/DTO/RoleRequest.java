package com.E_Commerce.DTO;

import com.E_Commerce.Entity.Role;
import lombok.Data;

@Data
public class RoleRequest {
    private Role.RoleName roleName;
}
