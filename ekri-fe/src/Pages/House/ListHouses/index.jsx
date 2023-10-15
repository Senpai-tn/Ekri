import React from "react";
import { useTranslation } from "react-i18next";

const ListHouses = () => {
  const { t } = useTranslation();
  document.title = t("pages.list_house.title");
  return <div>ListHouses</div>;
};

export default ListHouses;
