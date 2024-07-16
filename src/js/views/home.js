import React from "react";
import { Link } from "react-router-dom";
import "../../styles/ejemplo.css";




export const Home = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center body">
      <div className="card-container d-flex justify-content-center menu">
      <div className="card-item">
          <img
            src="https://i.pinimg.com/564x/52/43/80/524380e43c7bfef51d8c58183ceb8657.jpg"
            alt="Planets"
            className="card-img"
          />
          <h3 className="card-title" id="all-title">ALL STAR WARS</h3>
        </div>
        <div className="card-item">
        <Link to="/Characters">
          <img
            src="https://i.pinimg.com/564x/ef/e2/ca/efe2ca8f3a1a068406602fb224aff309.jpg"
            alt="Characters"
            className="card-img"
          />
          <h3 className="card-title" id="charac-title">Characters</h3>
          </Link>
        </div>
        
        <div className="card-item">
        <Link to="/Vehicles">
          <img
            src="https://i.pinimg.com/564x/f9/58/80/f958803d4eaf4fbde0b1e38119fe36d5.jpg"
            alt="Vehicles"
            className="card-img"
          />
          <h3 className="card-title" id="ve-title">Vehicles</h3>
          </Link>
        </div>
        <div className="card-item">
          <img
            src="https://i.pinimg.com/564x/38/d7/52/38d75212aa2bb7fe31fbe8c6ee748efa.jpg"
            alt="Planets"
            className="card-img"
          />
          <h3 className="card-title" id="pla-title">Planets</h3>
        </div>
      </div>
    </div>
  );
};