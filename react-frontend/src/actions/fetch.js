export const fetchComments = () => {
  return dispatch => {
    dispatch({ type: "LOADING_COMMENTS" });
    fetch("http://localhost:3000/comments")
      .then(response => {
        return response.json();
      })
      .then(responseJSON => {
        console.log(responseJSON);
        dispatch({ type: "POPULATE_COMMENTS", comments: responseJSON });
      });
  };
};

export const postComment = (username, id, content, meat) => {
  console.log(username, id, content);
  fetch("http://localhost:3000/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      username: username,
      id: id,
      content: content,
      meatType: meat
    })
  });
};

export const fetchLikes = () => {
  fetch("http://localhost3000/likes")
    .then(response => response.json())
    .then(likeData => {
      console.log(likeData);
      dispatch({ type: "POPULATE_LIKES", likes: likeData });
    });
};

export const newLike = (userId, commentId) => {
  fetch("http://localhost:3000/likes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      userId: userId,
      commentId: commentId
    })
  });
};

export const userLogin = (username, password) => {
  console.log(username);
  console.log(password);
  return dispatch => {
    fetch(`http://localhost:3000/users/${username}/${password}`)
      .then(response => {
        return response.json();
      })
      .then(json => {
        dispatch({ type: "POPULATE_USER", info: json });
      })
      .catch(error => {
        dispatch({ type: "ERROR", error: "Username or password incorrect" });
      });
  };
};

export const userSignup = (username, password) => {
  return dispatch => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ username: username, password: password })
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        if (json.id) {
          dispatch({ type: "POPULATE_USER", info: json });
        } else dispatch({ type: "ERROR", error: "Username is already taken" });
      });
  };
};
