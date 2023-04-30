import React, { useState, useEffect } from "react";
// npm i axios
import axios from "axios";
import Home from "./Home";
import { Link } from "react-router-dom";

function People() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((res) => {
        setPeople(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Home />
      <h1 className="headName">Characters</h1>
      <ul>
        {people.map((person) => (
          <li key={person.name}>
            <Link to={`/people/${person.name}`}>{person.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default People;
