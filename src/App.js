import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import People from "./components/People";
import PersonDetails from "./components/PersonDetails";
import Planets from "./components/Planets";
import PlanetDetails from "./components/PlanetDetails";
import Starships from "./components/Starships";
import StarshipDetails from "./components/StarshipDetails";
import Error404 from "./components/Error404";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/people" exact element={<People />} />
        <Route path="/people/:name" element={<PersonDetails />} />
        <Route path="/planets" exact element={<Planets />} />
        <Route path="/planets/:name" element={<PlanetDetails />} />
        <Route path="/starships" exact element={<Starships />} />
        <Route path="/starships/:name" element={<StarshipDetails />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
