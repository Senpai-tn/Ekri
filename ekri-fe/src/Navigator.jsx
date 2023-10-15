import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import { Box } from "@mui/material";

import Register from "./Pages/Register";

import Dashboard from "./Pages/Admin/Dashboard";
import ListHouses from "./Pages/House/ListHouses";
import AddHouse from "./Pages/House/AddHouse";
import Profil from "./Pages/Profil";
import EditProfil from "./Pages/Profil/EditProfil";
import NavBar from "./components/NavBar";
import { useTranslation } from "react-i18next";
function Navigator() {
  const { user } = useSelector((state) => state.userReducer);
  const { t } = useTranslation();
  return (
    <div>
      <BrowserRouter>
        {user ? (
          <Box>
            <NavBar />

            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/add_house" element={<AddHouse />} />
              <Route path="/list_houses" element={<ListHouses />} />
              <Route path="/profil" element={<Profil />} />
              <Route path="/edit_profil" element={<EditProfil />} />
              <Route path="*" element={<h1>404</h1>} />
            </Routes>
          </Box>
        ) : (
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<h1>404 Auth </h1>} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default Navigator;
