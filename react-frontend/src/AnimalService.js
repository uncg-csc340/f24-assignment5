import axios from 'axios';

const ANIMAL_API_BASE_URL = "http://localhost:8080/animals";

class AnimalService {
    getAnimals() {
        return axios.get(ANIMAL_API_BASE_URL+"/all");
    }

    createAnimal(animal) {
        return axios.post(ANIMAL_API_BASE_URL+"/new", animal);
    }

    getAnimalById(animalId) {
        return axios.get(`${ANIMAL_API_BASE_URL}/${animalId}`);
    }

    updateAnimal(animal, animalId) {
        return axios.put(`${ANIMAL_API_BASE_URL}/update/${animalId}`, animal);
    }

    deleteAnimal(animalId) {
        return axios.delete(`${ANIMAL_API_BASE_URL}/delete/${animalId}`);
    }
}

export default new AnimalService();