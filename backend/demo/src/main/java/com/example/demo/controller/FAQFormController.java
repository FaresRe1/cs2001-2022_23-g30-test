package com.example.demo.controller;

// import java.lang.StackWalker.Option;
import java.util.Optional;
//import java.util.List;

// import org.hibernate.cfg.CreateKeySecondPass;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.FAQFormDTO;
import com.example.demo.model.FAQForm;
import com.example.demo.repository.FAQFormRepository;
import com.example.demo.service.FAQFormService;

@RestController
public class FAQFormController {

    @Autowired
    FAQFormService faqFormService;
    FAQFormRepository faqFormRepository;

    @PostMapping("/faqformsubmit")
    public ResponseEntity<Optional<FAQForm>> addFAQForm(@RequestBody FAQFormDTO newFaqFormDTO) {
        if (newFaqFormDTO.getName() == null || newFaqFormDTO.getEmail() == null ||
                newFaqFormDTO.getMessage() == null) {

            return new ResponseEntity<>(Optional.ofNullable(null),
                    HttpStatus.BAD_REQUEST);
        }

        FAQForm newFAQForm = new FAQForm(
                newFaqFormDTO.getName(),
                newFaqFormDTO.getEmail(),
                newFaqFormDTO.getMessage());

        faqFormService.addFAQForm(newFAQForm);
        return new ResponseEntity<>(Optional.ofNullable(newFAQForm), HttpStatus.CREATED);
    }
}
