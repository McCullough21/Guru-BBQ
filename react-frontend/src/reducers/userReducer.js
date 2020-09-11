const userReducer = (
  state = {
    user: {},
    comments: [],
    error: ""
  },
  action
) => {
  console.log(action);
  switch (action.type) {
    case "LOGOUT":
      return {
        ...state,
        user: {},
        comments: [...state.comments]
      };

    case "POPULATE_USER":
      console.log(action.info);
      return {
        ...state,
        user: action.info,
        comments: [...state.comments],
        error: ""
      };

    case "POPULATE_COMMENTS":
      return {
        ...state,
        user: { ...state.user },
        comments: action.comments
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
