package com.E_Commerce.ServicesImpl;

import com.E_Commerce.Exception.ImageValidException;
import com.E_Commerce.Services.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.UUID;

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
        String uniqueName = UUID.randomUUID().toString() + "_" + imageFile.getOriginalFilename();
        Path basicPath = Path.of(basicDir);
        Path imageFilePath = basicPath.resolve(imageDir);
        Path  completePath = imageFilePath.resolve(uniqueName);

        try{
            if(!Files.exists(completePath)){
                Files.createDirectories(imageFilePath);
            }
            Files.copy(imageFile.getInputStream(),completePath, StandardCopyOption.REPLACE_EXISTING);
            return completePath.toString();
        }catch(IOException e){
            throw  new ImageValidException("Image failed to upload.");
        }
    }

    @Override
    public byte[] getImage(String imageDir, String imageName)throws IOException {
        Path path = Path.of(imageDir);
        try {
            if (Files.exists(path)) {
                return Files.readAllBytes(path);
            }
        }catch (IOException e){
            throw new ImageValidException("Image not found.");
        }
        return new byte[0];
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

    private void validateImage(MultipartFile imageFile){
        if(imageFile == null || imageFile.isEmpty()){
            throw  new ImageValidException("Image is required.");
        }
        if(imageFile.getSize() > MAX_SIZE){
            throw new ImageValidException(imageFile.getOriginalFilename() + " exceeds " + MAX_SIZE + ".");
        }
        String imageName = imageFile.getOriginalFilename();
        String extension = imageName.substring(imageName.lastIndexOf(".")+1).toLowerCase();
        if(!extensions.contains(extension)){
            throw new ImageValidException("Only JPG, JPEG, PNG, JFIF and GIF files are allowed.");
        }
    }
}
