import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const { people, vehicles, planets } = store;
	const customIndices = [4, 6, 7, 8, 14, 16, 18, 19, 20, 24];
	const customIndices2 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

	return (
		<div className="container-fluid mb-5">
			<div className="row">
				<div className="card-slider inicio">
					<h2 className="mainTitle">CHARACTERS</h2>
					<div className="overflow-auto">
						<div className="card-container people">
							{people.map((person, index) => (
								<div className="card carta" key={index}>
										<img
											src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`} /* Dynamic image source */
											className="card-img-top"
											alt="Character"
										/>
										<div className="card-body">
											<h5 className="card-title">Name: {person.result.properties.name}</h5>
											<p className="card-text">Gender: {person.result.properties.gender}</p>
											<p className="card-text">Birth_year: {person.result.properties.birth_year}</p>
											<p className="card-text">Mass: {person.result.properties.mass}</p>
										</div>
										<div className="buttons d-flex justify-content-between">
										<NavLink
											key={person.result._id}
											to={`/singleDetail/${person.result._id}`}
											className="btn btn-primary"
										>
											Learn More!
										</NavLink>
											<button
												onClick={() => actions.modFavorites(person)}
												className={`btn btn-warning ${store.favorites.includes(person) ? 'active' : ''}`}
											>
												<i className="fas fa-heart"></i>
											</button>
										</div>
								</div>
							))}
						</div>
						<hr />
						<div className="card-slider">
							<h2 className="mainTitle">VEHICLES</h2>
						<div className="overflow-auto">
						<div className="card-container people">
							{vehicles.map((vehicle, index) => (
								<div className="card carta" key={index}>
										<img
											src={`https://starwars-visualguide.com/assets/img/vehicles/${customIndices[index]}.jpg`} /* Dynamic image source */
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
											key={vehicle.result._id}
											to={`/vehicleDetail/${vehicle.result._id}`}
											className="btn btn-primary"
										>
											Learn More!
										</NavLink>
											<button
												onClick={() => actions.modFavorites(vehicle)}
												className={`btn btn-warning ${store.favorites.includes(vehicle) ? 'active' : ''}`}
											>
												<i className="fas fa-heart"></i>
											</button>
										</div>
								</div>
							))}
						</div>
						</div>
						</div>
						<hr />
						<div className="card-slider">
							<h2 className="mainTitle">PLANETS</h2>
						<div className="overflow-auto">
						<div className="card-container planets">
							{planets.map((planet, index) => (
								<div className="card carta" key={index}>
										<img
											src={`https://starwars-visualguide.com/assets/img/planets/${customIndices2[index]}.jpg`} /* Dynamic image source */
											className="card-img-top"
											alt="Planets"
										/>
										<div className="card-body">
											<h5 className="card-title">Name: {planet.result.properties.name}</h5>
											<p className="card-text">Diameter: {planet.result.properties.diameter}</p>
                                            <p className="card-text">Gravity: {planet.result.properties.gravity}</p>
                                            <p className="card-text">Climate: {planet.result.properties.climate}</p>
										</div>
										<div className="buttons d-flex justify-content-between">
										<NavLink
						
											to={`/worldsDetail/${planet.result._id}`}
											className="btn btn-primary"
										>
											Learn More!
										</NavLink>
											<button
												onClick={() => actions.modFavorites(planet)}
												className={`btn btn-warning ${store.favorites.includes(planet) ? 'active' : ''}`}
											>
												<i className="fas fa-heart"></i>
											</button>
										</div>
								</div>
							))}
						</div>
						</div>
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