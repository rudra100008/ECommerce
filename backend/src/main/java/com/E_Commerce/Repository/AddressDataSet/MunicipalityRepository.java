package com.E_Commerce.Repository.AddressDataSet;

import com.E_Commerce.Entity.AddressDataSet.Municipality;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MunicipalityRepository extends JpaRepository<Municipality,Integer> {
    @Query("SELECT m FROM municipalities m WHERE m.district.id =:id")
    List<Municipality> findMunicipalityByDistrict(@Param("id")int districtId);
}
