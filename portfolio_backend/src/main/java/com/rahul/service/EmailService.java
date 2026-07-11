package com.rahul.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.rahul.entity.EmailEntity;
import com.rahul.repository.EmailRepo;

@Service
public class EmailService {

    @Autowired
    private EmailRepo repo;

    @Autowired
    private RestTemplate restTemplate;

    @Value("${brevo.api.key}")
    private String apiKey;

    private final String BREVO_URL = "https://api.brevo.com/v3/smtp/email";

    public void sendEmail(EmailEntity e) {

        try {

            System.out.println("Inside EmailService");

            // ==========================
            // Mail to User
            // ==========================

            String userBody =
                    "Hello " + e.getName() + ",\n\n" +
                    "Thank you for contacting me.\n" +
                    "I have received your message and will get back to you as soon as possible.\n\n" +
                    "Regards,\nRahul Pawar";

            sendBrevoMail(
                    e.getEmail(),
                    e.getName(),
                    "Thank You for Contacting Rahul Pawar",
                    userBody
            );

            System.out.println("User mail sent.");

            // ==========================
            // Mail to Admin
            // ==========================

            String adminBody =
                    "New Portfolio Contact Form Submission\n\n" +
                    "Name : " + e.getName() + "\n" +
                    "Email : " + e.getEmail() + "\n" +
                    "Subject : " + e.getSubject() + "\n\n" +
                    "Message:\n" +
                    e.getMessage();

            sendBrevoMail(
                    "rahulpawar0r@gmail.com",
                    "Rahul Pawar",
                    "New Portfolio Contact Form Submission",
                    adminBody
            );

            System.out.println("Admin mail sent.");

            repo.save(e);

            System.out.println("Saved in database.");

        } catch (Exception ex) {

            System.out.println(ex.getClass());

            System.out.println(ex.getMessage());

            ex.printStackTrace();

            throw ex;

        }

    }

    private void sendBrevoMail(String toEmail,
                               String toName,
                               String subject,
                               String content) {
    	
    	
    	System.out.println("========== DEBUG ==========");
    	System.out.println("API KEY: " + apiKey);
    	System.out.println("TO: " + toEmail);
    	System.out.println("SUBJECT: " + subject);
    	System.out.println("===========================");

        HttpHeaders headers = new HttpHeaders();

        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("api-key", apiKey);

        Map<String, Object> body = new HashMap<>();

        Map<String, String> sender = new HashMap<>();
        sender.put("name", "Rahul Pawar");

        // Must be verified in Brevo
        sender.put("email", "rahulpawar0r@gmail.com");

        body.put("sender", sender);

        Map<String, String> receiver = new HashMap<>();
        receiver.put("email", toEmail);
        receiver.put("name", toName);

        body.put("to", new Map[]{receiver});

        body.put("subject", subject);

        body.put("textContent", content);

        HttpEntity<Map<String, Object>> request =
                new HttpEntity<>(body, headers);

        ResponseEntity<String> response =
                restTemplate.postForEntity(
                        BREVO_URL,
                        request,
                        String.class
                );

        System.out.println(response.getStatusCode());
        System.out.println(response.getBody());

    }

}