import React from "react";
export const languages = {
  uz: {
    til: "UZ",
    mainPage:"Bosh sahifa"
  },
  en: {
    til: "ENG",
    mainPage:"Main page"
  },
  ru: {
    til: "RU",
  },
};

export const LangContext = React.createContext(
  languages.en // default value
);
