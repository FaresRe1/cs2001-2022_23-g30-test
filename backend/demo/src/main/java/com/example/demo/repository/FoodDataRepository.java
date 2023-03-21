package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.FoodData;

@Repository
public interface FoodDataRepository extends CrudRepository<FoodData, Long> {
    Optional<FoodData> findById(Long id);
}
