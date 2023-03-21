package com.example.demo.dto;

public class FoodDataDTO {

    Long id;
    Long itemgroup_id;
    String food_name;
    double calories;
    double fat;
    double protein;
    double carbohydrates;
    double sugar;
    double sodium;
    double vitamin_a;
    double vitamin_c;
    double potassium;
    double iron;
    double serving;
    String category;
    String expDate;
    double quantity;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getItemgroup_id() {
        return itemgroup_id;
    }

    public void setItemgroup_id(Long itemgroup_id) {
        this.itemgroup_id = itemgroup_id;
    }

    public String getFood_name() {
        return food_name;
    }

    public void setFood_name(String food_name) {
        this.food_name = food_name;
    }

    public double getCalories() {
        return calories;
    }

    public void setCalories(double calories) {
        this.calories = calories;
    }

    public double getFat() {
        return fat;
    }

    public void setFat(double fat) {
        this.fat = fat;
    }

    public double getProtein() {
        return protein;
    }

    public void setProtein(double protein) {
        this.protein = protein;
    }

    public double getCarbohydrates() {
        return carbohydrates;
    }

    public void setCarbohydrates(double carbohydrates) {
        this.carbohydrates = carbohydrates;
    }

    public double getSugar() {
        return sugar;
    }

    public void setSugar(double sugar) {
        this.sugar = sugar;
    }

    public double getSodium() {
        return sodium;
    }

    public void setSodium(double sodium) {
        this.sodium = sodium;
    }

    public double getVitamin_a() {
        return vitamin_a;
    }

    public void setVitamin_a(double vitamin_a) {
        this.vitamin_a = vitamin_a;
    }

    public double getVitamin_c() {
        return vitamin_c;
    }

    public void setVitamin_c(double vitamin_c) {
        this.vitamin_c = vitamin_c;
    }

    public double getPotassium() {
        return potassium;
    }

    public void setPotassium(double potassium) {
        this.potassium = potassium;
    }

    public double getIron() {
        return iron;
    }

    public void setIron(double iron) {
        this.iron = iron;
    }

    public double getServing() {
        return serving;
    }

    public void setServing(double serving) {
        this.serving = serving;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getExpDate() {
        return expDate;
    }

    public void setExpDate(String expDate) {
        this.expDate = expDate;
    }

    public double getQuantity() {
        return quantity;
    }

    public void setQuantity(double quantity) {
        this.quantity = quantity;
    }

    public FoodDataDTO(Long id, Long itemgroup_id, String food_name, double calories, double fat, double protein,
            double carbohydrates, double sugar, double sodium, double vitamin_a, double vitamin_c, double potassium,
            double iron, double serving, String category, String expDate, double quantity) {
        this.id = id;
        this.itemgroup_id = itemgroup_id;
        this.food_name = food_name;
        this.calories = calories;
        this.fat = fat;
        this.protein = protein;
        this.carbohydrates = carbohydrates;
        this.sugar = sugar;
        this.sodium = sodium;
        this.vitamin_a = vitamin_a;
        this.vitamin_c = vitamin_c;
        this.potassium = potassium;
        this.iron = iron;
        this.serving = serving;
        this.category = category;
        this.expDate = expDate;
        this.quantity = quantity;
    }

}
