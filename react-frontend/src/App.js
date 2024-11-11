import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnimalListComponent from './components/AnimalListComponent';
import AnimalDetailsComponent from './components/AnimalDetailsComponent';
import AddAnimalComponent from './components/AddAnimalComponent';
import UpdateAnimalComponent from './components/UpdateAnimalComponent';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/" element={<AnimalListComponent />} />
                    <Route path="/animals" element={<AnimalListComponent />} />
                    <Route path="/:animalId" element={<AnimalDetailsComponent />} />
                    <Route path="/add-animal" element={<AddAnimalComponent />} />
                    <Route path="/update-animal/:id" element={<UpdateAnimalComponent />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;