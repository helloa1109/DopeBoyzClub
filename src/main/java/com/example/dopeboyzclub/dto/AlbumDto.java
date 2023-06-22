package com.example.dopeboyzclub.dto;

import lombok.Data;
import org.apache.ibatis.type.Alias;

@Data
@Alias("AlbumDto")
public class AlbumDto {
    private int num;
    private String a_name;
    private String a_photo;
}
