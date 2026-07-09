package com.rahul.service;

import org.springframework.stereotype.Service;
import org.springframework.core.io.ClassPathResource;

@Service
public class ResumeService {

	  public ClassPathResource getResume() {
	        return new ClassPathResource("static/resume/R_Resume.pdf");
	    }
}
