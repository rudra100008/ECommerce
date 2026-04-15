package com.E_Commerce.ServicesImpl;

import com.E_Commerce.DTO.AddressDataSet.DistrictDTO;
import com.E_Commerce.DTO.AddressDataSet.MunicipalityDTO;
import com.E_Commerce.DTO.AddressDataSet.ProvinceDTO;
import com.E_Commerce.Entity.AddressDataSet.District;
import com.E_Commerce.Entity.AddressDataSet.Municipality;
import com.E_Commerce.Entity.AddressDataSet.Province;
import com.E_Commerce.Repository.AddressDataSet.DistrictRepository;
import com.E_Commerce.Repository.AddressDataSet.ProvinceRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.ClassPathResource;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class DataImportService {
    private final ProvinceRepository provinceRepository;
    private final DistrictRepository districtRepository;
    private final ObjectMapper mapper = new ObjectMapper();

    // Generic read method - removes duplication
    private <T> List<T> readFromJson(String filePath, Class<T[]> clazz) throws IOException {
        ClassPathResource resource = new ClassPathResource(filePath);
        if (!resource.exists()) {
            throw new IOException("File not found: " + filePath);
        }
        T[] items = mapper.readValue(resource.getInputStream(), clazz);
        return List.of(items); // Immutable list
    }

    public List<Province> getProvinces() {
        try {
            log.info("Loading province data...");

            List<ProvinceDTO> enDtos = readFromJson("dataset/provinces/en.json", ProvinceDTO[].class);
            List<ProvinceDTO> npDtos = readFromJson("dataset/provinces/np.json", ProvinceDTO[].class);

            Map<Integer, String> npNameMap = npDtos.stream()
                    .collect(Collectors.toMap(
                            ProvinceDTO::getId,
                            ProvinceDTO::getName,
                            (oldVal, newVal) -> oldVal
                    ));

            List<Province> provinces = new ArrayList<>();
            for (ProvinceDTO dto : enDtos) {
                String nepaliName = npNameMap.get(dto.getId());

                Province province = Province.builder()
                        .id(dto.getId())
                        .englishName(dto.getName())
                        .nepaliName(nepaliName)
                        .districts(new ArrayList<>())
                        .build();

                provinces.add(province);
            }

            log.info("Loaded {} provinces", provinces.size());
            return provinces;

        } catch (IOException e) {
            log.error("Failed to load provinces", e);
            throw new RuntimeException("Failed to load province data", e);
        }
    }

    public List<District> getDistricts(List<Province> provinceList) {
        try {
            log.info("Loading district data...");

            List<DistrictDTO> enDistricts = readFromJson("dataset/districts/en.json", DistrictDTO[].class);
            List<DistrictDTO> npDistricts = readFromJson("dataset/districts/np.json", DistrictDTO[].class);

            Map<Integer, String> npNameMap = npDistricts.stream()
                    .collect(Collectors.toMap(DistrictDTO::getId, DistrictDTO::getName));

            Map<Integer, Province> provinceMap = provinceList.stream()
                    .collect(Collectors.toMap(Province::getId, p -> p));

            List<District> districts = new ArrayList<>();
            int skippedCount = 0;

            for (DistrictDTO dto : enDistricts) {
                Province province = provinceMap.get(dto.getProvince_id());
                if (province == null) {
                    log.warn("Skipping district {}: Province {} not found",
                            dto.getName(), dto.getProvince_id());
                    skippedCount++;
                    continue;
                }

                String nepaliName = npNameMap.get(dto.getId());

                District district = District.builder()
                        .id(dto.getId())
                        .englishName(dto.getName())
                        .nepaliName(nepaliName)
                        .province(province)
                        .municipalities(new ArrayList<>())
                        .build();

                province.getDistricts().add(district);
                districts.add(district);
            }

            if (skippedCount > 0) {
                log.warn("Skipped {} districts due to missing provinces", skippedCount);
            }

            log.info("Loaded {} districts", districts.size());
            return districts;

        } catch (IOException e) {
            log.error("Failed to load districts", e);
            throw new RuntimeException("Failed to load district data", e);
        }
    }

    public List<Municipality> getMunicipality(List<District> districts) {
        try {
            log.info("Loading municipality data...");

            List<MunicipalityDTO> enDTOs = readFromJson("dataset/municipalities/en.json", MunicipalityDTO[].class);
            List<MunicipalityDTO> npDTOs = readFromJson("dataset/municipalities/np.json", MunicipalityDTO[].class);

            Map<Integer, String> npMap = npDTOs.stream()
                    .collect(Collectors.toMap(MunicipalityDTO::getId, MunicipalityDTO::getName));

            Map<Integer, District> districtMap = districts.stream()
                    .collect(Collectors.toMap(District::getId, d -> d));

            List<Municipality> municipalities = new ArrayList<>();
            int skippedCount = 0;

            for (MunicipalityDTO dto : enDTOs) {
                District district = districtMap.get(dto.getDistrict_id());
                if (district == null) {
                    log.warn("Skipping municipality {}: District {} not found",
                            dto.getName(), dto.getDistrict_id());
                    skippedCount++;
                    continue;
                }

                String nepaliName = npMap.get(dto.getId());

                Municipality municipality = Municipality.builder()
                        .id(dto.getId())
                        .englishName(dto.getName())
                        .nepaliName(nepaliName)
                        .wards(dto.getWards())
                        .district(district)
                        .build();

                district.getMunicipalities().add(municipality);
                municipalities.add(municipality);
            }

            if (skippedCount > 0) {
                log.warn("Skipped {} municipalities due to missing districts", skippedCount);
            }

            log.info("Loaded {} municipalities", municipalities.size());
            return municipalities;

        } catch (IOException e) {
            log.error("Failed to load municipalities", e);
            throw new RuntimeException("Failed to load municipalities data", e);
        }
    }

    @Transactional
    public void importData() {
        try {
            // Check if data already exists
            if (provinceRepository.count() > 0) {
                log.info("Data already exists, skipping import");
                return;
            }

            log.info("Starting address data import...");
            long startTime = System.currentTimeMillis();

            // Import provinces
            List<Province> provinces = getProvinces();
            provinceRepository.saveAll(provinces);
            provinceRepository.flush();

            // Import districts (linked to provinces)
            List<District> districts = getDistricts(provinces);
            districtRepository.saveAll(districts);
            districtRepository.flush();

            // Import municipalities (linked to districts)
            // Municipalities are saved via cascade when districts are saved
            getMunicipality(districts);
            districtRepository.saveAll(districts); // Cascade saves municipalities

            long duration = System.currentTimeMillis() - startTime;
            log.info("Address data import completed successfully in {}ms", duration);

        } catch (Exception e) {
            log.error("Data import failed!", e);
        }
    }

    @Async("threadPoolTaskExecutor")
    public void importDataAsync(){
        try {
        importData();
    } catch (Exception e) {
        log.error("Async import failed", e);
    }
    }
}