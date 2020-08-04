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

// export const fetchCats = () => {
//   return dispatch => {
//     dispatch({ type: "LOADING_CATS" });
//     fetch("https://learn-co-curriculum.github.io/cat-api/cats.json")
//       .then(response => {
//         return response.json();
//       })
//       .then(responseJSON => {
//         dispatch({ type: "ADD_CATS", cats: responseJSON.images });
//       });
//   };
// };
