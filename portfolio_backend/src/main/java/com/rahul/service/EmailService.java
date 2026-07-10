package com.rahul.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import com.rahul.entity.EmailEntity;
import com.rahul.repository.EmailRepo;

@Service
public class EmailService {
	
	@Autowired
	EmailRepo repo;
	
	@Autowired
	JavaMailSender mailSender;
	
	@Value("${spring.mail.username}")
	private String username;
	
	
	@Async
	public void sendEmail(EmailEntity e) {

	    try {

	        System.out.println("Inside EmailService");

	        String info =
	                "Name: " + e.getName() + "\n" +
	                "Email: " + e.getEmail() + "\n" +
	                "Subject: " + e.getSubject() + "\n\n" +
	                "Message: " + e.getMessage();

	        String userBody =
	                "Hello " + e.getName() + ",\n\n" +
	                "Thank you for contacting me.\n" +
	                "I have received your message.\n\n" +
	                "Regards,\nRahul Pawar";

	        SimpleMailMessage mail = new SimpleMailMessage();
	        
	        mail.setFrom("rahulpawar0r@gmail.com");
	        
	        mail.setTo(e.getEmail());
	        mail.setSubject("Thank You for Contacting Rahul Pawar");
	        mail.setText(userBody);

	        System.out.println("Sending mail to user...");
	        
	        System.out.println(username);
	        
	        mailSender.send(mail);
	        System.out.println("User mail sent.");

	        SimpleMailMessage adminMail = new SimpleMailMessage();
	        adminMail.setFrom("rahulpawar0r@gmail.com");
	        adminMail.setTo("rahulpawar0r@gmail.com");
	        adminMail.setSubject("New Portfolio Contact Form Submission");
	        adminMail.setText(info);

	        System.out.println("Sending admin mail...");
	        mailSender.send(adminMail);
	        System.out.println("Admin mail sent.");

	        repo.save(e);

	        System.out.println("Saved in database.");

	    }
	    catch (Exception ex) {

	        ex.printStackTrace();

	        throw new RuntimeException(ex);

	    }

	}
	    
		
	}


