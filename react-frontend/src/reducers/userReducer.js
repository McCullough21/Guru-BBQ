const userReducer = (
  state = {
    user: {},
    comments: [],
    likes: [],
    error: ""
  },
  action
) => {
  switch (action.type) {
    case "LOGOUT":
      return {
        ...state,
        user: {},
        comments: [...state.comments],
        likes: [...state.likes]
      };

    case "POPULATE_USER":
      return {
        ...state,
        user: action.info,
        comments: [...state.comments],
        likes: [...state.likes],
        error: ""
      };

    case "POPULATE_COMMENTS":
      console.log(action);
      return {
        ...state,
        user: { ...state.user },
        comments: action.comments,
        likes: [...state.likes]
      };

    case "POPULATE_LIKES":
      console.log(action);
      return {
        ...state,
        user: { ...state.user },
        comments: [...state.comments],
        likes: action.likes,
        error: ""
      };
    case "ERROR":
      return {
        ...state,
        user: {},
        comments: [...state.comments],
        error: action.error
      };

    default:
      return state;
  }
};

export default userReducer;
