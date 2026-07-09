package com.rahul.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.rahul.entity.EmailEntity;
import com.rahul.repository.EmailRepo;

@Service
public class EmailService {
	
	@Autowired
	EmailRepo repo;
	
	@Autowired
	JavaMailSender mailSender;
	
	
	
	public void sendEmail(EmailEntity e) {
		
		String name = e.getName();
		String email = e.getEmail();
		String message = e.getMessage();
		
        String info= 
        		 "Name: "+e.getName()+"\n"+
                 "Email: "+e.getEmail()+"\n"+
                 "Subject: "+e.getSubject()+"\n\n"+
                 "Message: "+e.getMessage();
				
		String userBody =
                "Hello " +name + ",\n\n" +
                "Thank you for contacting me.\n" +
                "I have received your message and will get back to you soon.\n\n" +
                "Regards,\n" +
                "Rahul Pawar";
	            
	    SimpleMailMessage mail = new SimpleMailMessage();
	    SimpleMailMessage mail2 = new SimpleMailMessage();
	    
	    mail.setTo(email);
	    mail.setSubject("Thank You for Contacting Rahul Pawar");
	    mail.setText(userBody);
	    
	    mail2.setTo("rahulpawar0r@gmail.com");
	    mail2.setSubject("New Portfolio Contact Form Submission");
	    mail2.setText(info);
	    
	    mailSender.send(mail);
	    mailSender.send(mail2);
	    
	    
	    e.setEmail(email);
	    e.setMessage(message);
	    e.setName(name);
	    
	    repo.save(e);
	    
		
	}

}
