package com.E_Commerce.Repository;

import com.E_Commerce.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
    Optional<User> findByEmail(String email);
    Boolean existsByEmail(String email);
    Boolean existsByUsername(String username);
    Boolean existsByPhoneNumber(String phoneNumber);
}
