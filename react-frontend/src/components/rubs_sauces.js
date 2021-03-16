import React, { useState } from "react";
import { bbqRubs, bbqSauces } from "../data";

function RubsSauces() {
  const [recipe, setRecipe] = useState({});

  const displayRecipe = type => {
    if (recipe.type === type) {
      return recipe.ingredients.map(ing => {
        return (
          <li className="text-sm font-serif text-left" key={ing}>
            {" "}
            - {ing}
          </li>
        );
      });
    }
  };

  const populateRubLinks = () => {
    return bbqRubs.map(rub => {
      return (
        <li key={rub.type} className="text-left text-base py-6 pl-20">
          {" "}
          <button
            className="p-2 hover:bg-red-700 hover:text-white rounded focus:ring-4 focus:ring-red-900 focus:outline-none focus:ring-opacity-50"
            onClick={() => setRecipe(rub)}
          >
            {rub.type}
          </button>
          <ul className="p-3">{displayRecipe(rub.type)}</ul>
        </li>
      );
    });
  };

  const populateSauceLinks = () => {
    return bbqSauces.map(sauce => {
      return (
        <li key={sauce.type} className="text-left text-base py-6 pl-20">
          {" "}
          <button
            className="p-2 hover:bg-red-700 hover:text-white rounded focus:ring-4 focus:ring-red-900 focus:outline-none focus:ring-opacity-50"
            onClick={() => setRecipe(sauce)}
          >
            {sauce.type}
          </button>
          <ul className="p-3">{displayRecipe(sauce.type)}</ul>
        </li>
      );
    });
  };
  return (
    <>
      <div className="bg-red-500 bg-opacity-95 my-2 mx-10">
        <h2 className="text-xl font-serif bold p-3 text-center">
          RUBS & SAUCES
        </h2>
      </div>
      <div className="flex bg-red-500 py-6 bg-opacity-20 mx-10 justify-evenly">
        <div className="flex-col w-2/4 m-2">
          <h1 className=" text-center  text-xl underline italic">Dry Rubs</h1>

          <ul className="">{populateRubLinks()}</ul>
        </div>
        <div className="flex-col w-2/4 m-2">
          <h1 className="text-center  text-xl underline italic">Sauces</h1>

          <ul className="">{populateSauceLinks()}</ul>
        </div>
      </div>
    </>
  );
}

export default RubsSauces;
