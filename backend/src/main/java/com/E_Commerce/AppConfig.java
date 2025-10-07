package com.E_Commerce;

import com.E_Commerce.Entity.Role;
import com.E_Commerce.Entity.User;
import com.E_Commerce.Repository.RoleRepository;
import com.E_Commerce.Repository.UserRepository;
import com.E_Commerce.Services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Set;

@Configuration
@RequiredArgsConstructor
public class AppConfig {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    @Lazy
    private final PasswordEncoder passwordEncoder;
    @Bean
    public CommandLineRunner init(){
        return args -> {


            if(userRepository.findByEmail("admin678@gmail.com").isEmpty()){
                Role adminRole = roleRepository.findByRoleName(Role.RoleName.ROLE_ADMIN)
                        .orElseGet(()-> roleRepository.save(Role.builder().roleName(Role.RoleName.ROLE_ADMIN).build()));
                roleRepository.findByRoleName(Role.RoleName.ROLE_CUSTOMER)
                        .orElseGet(()-> roleRepository.save(Role.builder().roleName(Role.RoleName.ROLE_CUSTOMER).build()));

                User admin = User.builder()
                        .email("admin678@gmail.com")
                        .password(passwordEncoder.encode("admin678"))
                        .roles(Set.of(adminRole))
                        .build();
                userRepository.save(admin);
            }
        };
    }
}
