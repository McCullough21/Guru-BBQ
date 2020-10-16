import React, { useState } from "react";
import { bbqRubs, bbqSauces } from "../data";

// need add more recipes
// need to set up links with the names of recipes
// Links render a recipe compnent that will list the recipes under the links when clicked

function RubsSauces() {
  const [recipe, setRecipe] = useState({});

  const displayRecipe = type => {
    if (recipe.type === type) {
      return recipe.ingredients.map(ing => {
        return <li key={ing}>{ing}</li>;
      });
    }
  };

  const populateRubLinks = () => {
    return bbqRubs.map(rub => {
      return (
        <li key={rub.type} style={{ padding: "15px" }}>
          {" "}
          <button
            style={{ width: "300px", height: "40px" }}
            onClick={() => setRecipe(rub)}
          >
            {rub.type}
          </button>
          <ul>{displayRecipe(rub.type)}</ul>
          {/* maybe something here t conditionally render the ingredient list when clicked */}
        </li>
      );
    });
  };

  const populateSauceLinks = () => {
    return bbqSauces.map(sauce => {
      return (
        <li key={sauce.type} style={{ padding: "15px" }}>
          {" "}
          <button
            style={{ width: "300px", height: "40px" }}
            onClick={() => setRecipe(sauce)}
          >
            {sauce.type}
          </button>
          <ul>{displayRecipe(sauce.type)}</ul>
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
