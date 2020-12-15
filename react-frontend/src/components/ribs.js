import React from "react";
import { ribs } from "../data.js";
import Comments from "./comments";
import ReactPlayer from "react-player";

export default function Ribs(props) {
  const renderComments = () => {
    return props.comments.map(comment => {
      return <Comments comment={comment} key={comment.id} />;
    });
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
      <h2 className="text-center text-2xl m-4">RIBS</h2>
      <div className="flex">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=kRe0WymG1Jk"
          style={{
            display: "block",
            margin: "auto"
          }}
        />
      </div>
      <div className="flex-col justify-items-center w-100% mr-10 ml-10">
        <h3 className="py-3 m-3 text-lg font-bold underline">
          Cooking Instructions
        </h3>
        <p>{ribs.cooking}</p>
      </div>

      <br></br>
      <h3 style={{ color: "red" }}>{props.loggedIn()}</h3>
      {/* <button onClick={() => sortComments()}>Sort Comments</button> */}
      {formDisplay()}

      {renderComments()}
    </>
  );
}
