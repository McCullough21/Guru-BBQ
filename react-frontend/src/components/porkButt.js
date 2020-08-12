import React from "react";
import { porkButt } from "../data.js";

export default function PorkButt() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>PORK BUTT</h2>

      <div>
        <img src={porkButt.img} alt="porkButt" style={{ width: "300px" }} />
      </div>
    </div>
  );
}
