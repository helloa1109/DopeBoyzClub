package com.example.dopeboyzclub.mapper;

import com.example.dopeboyzclub.dto.AlbumDto;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AlbumMapper {

    public void insertAlbum(AlbumDto dto);
}
