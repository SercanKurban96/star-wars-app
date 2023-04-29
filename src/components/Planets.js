import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Home from "./Home";

function Planets() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/planets/")
      .then((res) => {
        setPlanets(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Home />
      <h1 className="headName">Planets</h1>
      <ul>
        {planets.map((planet) => (
          <li key={planet.name}>
            <Link to={`/planets/${planet.name}`}>{planet.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default Planets;
