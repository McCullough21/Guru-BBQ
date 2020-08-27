import React from "react";
import { bbqRub, bbqSauce } from "../data";

function Recipes() {
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
          <h1>{bbqRub.type}</h1>
          <br></br>
          <h3>Igredients:</h3>
          <ul>
            {bbqRub.ingredients.map(ing => {
              return <li>{ing}</li>;
            })}
          </ul>
        </div>
        <div
          style={{
            display: "column",
            width: "45%",
            float: "right",
            padding: "15px"
          }}
        >
          <h1>{bbqSauce.type}</h1>
          <br></br>
          <h3>Igredients:</h3>
          <ul>
            {bbqSauce.ingredients.map(ing => {
              return <li>{ing}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Recipes;
