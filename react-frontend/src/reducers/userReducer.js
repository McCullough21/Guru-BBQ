// will fetch User from rails
// will populate store with user info and comments
// will post new comments made in MEATS Container
// will post new user on SignUp
const userReducer = (
  state = {
    user: {},
    comments: []
  },
  action
) => {
  switch (action.type) {
    case "POPULATE_USER":
      return {
        ...state,
        user: action.info,
        comments: [...state.comments]
      };

    case "POPULATE_COMMENTS":
      return {
        ...state,
        user: { ...state.user },
        comments: [action.comments]
      };

    default:
      return state;
  }
};

export default userReducer;
