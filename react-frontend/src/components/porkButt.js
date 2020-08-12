import React from "react";
import { porkButt } from "../data.js";

export default function PorkButt() {
  return (
    <div>
      {" "}
      PORK BUTT
      <div>
        <img src={porkButt.img} alt="porkButt" style={{ width: "300px" }} />
      </div>
    </div>
  );
}
