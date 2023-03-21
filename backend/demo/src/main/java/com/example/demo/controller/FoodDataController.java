package com.example.demo.controller;

import java.util.Optional;
//import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.FoodDataDTO;
import com.example.demo.model.FoodData;
import com.example.demo.repository.FoodDataRepository;
import com.example.demo.service.FoodDataService;

@RestController
public class FoodDataController {

    @Autowired
    FoodDataService foodDataService;
    FoodDataRepository foodDataRepository;

    @GetMapping("/foodlist")
    public Iterable<FoodData> getFoodData() {
        return foodDataService.getFoodData();
    }

    @PostMapping("/formsubmit")
    public ResponseEntity<Optional<FoodData>> addFoodData(@RequestBody FoodDataDTO newFoodDataDTO) {
        // if (newFoodDataDTO.getFood_name() == null || newFoodDataDTO.getCalories() ==
        // 0.0
        // || newFoodDataDTO.getf=Fat() == 0.0 || newFoodDataDTO.getprotein() == 0.0
        // || newFoodDataDTO.getcarbohydrates() == 0.0 || newFoodDataDTO.getsugar() ==
        // 0.0
        // || newFoodDataDTO.getsodium() == 0.0 || newFoodDataDTO.getvitamin_a() == 0.0
        // || newFoodDataDTO.getvitamin_c() == 0.0 || newFoodDataDTO.getpotassium() ==
        // 0.0
        // || newFoodDataDTO.getiron() == 0.0 || newFoodDataDTO.getserving() == 0.0
        // || newFoodDataDTO.getcategory() == null || newFoodDataDTO.getexpDate() ==
        // null
        // || newFoodDataDTO.getQuantity() == 0.0) {
        // return new ResponseEntity<>(Optional.ofNullable(null),
        // HttpStatus.BAD_REQUEST);
        // }
        FoodData newFoodData = new FoodData(newFoodDataDTO.getId(),
                newFoodDataDTO.getFood_name(),
                newFoodDataDTO.getCalories(),
                newFoodDataDTO.getFat(),
                newFoodDataDTO.getProtein(),
                newFoodDataDTO.getCarbohydrates(),
                newFoodDataDTO.getSugar(),
                newFoodDataDTO.getSodium(),
                newFoodDataDTO.getVitamin_a(),
                newFoodDataDTO.getVitamin_c(),
                newFoodDataDTO.getPotassium(),
                newFoodDataDTO.getIron(),
                newFoodDataDTO.getServing(),
                newFoodDataDTO.getCategory(),
                newFoodDataDTO.getExpDate(),
                newFoodDataDTO.getQuantity(),
                newFoodDataDTO.getItemgroup_id());

        foodDataService.addFoodData(newFoodData);
        return new ResponseEntity<>(Optional.ofNullable(newFoodData), HttpStatus.CREATED);
    }

    @PutMapping("/formsubmit/{id}")
    public ResponseEntity<Optional<FoodData>> updateFoodData(@PathVariable("id") Long id,
            @RequestBody FoodDataDTO newFoodDataDTO) {

        Optional<FoodData> optionalFoodData = foodDataService.findById(id);

        if (optionalFoodData.isPresent()) {

            FoodData existingFoodData = optionalFoodData.get();
            existingFoodData.setCalories(newFoodDataDTO.getCalories());
            existingFoodData.setFat(newFoodDataDTO.getFat());
            existingFoodData.setProtein(newFoodDataDTO.getProtein());
            existingFoodData.setCarbohydrates(newFoodDataDTO.getCarbohydrates());
            existingFoodData.setSugar(newFoodDataDTO.getSugar());
            existingFoodData.setSodium(newFoodDataDTO.getSodium());
            existingFoodData.setVitamin_a(newFoodDataDTO.getVitamin_a());
            existingFoodData.setVitamin_c(newFoodDataDTO.getVitamin_c());
            existingFoodData.setPotassium(newFoodDataDTO.getPotassium());
            existingFoodData.setIron(newFoodDataDTO.getIron());
            existingFoodData.setServing(newFoodDataDTO.getServing());
            existingFoodData.setCategory(newFoodDataDTO.getCategory());
            existingFoodData.setExpDate(newFoodDataDTO.getExpDate());

            FoodData updatedFoodData = foodDataService.addFoodData(existingFoodData);
            return new ResponseEntity<>(Optional.ofNullable(updatedFoodData), HttpStatus.OK);
        }

        return new ResponseEntity<>(Optional.ofNullable(null), HttpStatus.BAD_REQUEST);

    }
}
