import React from "react";
import "../../styles/ejemplo.css";
import { CardPrincipal } from "../component/CardPrincipal";
import { CardPeople } from "../component/cardPeople";


export const Home = () => {
  return (
    <div className="text-center mt-5 mainContainer">
      <CardPrincipal></CardPrincipal>
      
    </div>
  );
};