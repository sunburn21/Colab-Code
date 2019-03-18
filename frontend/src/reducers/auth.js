export default (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        id: action.user._id,
        email: action.user.email,
        username: action.user.username
      };
    case "LOGOUT":
      return {};
    default:
      return state
  }
}