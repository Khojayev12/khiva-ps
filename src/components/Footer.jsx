import React from "react";
import "../styles/footer.css";
import Logo from "../media/Logo.svg";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
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
            <div className="foot" style={{ width: "130px" }}>
              <img src={Logo} alt="" className="foot-logo" />
              <div className="foot-name"> {lang.schoolName} </div>
            </div>

            <div className="foot" style={{ marginLeft: "70px" }}>
              <div className="foot-xarita"> {lang.xarita} </div>
              <div className="foot-xarita-block">
                <div className="foot-xaritas"> {lang.mainPage} </div>
                <div className="foot-xaritas"> {lang.news} </div>
                <div className="foot-xaritas">  {lang.galereya}  </div>
                <div className="foot-xaritas">  {lang.education}  </div>
                <div className="foot-xaritas"> {lang.aboutSchool} </div>
              </div>
            </div>

            <div className="foot" style={{ marginLeft: "79px" }}>
              <div className="foot-xarita"> {lang.contact} </div>
              <div className="foot-xarita-block">
                <div className="foot-xaritas">
                  <CiLocationOn
                    className="foot-icon"
                  />
                  Amir Temur {lang.street},
                  <br />
                  Xiva, Xorazm
                </div>
                <div className="foot-xaritas">
                  <IoCallOutline className="foot-icon" /> +998 99 999 99 99
                </div>
                <div className="foot-xaritas">
                  <SiGmail className="foot-icon" /> khivaps@gmail.com
                </div>
              </div>
            </div>

            <div className="foot" style={{ marginLeft: "109px" }}>
              <div className="foot-xarita"> {lang.social}</div>
              <div className="foot-xarita-block">
                <div className="foot-xaritas">
                  <SiTelegram className="foot-icon" /> Telegram
                </div>
                <div className="foot-xaritas">
                  <SiInstagram className="foot-icon" />
                  Instagram
                </div>
                <div className="foot-xaritas">
                  <SiFacebook className="foot-icon" /> Facebook
                </div>
                <div className="foot-xaritas">
                  <SiYoutube
                    className="foot-icon"
                  />
                  Youtube
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
