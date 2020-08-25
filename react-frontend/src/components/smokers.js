import React from "react";
import { offSet } from "../data";

function Smokers() {
  return (
    <div>
      <h2>{offSet.type}</h2>
      <img src={offSet.img} alt="offSet" style={{ width: "300px" }} />
      <h4>{offSet.description}</h4>
    </div>
  );
}

export default Smokers;
