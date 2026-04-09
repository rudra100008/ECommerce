package com.E_Commerce.ServicesImpl;

import com.E_Commerce.Exception.ImageInvalidException;
import com.E_Commerce.Exception.ResourceNotFoundException;
import com.E_Commerce.Services.ImageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class ImageServiceImpl implements ImageService {
    @Value("${image.upload.dir}")
    private String basicDir;
    private static  final List<String> extensions = List.of("jpg","jpeg","png","gif","jfif");
    private static final  int MAX_SIZE = 20* 1024 *1024; // 20971520 bytes into 20MB

    @Override
    public String uploadImage(String imageDir, MultipartFile imageFile)throws IOException {
        validateImage(imageFile);
        String originalFileName = imageFile.getOriginalFilename();
        if(originalFileName != null){
            originalFileName = Path.of(originalFileName).getFileName().toString();
            originalFileName = originalFileName.replaceAll("[^a-zA-Z0-9._-]", "_");
        }
        String uniqueName = UUID.randomUUID().toString() + "_" + originalFileName;
        Path basicPath = Path.of(basicDir);
        Path imageFilePath = basicPath.resolve(imageDir);
        Path  completePath = imageFilePath.resolve(uniqueName);

        Path normalizePath = completePath.normalize();
        try{
            if(!normalizePath.startsWith(basicPath.normalize())){
                throw new ImageInvalidException("Invalid file path detected");
            }
            if(!Files.exists(completePath)){
                Files.createDirectories(imageFilePath);
            }
            Files.copy(imageFile.getInputStream(),completePath, StandardCopyOption.REPLACE_EXISTING);
            return completePath.toString();
        }catch(IOException e){
            throw  new ImageInvalidException("Image failed to upload.");
        }
    }

    @Override
    public byte[] getImage(String imageDir)throws IOException {
        Path path = Path.of(imageDir);
        try {
            if (Files.exists(path)) {
                return Files.readAllBytes(path);
            }

        }catch (IOException e){
            throw new ImageInvalidException("Image not found.");
        }
        log.info("Image not found return empty array of byte");
        throw  new ResourceNotFoundException("Image not found");
    }

    @Override
    public String deleteImage(String imageDir, String imageName)throws IOException {
        Path path = Path.of(imageDir);
        if(Files.exists(path)){
            Files.delete(path);
            return "Success";
        }else{
            return "error";
        }

    }

    @Override
    public MediaType determineMediaType(String filename) {

        String lowerFileName = filename.toLowerCase();
        if(lowerFileName.endsWith(".png")) return MediaType.IMAGE_PNG;
        if(lowerFileName.endsWith(".gif")) return MediaType.IMAGE_GIF;
        if(lowerFileName.endsWith(".webp")) return MediaType.parseMediaType("image/webp");
        return MediaType.IMAGE_JPEG;
    }

    private void validateImage(MultipartFile imageFile){
        if(imageFile == null || imageFile.isEmpty()){
            throw  new ImageInvalidException("Image is required.");
        }
        String contentType = imageFile.getContentType();
        if(contentType == null || contentType.startsWith("image/")){
            throw new ImageInvalidException("Invalid file type: "+imageFile.getOriginalFilename());
        }

        if(imageFile.getSize() > MAX_SIZE){
            throw new ImageInvalidException(imageFile.getOriginalFilename() + " exceeds " + MAX_SIZE + ".");
        }

        String imageName = imageFile.getOriginalFilename();
        if(imageName == null || imageFile.isEmpty()){
            throw  new ImageInvalidException("Invalid fileName.");
        }

        String extension = imageName.substring(imageName.lastIndexOf(".")+1).toLowerCase();
        if(!extensions.contains(extension)){
            throw new ImageInvalidException("Only JPG, JPEG, PNG, JFIF and GIF files are allowed.");
        }
    }
}
