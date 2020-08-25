import React from "react";
import { ribs } from "../data.js";
import { checkPropTypes } from "prop-types";
import Comments from "./comments";

export default function Ribs(props) {
  let coms = props.comments.map(comment => {
    return comment;
  });
  let reverseList = coms.reverse();
  let comList = reverseList.map(comment => {
    return <Comments comment={comment} />;
  });

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>RIBS</h2>
      <div style={{ display: "table", height: "200px", width: "100%" }}>
        <div
          style={{
            display: "column",
            width: "40%",
            float: "left",
            padding: "15px"
          }}
        >
          <img src={ribs.img} alt="ribs" />
        </div>
        <div
          style={{
            display: "column",
            width: "45%",
            float: "right",
            padding: "15px"
          }}
        >
          <h3>Cooking Instructions:</h3>
          <p>{ribs.cooking}</p>
        </div>
      </div>
      <br></br>

      <form
        name={props.meatType}
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
            value={props.currentState}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>

      {comList}
    </div>
  );
}
