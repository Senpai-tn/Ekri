import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userActions } from "../../redux/actions";
import { useDispatch } from "react-redux";
import i18next from "i18next";
const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [lng, setLng] = useState(i18next.language);
  return (
    <Box>
      <Button onClick={() => navigate(-1)}>Back</Button>
      <Button
        onClick={() => {
          setLng(i18next.language === "en" ? "fr" : "en");
          i18next.changeLanguage(i18next.language === "en" ? "fr" : "en");
        }}
      >
        {lng === "en" ? "fr" : "en"}
      </Button>
      <Button
        onClick={() => {
          dispatch({ type: userActions.auth, user: null, token: null });
          navigate("/");
        }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default NavBar;
