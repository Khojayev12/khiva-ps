import React from "react";
export const languages = {
  uz: {
    til: "UZ",
    mainPage: "Bosh sahifa",
    yangiliklar: "Yangiliklar",
    galereya: "Galereya",
    education: "Ta'lim tizimi",
    aboutSchool: "Maktab haqida",
    contact: "Bog'lanish",
    lastnews: "So'ngi Yangiliklar",
    all: "Barchasi",
    ouHonors: "Bizning yutuqlarimiz",
    allHonors: "Barcha yutuqlar",
  },
  en: {
    til: "ENG",
    mainPage: "Main page",
    yangiliklar: "News",
    galereya: "Gallery",
    education: "Education",
    aboutSchool: "About",
    contact: "Contact",
    lastnews: "Last News",
    all: "All",
    ouHonors: "Our honors",
    allHonors: "All honors",
  },
  ru: {
    til: "RU",
  },
};

export const LangContext = React.createContext(
  languages.en // default value
);
