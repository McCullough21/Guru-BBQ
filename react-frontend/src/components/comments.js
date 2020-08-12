import React from "react";

function Comments(props) {
  return (
    <ul>
      <li>
        <h3>{props.comment.user_username}</h3>
        <p>{props.comment.content}</p>
      </li>
    </ul>
  );
}

export default Comments;
