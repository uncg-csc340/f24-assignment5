package com.csc340.hw5_demo.animal;

import jakarta.persistence.*;

@Entity
@Table(name = "animals")
public class Animal {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int animalId;

    @Column(nullable = false)
    private String name;
    private String scientificName;

    @Column(nullable = false)
    private String species;

    @Column(nullable = false)
    private String habitat;

    private String description;

    public Animal() {
    }

    public Animal(String name, String scientificName, String species, String habitat, String description) {
        this.name = name;
        this.scientificName = scientificName;
        this.species = species;
        this.habitat = habitat;
        this.description = description;
    }

    public int getAnimalId() {
        return animalId;
    }

    public void setAnimalId(int animalId) {
        this.animalId = animalId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getScientificName() {
        return scientificName;
    }

    public void setScientificName(String scientificName) {
        this.scientificName = scientificName;
    }

    public String getSpecies() {
        return species;
    }

    public void setSpecies(String species) {
        this.species = species;
    }

    public String getHabitat() {
        return habitat;
    }

    public void setHabitat(String habitat) {
        this.habitat = habitat;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "Animal{" +
                "animalId=" + animalId +
                ", name='" + name + '\'' +
                ", scientificName='" + scientificName + '\'' +
                ", species='" + species + '\'' +
                ", habitat='" + habitat + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}

