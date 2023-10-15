import { Box, Link } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const { t } = useTranslation();
  document.title = t("pages.dashbord.title");
  return (
    <Box>
      Dashboard
      <Link href="/add_house">add House</Link>
      <Link href="/list_houses">List Houses</Link>
      <Link href="/profil">Profil</Link>
    </Box>
  );
};

export default Dashboard;
