package com.rahul.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rahul.entity.EmailEntity;
import com.rahul.service.EmailService;



@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class EmailController {
	
	@Autowired
	EmailService service;
	
	@Value("${spring.mail.username}")
	private String username;
	
	@PostMapping("/sendmail")
	public ResponseEntity<String> sendEmail(@RequestBody EmailEntity mail) {
		
		
		
		System.out.println("Controller called");
		
		service.sendEmail(mail);
		
	     return ResponseEntity.ok("mail send sucessfully");
	}
	
	

}
