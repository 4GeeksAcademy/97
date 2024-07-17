import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/worldsD.css";

const initialState = {
    properties: {
        diameter: "",
		rotation_period: "",
		orbital_period: "",
		gravity: "",
		population: "",
		climate: "",
		terrain: "",
		surface_water: "",
		created: "",
		edited: "",
		name: "",
		url: "",
    
    },
    _id: "",
    uid:"",
    index:0,
    
}


export const WorldsDetail = () => {
    const { store } = useContext(Context);
    const { planets } = store;
    const { _id } = useParams();
    const [planet, setPlanet] = useState(initialState);
    const customIndices = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    useEffect(() => {
    
        const fetchPlanet = async () => {
            const foundPlanet = planets.find(newPlanet => newPlanet.result._id === _id);
            if (foundPlanet) {
                foundPlanet.result.index = planets.indexOf(foundPlanet);
                setPlanet(foundPlanet.result);
            }
        }
        fetchPlanet();
    }, [_id, planets]);


    return (
        <>
           <div className="container mt-5">
            {planet.properties.name && (
                <div className="row justify-content-center">
                <div className="col-md-8 shadow p-3 mb-5 bg-dark text-white rounded card-style single">
                    <div className="row">
                    {/* Image section */}
                    <div className="col-md-4 mb-3 text-center imagen">
                        <img
                        src={`https://starwars-visualguide.com/assets/img/planets/${customIndices[planet.index]}.jpg`}
                        className="img-fluid rounded vehicle-image"
                        alt="Planet"
                        />
                    </div>

                    {/* Vehicle information section */}
                    <div className="col-md-8 planet-info">
                        <div className="card-body">
                        <h3 className="card-title text-center mt-3">{planet.properties.name}</h3>
                        <p className="card-text">
                            "Star Wars es una saga épica de ciencia ficción que transcurre en una galaxia muy, muy lejana, donde coexisten humanos y diversas razas alienígenas. La historia gira en torno a una antigua guerra entre los Jedi, guerreros que utilizan la Fuerza para el bien, y los Sith, señores oscuros que se sirven del Lado Oscuro de la Fuerza."
                        </p>

                        {/* Character details */}
                        <div className="row">
                            <div className="col-6">
                            <h4>Physical Properties:</h4>
                            <ul className="list-group">
                                <li className="list-group-item">
                                <span className="fw-bold">Diameter:</span> {planet.properties.diameter}
                                </li>
                                <li className="list-group-item">
                                <span className="fw-bold">Rotation:</span> {planet.properties.rotation_period}
                                </li>
                                <li className="list-group-item">
                                <span className="fw-bold">Orbital period:</span> {planet.properties.orbital_period}
                                </li>
                                <li className="list-group-item">
                                <span className="fw-bold">Gravity:</span> {planet.properties.gravity}
                                </li>
                                <li className="list-group-item">
                                <span className="fw-bold">Population:</span> {planet.properties.population}
                                </li>
                            </ul>
                            </div>
                            <div className="col-6">
                            <h4>Identifying Features:</h4>
                            <ul className="list-group">
                                <li className="list-group-item">
                                <span className="fw-bold">Climate:</span> {planet.properties.climate}
                                </li>
                                <li className="list-group-item">
                                <span className="fw-bold">Terrain:</span> {planet.properties.terrain}
                                </li>
                                <li className="list-group-item">
                                <span className="fw-bold">Surface water:</span> {planet.properties.surface_water}
                                </li>
                                <li className="list-group-item">
                                <span className="fw-bold">Created:</span> {planet.properties.created}
                                </li>
                                <li className="list-group-item">
                                <span className="fw-bold">Edited:</span> {planet.properties.edited}
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="text-center back">
                    <Link to="/Worlds">
                        <button className="btn btn-danger">Back</button>
                    </Link>
                </div>
                </div>
            )}
            </div>
        </>
    )
};

export default WorldsDetail;