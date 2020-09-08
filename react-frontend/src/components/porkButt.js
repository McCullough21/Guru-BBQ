import React from "react";
import { porkButt } from "../data.js";
import Comments from "./comments";

export default function PorkButt(props) {
  let coms = props.comments.map(comment => {
    return comment;
  });
  let reverseList = coms.reverse();
  let comList = reverseList.map(comment => {
    return <Comments comment={comment} />;
  });

  let formDisplay = () => {
    if (!props.loggedIn()) {
      return (
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
      );
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>PORK BUTT</h2>

      <div style={{ display: "table", height: "200px", width: "100%" }}>
        <div
          style={{
            display: "column",
            width: "45%",
            float: "left",
            padding: "15px"
          }}
        >
          <img src={porkButt.img} alt="porkButt" style={{ maxWidth: "100%" }} />
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
          <p>{porkButt.cooking}</p>
        </div>
      </div>
      <br></br>
      <h3 style={{ color: "red" }}>{props.loggedIn()}</h3>
      {formDisplay()}

      {comList}
    </div>
  );
}
