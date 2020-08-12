import React from "react";
import { ribs } from "../data.js";

export default function Ribs() {
  return (
    <div>
      RIBS
      <div>
        <img src={ribs.img} alt="ribs" style={{ width: "300px" }} />
      </div>
    </div>
  );
}
