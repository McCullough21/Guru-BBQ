import React from "react";

function Comments(props) {
  return (
    <div>
      <h3>{props.comment.user_username}</h3>
      <p>{props.comment.content}</p>
    </div>
  );
}

export default Comments;
