package com.rahul.controller;

import java.io.IOException;

import org.hibernate.cfg.Environment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rahul.service.ResumeService;

@RestController
public class ResumeController {

    @Autowired
    private ResumeService service;
    
  

    @GetMapping("/resume/download")
    public ResponseEntity<Resource> downloadResume() throws IOException {

        Resource resource = service.getResume();

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION,
                        "attachment; filename=Rahul_Pawar_Resume.pdf")
                .contentType(MediaType.APPLICATION_PDF)
                .body(resource);

    }
    
    @GetMapping("/resume/view")
    public ResponseEntity<Resource> viewResume() throws IOException {

        Resource resource = service.getResume();

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION,
                        "inline; filename=Rahul_Pawar_Resume.pdf")
                .contentType(MediaType.APPLICATION_PDF)
                .body(resource);

    }

}