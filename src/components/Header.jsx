import React from "react";
import "../styles/header.css";
import Logo from "../media/Logo.svg";
import LangPanel from "./LangPanel";
import { LangContext } from "./LangContext";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <LangContext.Consumer>
      {(lang) => (
        <>
          <div className="header">
            <img src={Logo} alt="" className="header-logo" />
            <div className="menus">
              <div className="single-menu">
                <Link to="/" className="my-link">
                  {lang.mainPage}
                </Link>
              </div>
              <div className="single-menu">
                <Link to="/news" className="my-link">
                  Yangiliklar
                </Link>
              </div>
              <div className="single-menu">
                <Link to="/galereya" className="my-link">
                  Galereya
                </Link>
              </div>
              <div className="single-menu">
                <Link to="/education" className="my-link">
                  Ta'lim tizimi
                </Link>
              </div>
              <div className="single-menu">
                <Link to="/about" className="my-link">
                  Maktab haqida
                </Link>
              </div>
              <div className="single-menu">
                <Link to="/contact" className="my-link">
                  Bog'lanish
                </Link>
              </div>
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
