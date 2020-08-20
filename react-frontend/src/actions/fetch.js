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

export const postComment = (username = "todd", id = 2, content) => {
  fetch("http://localhost:3000/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ username: username, id: id, content: content })
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
      .then(responseJSON => {
        console.log(responseJSON);
        dispatch({ type: "POPULATE_USER", info: responseJSON });
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
      .then(json => console.log(json));
  };
};
