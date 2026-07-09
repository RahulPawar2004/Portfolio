package com.rahul.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rahul.entity.EmailEntity;

public interface EmailRepo extends JpaRepository<EmailEntity, Integer> {

}
