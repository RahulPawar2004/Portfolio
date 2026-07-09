package com.rahul.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rahul.entity.ResumeEntity;

public interface ResumeRepo extends JpaRepository<ResumeEntity, Integer> {

}
