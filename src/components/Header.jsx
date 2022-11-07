import React from "react";
import "../styles/header.css";
import Logo from "../media/Logo.svg";
import LangPanel from "./LangPanel";
import { LangContext } from "./LangContext";

export default function Header(props) {
  return (
    <LangContext.Consumer>
      {(lang) => (
        <>
          <div className="header">
            <img src={Logo} alt="" className="header-logo" />
            <div className="menus">
              <div className="single-menu">{lang.mainPage}</div>
              <div className="single-menu">Yangiliklar</div>
              <div className="single-menu">Galereya</div>
              <div className="single-menu">Ta'lim tizimi</div>
              <div className="single-menu">Maktab haqida</div>
              <div className="single-menu">Bog'lanish</div>
            </div>
            <div className="menu-panels">
              <LangPanel setLang={props.setLang} />
            </div>
          </div>
          <div className="mobile-header"></div>
        </>
      )}
    </LangContext.Consumer>
  );
}
