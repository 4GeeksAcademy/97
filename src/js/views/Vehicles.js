import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Vehicles = () => {
	const { store, actions } = useContext(Context);
	const { vehicles } = store;

	return (
		<div className="container-fluid mb-5">
			<div className="row">
				<div className="card-slider inicio">
					<h2 className="mainTitle">VEHICLES</h2>
					<div className="overflow-auto">
						<div className="card-container people">
							{vehicles.map((vehicle, index) => (
								<div className="card carta" key={index}>
										<img
											src={`https://starwars-visualguide.com/assets/img/vehicles/${index + 1}.jpg`} /* Dynamic image source */
											className="card-img-top"
											alt="Vehicles"
										/>
										<div className="card-body">
											<h5 className="card-title">Name: {vehicle.result.properties.name}</h5>
											<p className="card-text">Model: {vehicle.result.properties.model}</p>
											<p className="card-text">Class: {vehicle.result.properties.vehicle_class}</p>
											<p className="card-text">Passengers: {vehicle.result.properties.passengers}</p>
										</div>
										<div className="buttons d-flex justify-content-between">
										<NavLink
											to={`/vehicleDetail/${vehicle.result._id}`}
											className="btn btn-primary"
										>
											Learn More!
										</NavLink>
											<button
												onClick={() => actions.modFavorites(vehicle)}
												className={`btn btn-warning ${store.favorites.includes(person) ? 'active' : ''}`}
											>
												<i className="fas fa-heart"></i>
											</button>
										</div>
								</div>
							))}
						</div>
						<div class="text-center">
							<Link to="/">
								<button class="btn btn-danger">Back home</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div >
	);
};

export default Vehicles;