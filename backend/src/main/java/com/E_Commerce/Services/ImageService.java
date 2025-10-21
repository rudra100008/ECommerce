package com.E_Commerce.Services;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.awt.*;
import java.io.IOException;

@Service
public interface ImageService {
    String uploadImage(String imageDir, MultipartFile imageFile)throws IOException;
    byte[] getImage(String imageDir)throws IOException;
    String deleteImage(String imageDir,String imageName)throws IOException;
    MediaType determineMediaType(String filename);
}
