import React from "react";
import { bbqRubs, bbqSauces } from "../data";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// need add more recipes
// need to set up links with the names of recipes
// Links render a recipe compnent that will list the recipes under the links when clicked

function RubsSauces() {
  const populateRubLinks = () => {
    return bbqRubs.map(rub => {
      return (
        <li key={rub.type}>
          {" "}
          <Link to="/Recipes">
            <button>{rub.type}</button>
          </Link>
        </li>
      );
    });
  };

  const populateSauceLinks = () => {
    return bbqSauces.map(sauce => {
      return (
        <li key={sauce.type}>
          {" "}
          <Link to="/Recipes">
            <button>{sauce.type}</button>
          </Link>
        </li>
      );
    });
  };
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>RUBS & SAUCES</h2>
      <div style={{ display: "table", height: "300px", width: "100%" }}>
        <div
          style={{
            display: "column",
            width: "40%",
            float: "left",
            padding: "15px"
          }}
        >
          <h1>Dry Rubs</h1>
          <br></br>
          <ul className="rubs">{populateRubLinks()}</ul>
        </div>
        <div
          style={{
            display: "column",
            width: "45%",
            float: "right",
            padding: "15px"
          }}
        >
          <h1>Sauces</h1>
          <br></br>
          <ul className="sauces">{populateSauceLinks()}</ul>
        </div>
      </div>
    </div>
  );
}

export default RubsSauces;
