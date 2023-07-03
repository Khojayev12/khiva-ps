import React from "react";
import "../styles/header.css";
import Logo from "../media/Logo.svg";
import LangPanel from "./LangPanel";
import { LangContext } from "./LangContext";
import { Link } from "react-router-dom";

export default function Header(props) {
  const MenuClicked = () => {
    document.getElementById("my-menu-input").click()
  };
  return (
    <LangContext.Consumer>
      {(lang) => (
        <>
          <div className="header">
            <Link to="/">
              <img src={Logo} alt="" className="header-logo" />
            </Link>
            <div className="menus">
              <div className="single-menu">
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
                <Link to="/academics" className="my-link">
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
          <div className="mobile-header">
            <nav role="navigation">
              <div id="menuToggle">
                <div className="menu-panels mob-men-lang">
                  <LangPanel setLang={props.setLang} />
                </div>
                <input type="checkbox" id="my-menu-input" />
                <span></span>
                <span></span>
                <span></span>

                <ul id="menu">
                  <div className="mob-menu-logo">
                    <div className="mob-menu-log">
                      <img src={Logo} alt="" className="mob-menu-pic" />
                    </div>
                    <div className="mob-menu-logo-text">
                      Khiva
                      <br />
                      Presidential <br />
                      School
                    </div>
                  </div>
                  <div className="mob-menu-list">
                    <div
                      className="single-menu"
                      style={{ marginTop: "0px" }}
                      onClick={MenuClicked}
                    >
                      <Link to="/" className="my-link">
                        {lang.mainPage}
                      </Link>
                    </div> <br />
                    <div className="single-menu" onClick={MenuClicked}>
                      <Link to="/news" className="my-link">
                        {lang.yangiliklar}
                      </Link>
                    </div><br />
                    <div className="single-menu" onClick={MenuClicked}>
                      <Link to="/galereya" className="my-link">
                        {lang.galereya}
                      </Link>
                    </div><br />
                    <div className="single-menu" onClick={MenuClicked}>
                      <Link to="/academics" className="my-link">
                        {lang.education}
                      </Link>
                    </div><br />
                    <div className="single-menu" onClick={MenuClicked}>
                      <Link to="/about" className="my-link">
                        {lang.aboutSchool}
                      </Link>
                    </div><br />
                    <div
                      className="single-menu"
                      onClick={() => {
                        MenuClicked();
                        window.scrollTo({
                          top: document.body.scrollHeight,
                          behavior: "smooth",
                        });
                      }}
                    >
                      {lang.contact}
                    </div>
                  </div>
                </ul>
              </div>
            </nav>
          </div>
        </>
      )}
    </LangContext.Consumer>
  );
}
