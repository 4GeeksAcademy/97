import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

const initialState = {
    properties: {
        model: "",
		vehicle_class: "",
		manufacturer: "",
		cost_in_credits: "",
		length: "",
		crew: "",
		passengers: "",
		max_atmosphering_speed: "",
		cargo_capacity: "",
		consumables: "",
		films:"",
		pilots:"",
		created: "",
		edited: "",
		name: "",
		url: "",
    
    },
    _id: "",
    uid:""
    
}


export const SingleDetail = () => {
    const { store } = useContext(Context);
    const { vehicles } = store;
    const { _id } = useParams();
    const [vehicle, setVehicle] = useState(initialState);

    useEffect(() => {
    
        const fetchVehicle = async () => {
            const foundVehicle = vehicles.find(newVehicle => newVehicle.result._id === _id);
            if (foundVehicle) {
                setVehicle(foundVehicle.result);
            }
        }
        fetchVehicle();
    }, [_id, vehicles]);


    return (
        <>
           <div className="container mt-5">
            {vehicle.properties.name && (
                <div className="row justify-content-center">
                <div className="col-md-8 shadow p-3 mb-5 bg-dark text-white rounded card-style single">
                    <div className="row">
                    {/* Image section */}
                    <div className="col-md-4 mb-3 text-center">
                        <img
                        src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
                        className="img-fluid rounded vehicle-image"
                        alt="Vehicle"
                        />
                    </div>

                    {/* Character information section */}
                    <div className="col-md-8 vehicle-info">
                        <div className="card-body">
                        <h3 className="card-title text-center mt-3">{vehicle.properties.name}</h3>
                        <p className="card-text">
                            "Star Wars es una saga épica de ciencia ficción que transcurre en una galaxia muy, muy lejana, donde coexisten humanos y diversas razas alienígenas. La historia gira en torno a una antigua guerra entre los Jedi, guerreros que utilizan la Fuerza para el bien, y los Sith, señores oscuros que se sirven del Lado Oscuro de la Fuerza."
                        </p>

                        {/* Character details */}
                        <div className="row">
                            <div className="col-6">
                            <h4>Properties:</h4>
                            <ul className="list-group">
                                <li className="list-group-item">
                                <span className="fw-bold">Model:</span> {vehicle.properties.model}
                                </li>
                                <li className="list-group-item">
                                <span className="fw-bold">Class:</span> {vehicle.properties.vehicle_class}
                                </li>
                                <li className="list-group-item">
                                <span className="fw-bold">Manufacturer:</span> {vehicle.properties.manufacturer}
                                </li>
                                <li className="list-group-item">
                                <span className="fw-bold">Cost:</span> {vehicle.properties.cost_in_credits} credits
                                </li>
                                <li className="list-group-item">
                                <span className="fw-bold">Length:</span> {vehicle.properties.length} kg
                                </li>
                                <li className="list-group-item">
                                <span className="fw-bold">Crew:</span> {vehicle.properties.crew} kg
                                </li>
                            </ul>
                            </div>
                            <div className="col-6">
                            <h4>Identifying Features:</h4>
                            <ul className="list-group">
                                <li className="list-group-item">
                                <span className="fw-bold">Passengers:</span> {vehicle.properties.passengers} kg
                                </li>
                                <li className="list-group-item">
                                <span className="fw-bold">Speed:</span> {vehicle.properties.max_atmosphering_speed}
                                </li>
                                <li className="list-group-item">
                                <span className="fw-bold">Capacity:</span> {vehicle.properties.cargo_capacity}
                                </li>
                                <li className="list-group-item">
                                <span className="fw-bold">Consumables:</span> {vehicle.properties.consumables}
                                </li>
                                <li className="list-group-item">
                                <span className="fw-bold">Created:</span> {vehicle.properties.created}
                                </li>
                                <li className="list-group-item">
                                <span className="fw-bold">Edited:</span> {vehicle.properties.edited}
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="text-center back">
                    <Link to="/Characters">
                        <button className="btn btn-danger">Back</button>
                    </Link>
                </div>
                </div>
            )}
            </div>
        </>
    )
};

export default SingleDetail;