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

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>PORK BUTT</h2>

      <div>
        <img src={porkButt.img} alt="porkButt" style={{ width: "300px" }} />
        <h3>Cooking Instructions:</h3>
        <p>{porkButt.cooking}</p>
      </div>
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
