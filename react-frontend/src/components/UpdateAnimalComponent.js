import React, { useState, useEffect } from 'react';
import AnimalService from '../AnimalService';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateAnimalComponent = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [scientificName, setScientificName] = useState('');
    const [habitat, setHabitat] = useState('');
    const [species, setSpecies] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        AnimalService.getAnimalById(id).then((res) => {
            const animal = res.data;
            setName(animal.name);
            setScientificName(animal.scientificName);
            setHabitat(animal.habitat);
            setSpecies(animal.species);
            setDescription(animal.description);
        });
    }, [id]);

    const updateAnimal = (e) => {
        e.preventDefault();
        const animal = { id, name, scientificName, habitat, species, description };
        AnimalService.updateAnimal(animal, id).then(() => {
            navigate('/animals');
        });
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Update Animal</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label> Animal Name: </label>
                                    <input placeholder="Name" name="name" className="form-control"
                                        value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label> Scientific Name: </label>
                                    <input placeholder="Scientific Name" name="scientificName" className="form-control"
                                        value={scientificName} onChange={(e) => setScientificName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                      <label> Habitat: </label>
                                      <input placeholder="habitat" name="habitat" className="form-control"
                                          value={habitat} onChange={(e) => setHabitat(e.target.value)} />
                                </div>
                                <div className="form-group">
                                       <label> Habitat: </label>
                                       <input placeholder="description" name="description" className="form-control"
                                        value={description} onChange={(e) => setDescription(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label> Species: </label>
                                    <input placeholder="Species" name="species" className="form-control"
                                        value={species} onChange={(e) => setSpecies(e.target.value)} />
                                </div>
                                <button className="btn btn-success" onClick={updateAnimal}>Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateAnimalComponent;