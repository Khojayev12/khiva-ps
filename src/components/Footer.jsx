import React from "react";
import "../styles/footer.css";
import Logo from "../media/Logo.svg";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import {
  SiGmail,
  SiTelegram,
  SiInstagram,
  SiFacebook,
  SiYoutube,
} from "react-icons/si";
import { LangContext } from "./LangContext";

export default function Footer() {
  return (
    <LangContext.Consumer>
      {(lang) => (
        <div className="footer">
          <div className="make-flex">
            <div className="foot width-130">
              <img src={Logo} alt="" className="foot-logo" />
              <div className="foot-name"> {lang.schoolName} </div>
            </div>

            <div className="foot left-70-mar">
              <div className="foot-xarita"> {lang.xarita} </div>
              <div className="foot-xarita-block">
                <div className="foot-xaritas">
                  <Link to="/" className="my-link">
                    {lang.mainPage}
                  </Link>
                </div>
                <div className="foot-xaritas">
                  <Link to="/news" className="my-link">
                    {lang.yangiliklar}
                  </Link>
                </div>
                <div className="foot-xaritas">
                  <Link to="/galereya" className="my-link">
                    {lang.galereya}
                  </Link>
                </div>
                <div className="foot-xaritas">
                  <Link to="/education" className="my-link">
                    {lang.education}
                  </Link>
                </div>
                <div className="foot-xaritas">
                  <Link to="/about" className="my-link">
                    {lang.aboutSchool}
                  </Link>
                </div>
              </div>
            </div>

            <div className="foot left-79-mar">
              <div className="foot-xarita"> {lang.contact} </div>
              <div className="foot-xarita-block">
                <div className="foot-xaritas">
                  <CiLocationOn className="foot-icon" />
                  Amir Temur {lang.street},
                  <br />
                  <span style={{marginLeft:"30px"}} >Xiva, Xorazm</span>
                </div>
                <div className="foot-xaritas">
                  <IoCallOutline className="foot-icon" /> +998 99 999 99 99
                </div>
                <div className="foot-xaritas">
                  <SiGmail className="foot-icon" /> khivaps@gmail.com
                </div>
              </div>
            </div>

            <div className="foot left-109-mar">
              <div className="foot-xarita"> {lang.social}</div>
              <div className="foot-xarita-block">
                <div className="foot-xaritas">
                  <a
                    href="https://t.me/PSinKhiva"
                    target="_blank"
                    rel="noreferrer"
                    className="my-link"
                  >
                    <SiTelegram className="foot-icon" />
                    Telegram
                  </a>
                </div>
                <div className="foot-xaritas">
                  <a
                    href="https://www.instagram.com/psinkhiva/"
                    target="_blank"
                    rel="noreferrer"
                    className="my-link"
                  >
                    <SiInstagram className="foot-icon" />
                    Instagram
                  </a>
                </div>
                <div className="foot-xaritas">
                  <a
                    href="https://t.me/PSinKhiva"
                    target="_blank"
                    rel="noreferrer"
                    className="my-link"
                  >
                    <SiFacebook className="foot-icon" />
                    Facebook
                  </a>
                </div>
                <div className="foot-xaritas">
                  <a
                    href="https://t.me/PSinKhiva"
                    target="_blank"
                    rel="noreferrer"
                    className="my-link"
                  >
                    <SiYoutube className="foot-icon" />
                    Youtube
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="foot-right">
            Copyright © 2022 Khiva Presidential School. All rights reserved.
          </div>
        </div>
      )}
    </LangContext.Consumer>
  );
}
