package com.example.demo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.FAQForm;

@Repository
public interface FAQFormRepository extends CrudRepository<FAQForm, Long> {

}
