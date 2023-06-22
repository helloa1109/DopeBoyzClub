package com.example.dopeboyzclub.service;

import com.example.dopeboyzclub.dto.AlbumDto;
import com.example.dopeboyzclub.mapper.AlbumMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AlbumService implements AlbumServiceInter{

    private AlbumMapper albumMapper;

    @Override
    public void insertAlbum(AlbumDto dto) {
        albumMapper.insertAlbum(dto);
    }
}
