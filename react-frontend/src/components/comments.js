import React from "react";

function Comments(props) {
  let date = new Date(props.comment.created_at);
  let dateStamp = date.toDateString();
  return (
    <ul>
      <li>
        <h3>{props.comment.user_username}</h3> <p>{dateStamp}</p>
        <p>{props.comment.content}</p>
      </li>
    </ul>
  );
}

export default Comments;
