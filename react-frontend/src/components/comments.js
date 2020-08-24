import React from "react";

function Comments(props) {
  let date = new Date(props.comment.created_at);
  let dateStamp = date.toLocaleDateString();
  let timeStamp = date.toLocaleTimeString();
  return (
    <div>
      <ul>
        <li>
          <h3>{props.comment.user_username}</h3>{" "}
          <p>
            {dateStamp}: {timeStamp}
          </p>
          <p>{props.comment.content}</p>
        </li>
      </ul>
    </div>
  );
}

export default Comments;
