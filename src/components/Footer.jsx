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

export default function Footer() {
  return (
    <div className="footer">
      <div className="make-flex">
        <div className="foot" style={{ width: "130px" }}>
          <img src={Logo} alt="" className="foot-logo" />
          <div className="foot-name">Khiva Presidential School</div>
        </div>

        <div className="foot" style={{ marginLeft: "70px" }}>
          <div className="foot-xarita">Xarita</div>
          <div className="foot-xarita-block">
            <div className="foot-xaritas">Bosh sahifa</div>
            <div className="foot-xaritas">Yangiliklar</div>
            <div className="foot-xaritas"> Galereya </div>
            <div className="foot-xaritas"> Ta'lim tizimi </div>
            <div className="foot-xaritas">Maktab haqida</div>
          </div>
        </div>

        <div className="foot" style={{ marginLeft: "79px" }}>
          <div className="foot-xarita">Bog'lanish</div>
          <div className="foot-xarita-block">
            <div className="foot-xaritas">
              <CiLocationOn className="foot-icon"  style={{marginLeft:"10px"}} /> Amir Temur ko'chasi,
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
          <div className="foot-xarita">Ijtimoiy tarmoqlar</div>
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
              <SiYoutube className="foot-icon" style={{marginLeft:"-10px"}} /> Youtube
            </div>
          </div>
        </div>
      </div>
      <div className="foot-right">
        Copyright © 2022 Khiva Presidential School. All rights reserved.
      </div>
    </div>
  );
}
