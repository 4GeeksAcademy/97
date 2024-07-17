import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/world.css";

export const Worlds = () => {
	const { store, actions } = useContext(Context);
	const { planets } = store;
	const customIndices = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

	return (
		<div className="container-fluid mb-5">
			<div className="row">
				<div className="card-slider inicio">
					<h2 className="mainTitle">Planets</h2>
					<div className="overflow-auto">
						<div className="card-container people">
							{planets.map((planet, index) => (
								<div className="card carta" key={index}>
										<img
                                            src={`https://starwars-visualguide.com/assets/img/planets/${customIndices[index]}.jpg`}
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

export default Worlds;