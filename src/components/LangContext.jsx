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
    schoolName: "Xiva shahridagi Prezident maktabi",
    xarita: "Xarita",
    street: "ko'cha",
    social: "Ijtimoiy tarmoq",
    our_goal: "Bizning maqsadimiz",
    news_and_events: "Yangiliklar",
    more: "Ko'proq",
    edu_tizim: "Ta'lim tizimi",
    umumiy: "Umumiy",
    quick_facts: "Qisqacha statistika",
    school_staff:"Maktab Ma'muriyati"
  },
  en: {
    til: "ENG",
    mainPage: "Main page",
    yangiliklar: "News",
    galereya: "Gallery",
    education: "Academics",
    aboutSchool: "About",
    contact: "Contact",
    lastnews: "Last News",
    all: "All",
    ouHonors: "Our honors",
    allHonors: "All honors",
    schoolName: "Presidential School in Khiva",
    xarita: "Map",
    street: "street",
    social: "Social media",
    our_goal: "Our goal",
    news_and_events: "News & Events",
    more: "More",
    edu_tizim: "Education system",
    umumiy: "Overall",
    quick_facts: "Quick facts about u",
    school_staff:"School Administration"
  },
  ru: {
    til: "RU",
  },
};

export const LangContext = React.createContext(
  languages.en // default value
);
