import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Home from "./Home";

function StarshipDetails() {
  const { name } = useParams();
  const [starship, setStarship] = useState(null);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/starships/?search=${name}`)
      .then((res) => {
        setStarship(res.data.results[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name]);

  if (!starship) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail">
      <Home />
      <h1>Details</h1>
      <p>Name: {starship.name} </p>
      <p>Model: {starship.model}</p>
      <p>Hyperdrive Rating: {starship.hyperdrive_rating}</p>
      <p>Passengers: {starship.passengers}</p>
      <p>Max Atmosphering Speed: {starship.max_atmosphering_speed}</p>
      <p>Manufacturer: {starship.manufacturer}</p>
      <p>Crew: {starship.crew}</p>
      <p>Cargo Capacity: {starship.cargo_capacity}</p>
      <Link to="/starships">Go Back</Link>
    </div>
  );
}

export default StarshipDetails;
