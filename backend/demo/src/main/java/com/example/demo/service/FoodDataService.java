package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.FoodData;
import com.example.demo.repository.FoodDataRepository;

@Service
public class FoodDataService {

    @Autowired
    FoodDataRepository foodDataRepository;

    public FoodDataService() {
        super();
    }

    public Iterable<FoodData> getFoodData() {
        return foodDataRepository.findAll();
    }

    public FoodData addFoodData(FoodData newFoodData) {
        return foodDataRepository.save(newFoodData);
    }

    public Optional<FoodData> findById(Long id) {
        return foodDataRepository.findById(id);
    }

}
