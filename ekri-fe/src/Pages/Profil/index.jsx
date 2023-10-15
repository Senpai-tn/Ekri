import { Box, Link, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Profil = () => {
  const { user } = useSelector((state) => state.userReducer);
  const { t } = useTranslation();
  document.title = t("pages.profil.title");
  return (
    <Box>
      <Link href="/edit_profil" color={"#ff6200"}>
        Edit
      </Link>
      <Typography>{user.firstName}</Typography>
      <Typography>{user.lastName}</Typography>
      <Typography>{user.email}</Typography>
      <Typography>{user.role}</Typography>
    </Box>
  );
};

export default Profil;
