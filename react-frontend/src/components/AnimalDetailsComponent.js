import React, { useState, useEffect } from 'react';
import AnimalService from '../AnimalService';
import { Link, useNavigate, useParams } from 'react-router-dom';


const AnimalDetailsComponent = () => {
    const { animalId } = useParams();
    const [animal, setAnimal] = useState([]);

    useEffect(() => {
        document.title = 'Animal Details';
        AnimalService.getAnimalById(animalId).then((res) => {
            setAnimal(res.data);
        });
    }, [animalId]);

    return (
        <div>
            <h2 className="text-center">Animal Details</h2>
            <Link to="/add-animal" className="btn btn-outline-primary">Add Animal</Link>
            <div className="card text-center">
            <div className="card-header">{animal.animalId}  </div>
            <div className="card-body">
                 <h5 className="card-title">{animal.name}</h5>
                 <p className="card-text" >{animal.scientificName}</p>
                 <p className="card-text" >{animal.habitat}</p>
                 <p className="card-text" >{animal.species}</p>
                 <Link to={`/update-animal/${animal.animalId}`} className="btn btn-outline-info">Update</Link>
                 </div>
                    <div className="card-footer text-body-secondary">
                     <Link to="/animals" className="card-link">Animals List</Link>
                    </div>
                </div>
        </div>
    );
};



export default AnimalDetailsComponent;