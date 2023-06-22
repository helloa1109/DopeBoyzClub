package com.example.dopeboyzclub;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"com.*","naver.cloud"})
@MapperScan({"com.example.dopeboyzclub.mapper"})
public class DopeboyzclubApplication {

    public static void main(String[] args) {
        SpringApplication.run(DopeboyzclubApplication.class, args);
    }

}
