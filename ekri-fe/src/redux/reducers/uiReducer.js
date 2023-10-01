import uiActions from "../actions/uiActions";

const initialState = {
  isDark: true,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case uiActions.changeTheme:
      return { ...state, isDark: action.isDark };
    default:
      return state;
  }
};

export default uiReducer;
