import React from "react";
import { useTranslation } from "react-i18next";

const AddHouse = () => {
  const { t } = useTranslation();
  document.title = t("pages.add_house.title");
  return <div>{t("addHouse")}</div>;
};

export default AddHouse;
