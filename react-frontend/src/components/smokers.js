import React from "react";
import { offSet, drumSmoker } from "../data";

function Smokers() {
  return (
    <div style={{ display: "table", height: "300px", width: "100%" }}>
      <div
        style={{
          display: "column",
          width: "45%",
          float: "left",
          padding: "15px"
        }}
      >
        <h2>{offSet.type}</h2>
        <img src={offSet.img} alt="offSet" style={{ width: "300px" }} />
        <h4>{offSet.description}</h4>
      </div>

      <div
        style={{
          display: "column",
          width: "45%",
          float: "left",
          padding: "15px"
        }}
      >
        <h2>{drumSmoker.type}</h2>
        <img src={drumSmoker.img} alt="offSet" style={{ width: "300px" }} />
        <h4>{drumSmoker.description}</h4>
      </div>
    </div>
  );
}

export default Smokers;
