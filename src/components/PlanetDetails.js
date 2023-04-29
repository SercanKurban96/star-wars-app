import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Home from "./Home";

function PlanetDetails() {
  const { name } = useParams();
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/planets/?search=${name}`)
      .then((res) => {
        setPlanet(res.data.results[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name]);

  if (!planet) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail">
      <Home />
      <h1>Details</h1>
      <p>Name: {planet.name} </p>
      <p>Diameter: {planet.diameter}</p>
      <p>Climate: {planet.climate}</p>
      <p>Gravity: {planet.gravity}</p>
      <p>Terrain: {planet.terrain}</p>
      <Link to="/planets">Go Back</Link>
    </div>
  );
}

export default PlanetDetails;
