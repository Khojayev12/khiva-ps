import React from "react";
export const languages = {
  uz: {
    til: "UZ",
    mainPage: "Bosh sahifa",
    yangiliklar: "Yangiliklar",
    galereya: "Galereya",
    education: "Ta'lim",
    aboutSchool: "Maktab haqida",
    contact: "Bog'lanish",
    lastnews: "So'ngi Yangiliklar",
    all: "Barchasi",
    ouHonors: "Bizning yutuqlarimiz",
    allHonors: "Barcha yutuqlar",
    schoolName:"Xiva shahridagi Prezident maktabi",
    xarita:"Xarita",
    street:"ko'cha",
    social:"Ijtimoiy tarmoq",

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
    schoolName:"Presidential School in Khiva",
    xarita:"Map",
    street:"street",
    social:"Social media",
  },
  ru: {
    til: "RU",
  },
};

export const LangContext = React.createContext(
  languages.en // default value
);
