package com.E_Commerce.Repository;

import com.E_Commerce.Entity.FailedRelease;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FailedReleaseRepository extends JpaRepository<FailedRelease, Integer> {
}
