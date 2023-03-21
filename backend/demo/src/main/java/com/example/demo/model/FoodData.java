package com.example.demo.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "food_data")
@EntityListeners(AuditingEntityListener.class)
public class FoodData implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    // @NotNull(message = "id may not be empty")
    Long id;

    // @NotEmpty(message = "Name may not be empty")
    @Column(unique = false)
    String food_name;

    // @NotNull(message = "calories may not be empty")
    @Column(unique = false)
    double calories;

    // @NotNull(message = "fat may not be empty")
    @Column(unique = false)
    double fat;

    // @NotNull(message = "protein may not be empty")
    @Column(unique = false)
    double protein;

    // @NotNull(message = "carbohydrates may not be empty")
    @Column(unique = false)
    double carbohydrates;

    // @NotNull(message = "sugar may not be empty")
    @Column(unique = false)
    double sugar;

    // @NotNull(message = "sodium may not be empty")
    @Column(unique = false)
    double sodium;

    // @NotNull(message = "vitamin_a may not be empty")
    @Column(unique = false)
    double vitamin_a;

    // @NotNull(message = "vitamin_c may not be empty")
    @Column(unique = false)
    double vitamin_c;

    // @NotNull(message = "potassium may not be empty")
    @Column(unique = false)
    double potassium;

    // @NotNull(message = "iron may not be empty")
    @Column(unique = false)
    double iron;

    // @NotNull(message = "serving may not be empty")
    @Column(unique = false)
    double serving;

    // @NotEmpty(message = "category may not be empty")
    @Column(unique = false)
    String category;

    // @NotEmpty(message = "Please select an expiry date")
    @Column(unique = false)
    String expDate;

    // @NotNull(message = "quantity may not be empty")
    @Column(unique = false)
    double quantity;

    // @NotNull(message = "itemgroupid may not be empty")
    @Column(unique = false)
    Long itemgroup_id;

    @Column(nullable = false, updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @CreatedDate
    private Date createdAt;

    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @LastModifiedDate
    private Date updatedAt;

    public FoodData(Long id, String food_name, double calories, double fat, double protein, double carbohydrates,
            double sugar,
            double sodium, double vitamin_a, double vitamin_c, double potassium, double iron,
            double serving,
            String category,
            String expDate, double quantity, Long itemgroup_id) {
        super();
        this.id = id;
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
        this.itemgroup_id = itemgroup_id;
    }

    public FoodData() {
        super();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getExpDate() {
        return expDate;
    }

    public void setExpDate(String expDate) {
        this.expDate = expDate;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public double getServing() {
        return serving;
    }

    public void setServing(double serving) {
        this.serving = serving;
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

    public double getQuantity() {
        return quantity;
    }

    public void setQuantity(double quantity) {
        this.quantity = quantity;
    }

    public long getItemgroupId() {
        return itemgroup_id;
    }

    public void setItemgroupId(long itemgroup_id) {
        this.itemgroup_id = itemgroup_id;
    }

}
