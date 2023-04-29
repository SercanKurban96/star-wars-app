import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Home from "./Home";

function PersonDetails() {
  const { name } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/?search=${name}`)
      .then((res) => {
        setPerson(res.data.results[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name]);

  if (!person) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail">
      <Home />
      <h1>Details</h1>
      <p>Name: {person.name}</p>
      <p>Birth Year: {person.birth_year}</p>
      <p>Gender: {person.gender}</p>
      <p>Height: {person.height}</p>
      <p>Mass: {person.mass}</p>
      <Link to="/people">Go Back</Link>
    </div>
  );
}

export default PersonDetails;
