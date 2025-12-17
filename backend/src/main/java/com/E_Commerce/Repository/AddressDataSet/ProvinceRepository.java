package com.E_Commerce.Repository.AddressDataSet;

import com.E_Commerce.Entity.AddressDataSet.Province;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProvinceRepository extends JpaRepository<Province,Integer> {
}
