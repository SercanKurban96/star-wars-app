import React, { useState, useEffect } from "react";
// npm i axios
import axios from "axios";
import { Link } from "react-router-dom";
import Home from "./Home";

function Starships() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/starships/")
      .then((res) => {
        setStarships(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Home />
      <h1 className="headName">Starships</h1>
      <ul>
        {starships.map((starship) => (
          <li key={starship.name}>
            <Link to={`/starships/${starship.name}`}>{starship.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default Starships;
