import React from "react";
import { porkButt } from "../data.js";
import Comments from "../components/comments";

export default function PorkButt(props) {
  let coms = props.comments.map(comment => {
    return <Comments comment={comment} />;
  });
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>PORK BUTT</h2>

      <div>
        <img src={porkButt.img} alt="porkButt" style={{ width: "300px" }} />
      </div>
      {coms}
    </div>
  );
}
