package com.csc340.hw5_demo.animal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/animals")
@CrossOrigin(origins = "http://localhost:3000")
public class AnimalController {

    @Autowired
    private AnimalService animalService;

    @GetMapping("/all")
    public List<Animal> getAllAnimals() {
        return animalService.getAllAnimals();
    }

    @GetMapping("/{animalId}")
    public Animal getOneAnimal(@PathVariable int animalId) {
        return animalService.getAnimalById(animalId);
    }

    @GetMapping("/species/{species}")
    public List<Animal> getAnimalsBySpecies(@PathVariable String species) {
        return animalService.getAnimalsBySpecies(species);
    }

    @GetMapping("")
    public List<Animal> getAnimalsByName(@RequestParam(name = "name") String name) {
        if (name != null) {
            return animalService.getAnimalsByName(name);
        } else return animalService.getAllAnimals();
    }

    @PostMapping("/new")
    public List<Animal> addNewAnimal(@RequestBody Animal animal) {
        animalService.saveAnimal(animal);
        return animalService.getAllAnimals();
    }

    @PutMapping("/update/{animalId}")
    public Animal updateAnimal(@PathVariable int animalId, @RequestBody Animal animal) {
        animal.setAnimalId(animalId);
        animalService.saveAnimal(animal);
        return animalService.getAnimalById(animalId);
    }

    @DeleteMapping("/delete/{animalId}")
    public List<Animal> deleteAnimalById(@PathVariable int animalId) {
        animalService.deleteAnimalById(animalId);
        return animalService.getAllAnimals();
    }


}
