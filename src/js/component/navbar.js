import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark fixed-top custom-navbar">
		<div className="container-fluid">
		  <Link to="/" className="navbar-brand">
			<img
			  src="https://cdn-icons-png.flaticon.com/128/13534/13534780.png"
			  width="50"
			  height="50"
			  className="d-inline-block align-top logo me-3"
			  alt="Home Page"
			/>
			<span className="navbar-text text-white mx-auto">STAR WARS BLOG</span>
		  </Link>
		  <form className="d-flex">
			<input
			  className="form-control me-2"
			  type="search"
			  placeholder="Buscar"
			  aria-label="Search"
			/>
			<button className="btn btn-outline-success" type="submit">
			  Buscar
			</button>
		  </form>
		  <div className="dropdown ms-5">
			<button
				className="btn btn-warning dropdown-toggle"
				type="button"
				id="dropdownMenuButton1"
				data-bs-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false"
			>
				Favoritos
			</button>
			<div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
				{/* ... Dropdown menu items will go here ... */}
			</div>
			</div>
		</div>
	  </nav>
	);
  }
  

  
  