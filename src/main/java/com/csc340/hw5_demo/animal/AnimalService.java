package com.csc340.hw5_demo.animal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnimalService {

    @Autowired
    private AnimalRepository animalRepository;
    public List<Animal> getAllAnimals(){
        return animalRepository.findAll();
    }

    public Animal getAnimalById(int animalId){
        return animalRepository.findById(animalId).orElse(null);
    }

    public List<Animal> getAnimalsBySpecies(String species){
        return animalRepository.findAnimalsBySpecies( species);
    }

    public List<Animal> getAnimalsByName(String name){
        return animalRepository.findAnimalsByNameMatching(name);
    }

    public void saveAnimal(Animal animal){
        animalRepository.save(animal);
    }

    public void deleteAnimalById(int animalId){
        animalRepository.deleteById(animalId);
    }




}
