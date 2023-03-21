package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.FAQForm;
import com.example.demo.repository.FAQFormRepository;

@Service
public class FAQFormService {

    @Autowired
    FAQFormRepository faqFormRepository;

    public FAQFormService() {
        super();
    }

    public Iterable<FAQForm> getFAQForm() {
        return faqFormRepository.findAll();
    }

    public void addFAQForm(FAQForm newFAQForm) {
        faqFormRepository.save(newFAQForm);
    }

    public Optional<FAQForm> findByID(Long id) {
        return faqFormRepository.findById(id);
    }
}
