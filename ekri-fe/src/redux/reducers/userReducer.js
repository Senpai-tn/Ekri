const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
