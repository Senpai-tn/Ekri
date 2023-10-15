import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./Translation/en.json";
import fr from "./Translation/fr.json";
i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
  });
console.log(i18next.t("key"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
