package com.E_Commerce.Repository.AddressDataSet;

import com.E_Commerce.Entity.AddressDataSet.District;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DistrictRepository extends JpaRepository<District,Integer> {
    @Query("SELECT d FROM districts d WHERE d.province.id =:id")
    List<District> findDistrictByProvinceId(@Param("id")int provinceId);
}
