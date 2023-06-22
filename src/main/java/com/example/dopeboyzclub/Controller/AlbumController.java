package com.example.dopeboyzclub.Controller;

import com.example.dopeboyzclub.dto.AlbumDto;
import com.example.dopeboyzclub.service.AlbumService;
import naver.cloud.NcpObjectStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
public class AlbumController {

    @Autowired
    private NcpObjectStorageService storageService;

    private String bucketName="dbc-bucket";

    List<String> photoNames =new ArrayList<>();

    @Autowired
    private AlbumService albumService;

    @PostMapping("/upload")
    public List<String> photoUpload(@RequestParam List<MultipartFile> upload)
    {
        System.out.println(upload);
        //기존 버킷의 사진 지우기
        if(photoNames.size()>0)
        {
            for(String photo:photoNames)
            {
                storageService.deleteFile(bucketName, "main", photo);
            }
            photoNames.clear();
        }

        //버킷에 여러장의 사진 저장
        for(MultipartFile file:upload)
        {
            String uploadName=storageService.uploadFile(bucketName, "main", file);
            photoNames.add(uploadName);
        }
        return photoNames;
    }

    @PostMapping("/insert")
    public void insert(@RequestBody AlbumDto dto)
    {
        System.out.println("insert>>"+dto);
        //사진은 따로 저장
        String photo="";
        for(String a_name:photoNames)
        {
            photo+=a_name+",";
        }
        //마지막 컴마 제거
//        photo=photo.substring(0,photo.length()-1);
        //dto 에 저장
        dto.setA_photo(photo);
        //db insert
        albumService.insertAlbum(dto);

        photoNames.clear();
    }
}
