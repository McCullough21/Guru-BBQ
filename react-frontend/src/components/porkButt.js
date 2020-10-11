import React, { useState } from "react";
import { porkButt } from "../data.js";
import Comments from "./comments";
import ReactPlayer from "react-player";

export default function PorkButt(props) {
  let reverseList = [...props.comments].reverse();
  const [listState, setListState] = useState(reverseList);
  let sendComments = () => {
    return listState.map(comment => {
      return <Comments comment={comment} />;
    });
  };

  const sortComments = () => {
    let sortedComments = [...props.comments].sort((a, b) => {
      if (a.user_username.toUpperCase() < b.user_username.toUpperCase()) {
        return -1;
      }
      if (a.user_username.toUpperCase() > b.user_username.toUpperCase()) {
        return 1;
      } else {
        return 0;
      }
    });
    setListState(sortedComments);
  };

  const formDisplay = () => {
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

      <div style={{ display: "table", width: "100%" }}>
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
      <ReactPlayer
        style={{ float: "right" }}
        url="https://www.youtube.com/watch?v=0DoKvxJh6aM"
      />
      <br></br>
      <h3 style={{ color: "red" }}>{props.loggedIn()}</h3>
      <button onClick={() => sortComments()}>Sort Comments</button>
      {formDisplay()}

      {sendComments()}
    </div>
  );
}
