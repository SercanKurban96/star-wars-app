import React from "react";
import Home from "./Home";

function Error404() {
  return (
    <div className="error">
      <Home />
      <h1>404</h1>
      <h2>Not Found!</h2>
    </div>
  );
}

export default Error404;
