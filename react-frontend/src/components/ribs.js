import React, { useState } from "react";
import { ribs } from "../data.js";
import Comments from "./comments";
import ReactPlayer from "react-player";

export default function Ribs(props) {
  const reverseList = [...props.comments].reverse();
  const [comsList, setComsList] = useState(reverseList);

  const renderComments = () => {
    return comsList.map(comment => {
      return <Comments comment={comment} key={comment.id} />;
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
    setComsList(sortedComments);
  };

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
    <>
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
      <ReactPlayer
        style={{ float: "right" }}
        url="https://www.youtube.com/watch?v=kRe0WymG1Jk"
      />
      <br></br>
      <h3 style={{ color: "red" }}>{props.loggedIn()}</h3>
      <button onClick={() => sortComments()}>Sort Comments</button>
      {formDisplay()}

      {renderComments()}
    </>
  );
}
