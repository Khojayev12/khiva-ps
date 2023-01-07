import React from "react";
import "../styles/header.css";
import Logo from "../media/Logo.svg";
import LangPanel from "./LangPanel";
import { LangContext } from "./LangContext";
import { Link, useLocation } from "react-router-dom";

export default function Header(props) {
  const myRouter = useLocation();
  return (
    <LangContext.Consumer>
      {(lang) => (
        <>
          <div className="header">
            <img src={Logo} alt="" className="header-logo" />
            <div className="menus">
              <div
                className={
                  myRouter.pathname === "/"
                    ? "single-menu single-menu-active"
                    : "single-menu"
                }
              >
                <Link to="/" className="my-link">
                  {lang.mainPage}
                </Link>
              </div>
              <div className="single-menu">
                <Link to="/news" className="my-link">
                  {lang.yangiliklar}
                </Link>
              </div>
              <div className="single-menu">
                <Link to="/galereya" className="my-link">
                  {lang.galereya}
                </Link>
              </div>
              <div className="single-menu">
                <Link to="/education" className="my-link">
                  {lang.education}
                </Link>
              </div>
              <div className="single-menu">
                <Link to="/about" className="my-link">
                  {lang.aboutSchool}
                </Link>
              </div>
              <div
                className="single-menu"
                onClick={() => {
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                  });
                }}
              >
                {lang.contact}
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
