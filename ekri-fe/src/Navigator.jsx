import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
function Navigator() {
  const { user } = useSelector((state) => state.userReducer);

  return (
    <div>
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
