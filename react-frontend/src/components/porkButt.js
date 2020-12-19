import React from "react";
import { porkButt } from "../data.js";
import Comments from "./comments";
import ReactPlayer from "react-player";

export default function PorkButt(props) {
  const renderComments = () => {
    return props.comments.map(comment => {
      return <Comments comment={comment} />;
    });
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
    <>
      <div className="flex-col relative p-3 m-6">
        <h2 className="text-center font-serif font-bold text-3xl m-4">
          PORK BUTT
        </h2>
        <div className="flex absolute relative justify-center pb-2/3">
          <ReactPlayer url="https://www.youtube.com/watch?v=0DoKvxJh6aM" />
        </div>
        <div className="flex-col justify-items-center w-100% mr-10 ml-10">
          <h3 className="py-3 m-3 text-lg font-bold underline">
            Cooking Instructions
          </h3>
          <p>{porkButt.cooking}</p>
        </div>
      </div>

      <br></br>
      <h3 style={{ color: "red" }}>{props.loggedIn()}</h3>
      {/* <button onClick={() => sortComments()}>Sort Comments</button> */}
      {formDisplay()}

      {renderComments()}
    </>
  );
}
