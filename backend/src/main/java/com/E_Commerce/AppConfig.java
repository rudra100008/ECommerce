package com.E_Commerce;

import com.E_Commerce.Entity.Role;
import com.E_Commerce.Entity.User;
import com.E_Commerce.Repository.RoleRepository;
import com.E_Commerce.Repository.UserRepository;
import com.E_Commerce.Services.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;

@Configuration
@RequiredArgsConstructor
@Slf4j
public class AppConfig {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    @Lazy
    private final PasswordEncoder passwordEncoder;

    @Bean
    @Transactional // Add transaction
    public CommandLineRunner init() {
        return args -> {
            initializeRolesAndAdmin();
        };
    }

    @Transactional
    public void initializeRolesAndAdmin() {
        try {
            // Initialize roles first
            Role adminRole = ensureRoleExists(Role.RoleName.ROLE_ADMIN);
            Role customerRole = ensureRoleExists(Role.RoleName.ROLE_CUSTOMER);

            // Initialize admin user
            if (userRepository.findByEmail("admin678@gmail.com").isEmpty()) {
                User admin = User.builder()
                        .email("admin678@gmail.com")
                        .password(passwordEncoder.encode("admin678"))
                        .username("admin") // Add username if required
                        .fullName("System Administrator") // Add full name
                        .roles(Set.of(adminRole))
                        .build();
                userRepository.save(admin);
                log.info("✓ Admin user created successfully");
            } else {
                log.info("Admin user already exists, skipping creation");
            }
        } catch (Exception e) {
            log.error("Failed to initialize roles and admin", e);
            throw e;
        }
    }

    private Role ensureRoleExists(Role.RoleName roleName) {
        return roleRepository.findByRoleName(roleName)
                .orElseGet(() -> {
                    Role role = Role.builder()
                            .roleName(roleName)
                            .build();
                    Role saved = roleRepository.save(role);
                    log.info("✓ Created role: {}", roleName);
                    return saved;
                });
    }
}
