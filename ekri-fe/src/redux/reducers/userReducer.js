import { userActions } from "../actions";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: JSON.parse(localStorage.getItem("token")) || null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActions.auth:
      localStorage.setItem("user", JSON.stringify(action.user));
      localStorage.setItem("token", JSON.stringify(action.token));
      return { ...state, user: action.user, token: action.token };
    default:
      return state;
  }
};

export default userReducer;
