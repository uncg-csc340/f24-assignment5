package com.csc340.hw5_demo.animal;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnimalRepository extends JpaRepository<Animal, Integer> {
    List<Animal> findAnimalsBySpecies(String species);

    @Query(value = "select * from animals a where a.name like %?1%", nativeQuery = true)
    List<Animal> findAnimalsByNameMatching(String name);
}
