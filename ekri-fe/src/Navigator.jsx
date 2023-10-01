import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import uiActions from "./redux/actions/uiActions";
function Navigator() {
  const { user } = useSelector((state) => state.userReducer);
  const { isDark } = useSelector((state) => state.uiReducer);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        background: isDark ? "#000" : "#fff",
        color: isDark ? "#fff" : "#000",
        minHeight: "100vh",
        padding: 30,
      }}
    >
      <button
        onClick={() => {
          dispatch({ type: uiActions.changeTheme, isDark: !isDark });
        }}
      >
        {isDark ? "Change to light" : "change to dark"}
      </button>
      <BrowserRouter>
        {user ? (
          <Routes>
            <Route path="/" element={<h1>Hello</h1>} />
            <Route path="/a" element={<h1>Hello</h1>} />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/a" element={<h1>Register</h1>} />
            <Route path="*" element={<h1>404 Auth </h1>} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default Navigator;
