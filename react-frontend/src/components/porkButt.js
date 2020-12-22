import React from "react";
import { porkButt } from "../data.js";
import Comments from "./comments";
import ReactPlayer from "react-player";

export default function PorkButt(props) {
  const renderComments = () => {
    return props.comments.map(comment => {
      return <Comments comment={comment} key={comment.id} />;
    });
  };

  const formDisplay = () => {
    if (!props.loggedIn()) {
      return (
        <div className="flex-col w-96 p-2">
          <form
            className="flex-col "
            name={props.meatType}
            onSubmit={event => {
              props.submit(event);
            }}
          >
            <h3 className="text-lg left-0 top-0 pb-2">New Comment</h3>
            <div className="flex-row relative">
              <input
                placeholder="Type comment here"
                type="text"
                onChange={event => {
                  props.input(event);
                }}
                className="w-2/3 h-20 box-content p-2 border-2 shadow"
                value={props.currentState}
              />

              <input
                className=" shadow border absolute items-center rounded p-1 ml-6 bottom-0"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>
      );
    }
  };

  return (
    <>
      <div className="flex-col relative p-3 my-6 mx-20 bg-yellow-400 bg-opacity-20">
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

      <div className="flex pt-6">
        <h3 className="font-serif ml-20 text-lg text-red-700 ml-10 pb-10">
          {props.loggedIn()}
        </h3>
        {formDisplay()}
      </div>
      <div className="flex-col ml-20 justify-items-start w-3/6">
        {renderComments()}
      </div>
    </>
  );
}
