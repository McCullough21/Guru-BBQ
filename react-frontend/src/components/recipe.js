import React from "react";

export function Recipe(props) {
  console.log(props.recipe);
  return (
    <ul>
      {props.recipe.map(ing => {
        return <li key={ing}>{ing}</li>;
      })}
    </ul>
  );
}
