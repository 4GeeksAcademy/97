import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/navbar.css";


export const Navbar = () => {
	const { store, actions } = useContext(Context)
	const navigate = useNavigate();

	const handleOnClick = (item) => {
		console.log(item)
		//Aca se debe hacer un switch para navegar dependiendo de lo que halla como item
		if (item.result.properties.url.includes("people"))
			navigate(`/characterdetail/${item.result._id}`)

		if (item.result.properties.url.includes("vehicle"))
			navigate(`/vehicledetail/${item.result._id}`)

		if (item.result.properties.url.includes("planet"))
			navigate(`/planetdetail/${item.result._id}`)

	}

	return (
		<nav className="navbar navbar-light bg-warning fixed-top custom-navbar">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand">
				<img
					src="https://cdn-icons-png.flaticon.com/128/13534/13534780.png"
					width="50"
					height="50"
					className="d-inline-block align-top logo me-3"
					alt="Home Page"
				/>
				<span className="navbar-text text-dark mx-auto">STAR WARS BLOG</span>
				</Link>

				<div className="d-flex">
				<button className="btn btn-primary me-2">Favorites: {store.favorites.length}</button>
				<div className="dropdown">
					<button
					className="btn btn-danger dropdown-toggle"
					type="button"
					id="dropdownMenuButton1"
					data-bs-toggle="dropdown"
					aria-expanded="false"
					>
					</button>
					<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
					{store.favorites.map((item, index) => (
						<li key={index} className="d-flex px-2">
						<a className="dropdown-item" onClick={() => handleOnClick(item)}>{item.result.properties.name}</a>
						<span onClick={() => actions.modFavorites(item)}><i className="far fa-trash-alt"></i></span>
						</li>
					))}
					</ul>
				</div>
				</div>
			</div>
			</nav>
	);
};

export default Navbar;
