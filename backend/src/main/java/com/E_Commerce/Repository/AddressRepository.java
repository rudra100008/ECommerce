package com.E_Commerce.Repository;

import com.E_Commerce.Entity.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface AddressRepository extends JpaRepository<Address,Integer> {
    @Query("Select a FROM Address a WHERE a.user.userId =:userId")
    Optional<List<Address>> fetchAllByUserId(@Param("userId")Integer userId);
}
