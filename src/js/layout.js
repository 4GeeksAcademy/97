import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/home";
import { Characters } from "./views/Characters";
import { Vehicles } from "./views/Vehicles";
import { SingleDetail } from "./views/SingleDetail";
import { VehicleDetail } from "./views/VehicleDetail";
import { Demo } from "./views/demo";
import { Single } from "./views/single"; 

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";


// Create your first component
const Layout = () => {
  // The basename is used when your project is published in a subdirectory and not in the root of the domain
  // You can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div className="mainContainer">
      <BrowserRouter basename={basename}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/Characters" element={<Characters />} />
            <Route path="/Vehicles" element={<Vehicles />} />
            <Route path="/SingleDetail/:_id" element={<SingleDetail />} />
            <Route path="/VehicleDetail/:_id" element={<VehicleDetail />} />
            <Route path="/single/:theid" element={<Single />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
