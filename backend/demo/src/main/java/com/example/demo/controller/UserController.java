package com.example.demo.controller;

// import java.lang.StackWalker.Option;
import java.util.Optional;
//import java.util.List;

import javax.validation.ReportAsSingleViolation;

// import org.hibernate.cfg.CreateKeySecondPass;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;
import com.example.demo.dto.UserDTO;
import com.example.demo.model.User;

@RestController
public class UserController {
    @Autowired
    UserService userService;
    UserRepository userRepository;

    @GetMapping("/getuser/{id}")
    public Optional<User> getUserById(@PathVariable(value = "id") long id) {
        return userService.findByID(id);
    }

    @PostMapping("/adduser")
    public ResponseEntity<Optional<User>> addUser(@RequestBody UserDTO newUserDTO) {
        if (newUserDTO.getName() == null ||
                newUserDTO.getUsername() == null ||
                newUserDTO.getEmail() == null ||
                newUserDTO.getPassword() == null) {
            return new ResponseEntity<>(Optional.ofNullable(null), HttpStatus.BAD_REQUEST);
        }

        User newUser = new User(newUserDTO.getName(),
                newUserDTO.getUsername(),
                newUserDTO.getEmail(),
                newUserDTO.getPassword());
        userService.addUser(newUser);
        return new ResponseEntity<>(Optional.ofNullable(newUser), HttpStatus.CREATED);
    }

}
