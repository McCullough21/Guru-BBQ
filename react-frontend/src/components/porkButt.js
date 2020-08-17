import React from "react";
import { porkButt } from "../data.js";
import Comments from "./comments";

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
      <form
        onSubmit={event => {
          props.submit(event);
        }}
      >
        <label>
          New Comment <br></br>
          <input
            type="text"
            style={{ height: "120px", width: "300px" }}
            onChange={event => {
              props.input(event);
            }}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>

      {coms}
    </div>
  );
}
