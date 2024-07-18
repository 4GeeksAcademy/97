import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import "../../styles/fondo.css";




export const Home = () => {
  return (
    <div className="container">
    <div class="death-star">
      <div class="wrapper">
        <div class="lng"></div>
        <div class="lng"></div>
        <div class="lng"></div>
        <div class="lng"></div>
        <div class="trench"></div>
        <div class="weapon"></div>
      </div>
    </div>
    <div className="container-fluid d-flex justify-content-center align-items-center body">
      <div className="card-container d-flex justify-content-center menu">
      <div className="card-container cont1">
      <div className="card-item">
      <Link to="/Demo">
          <img
            src="https://i.pinimg.com/564x/52/43/80/524380e43c7bfef51d8c58183ceb8657.jpg"
            alt="AllStarWars"
            className="card-img"
          />
          <h3 className="card-title" id="all-title">ALL STAR WARS</h3> 
      </Link>
        </div>
        <div className="card-item">
        <Link to="/Characters">
          <img
            src="https://i.pinimg.com/236x/34/23/67/342367a7b8d597f80f3a8135f50c7941.jpg"
            alt="Characters"
            className="card-img"
          />
          <h3 className="card-title" id="charac-title">Characters</h3>
          </Link>
        </div>
        </div>
        <div className="card-container cont2">
        <div className="card-item">
        <Link to="/Transports">
          <img
            src="https://i.pinimg.com/236x/36/ca/03/36ca039c817707060177a4584ea20dc0.jpg"
            alt="Vehicles"
            className="card-img"
          />
          <h3 className="card-title" id="ve-title">Vehicles</h3>
          </Link>
        </div>
        <div className="card-item">
        <Link to="/Worlds">
          <img
            src="https://i.pinimg.com/564x/38/d7/52/38d75212aa2bb7fe31fbe8c6ee748efa.jpg"
            alt="Planets"
            className="card-img"
          />
          <h3 className="card-title" id="pla-title">Planets</h3>
          </Link>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};