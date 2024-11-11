import React, { useState, useEffect } from 'react';
import AnimalService from '../AnimalService';
import { Link } from 'react-router-dom';

const AnimalListComponent = () => {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        AnimalService.getAnimals().then((res) => {
            setAnimals(res.data);
        });
           document.title = 'Animal List';
    }, []);

    return (
        <div>
            <h2 className="text-center">Animal List</h2>
            <div className="row">
                <Link to="/add-animal" className="btn btn-outline-primary">Add Animal</Link>
            </div>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Animal ID</th>
                            <th>Name</th>
                            <th>Scientific Name</th>
                            <th>Species</th>
                        </tr>
                    </thead>
                    <tbody>
                        {animals.map(animal => (
                                <tr key={animal.animalId}>
                                <td><Link to={`/${animal.animalId}`}>{animal.animalId}</Link></td>
                                <td>{animal.name}</td>
                                <td>{animal.scientificName}</td>
                                <td>{animal.species}</td>
                                <td>
                                    <Link to={`/update-animal/${animal.animalId}`} className="btn btn-info">Update</Link>
                                    <button className="btn btn-danger" onClick={() => AnimalService.deleteAnimal(animal.animalId)
                                    .then(() => setAnimals(animals.filter(s => s.animalId !== animal.animalId)))}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AnimalListComponent;