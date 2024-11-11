package com.csc340.hw5_demo.animal;

import jakarta.persistence.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/animals")
public class AnimalController {

    @Autowired
    private AnimalService animalService;

    @GetMapping("/all")
    public String getAllAnimals(Model model) {
        model.addAttribute("animalList", animalService.getAllAnimals());
        return "animal-list";
    }

    @GetMapping("/{animalId}")
    public String getOneAnimal(@PathVariable int animalId, Model model) {
        model.addAttribute("animal", animalService.getAnimalById(animalId));
        return "animal-details";
    }

    @GetMapping("/species/{species}")
    public String getAnimalsBySpecies(@PathVariable String species, Model model) {
        model.addAttribute("animalList", animalService.getAnimalsBySpecies(species));
        return "animal-list";
    }

    @GetMapping("")
    public String getAnimalsByName(@RequestParam(name = "name") String name, Model model) {
        List<Animal> animalList;
        if (name != null) {
            animalList = animalService.getAnimalsByName(name);
        } else animalList = animalService.getAllAnimals();

        model.addAttribute("animalList", animalList);
        return "animal-list";
    }

    @GetMapping("/createForm")
    public String showCreateForm(){
        return "animal-create";
    }
    @PostMapping("/new")
    public String addNewAnimal(Animal animal) {
        animalService.saveAnimal(animal);
        return "redirect:/animals/all";
    }

    @GetMapping("/update/{animalId}")
    public String showUpdateForm(@PathVariable int animalId, Model model){
        model.addAttribute("animal", animalService.getAnimalById(animalId));
        return "animal-update";
    }
    @PostMapping("/update")
    public String updateAnimal(Animal animal) {
        animalService.saveAnimal(animal);
        return "redirect:/animals/" + animal.getAnimalId();
    }

    @GetMapping("/delete/{animalId}")
    public String deleteAnimalById(@PathVariable int animalId) {
        animalService.deleteAnimalById(animalId);
        return "redirect:/animals/all";
    }


}
