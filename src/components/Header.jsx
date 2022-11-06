import React from "react";
import "../styles/header.css";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="menus">
          <div className="single-menu">Bosh sahifa</div>
          <div className="single-menu">Yangiliklar</div>
          <div className="single-menu">Galereya</div>
          <div className="single-menu">Ta'lim tizimi</div>
          <div className="single-menu">Maktab haqida</div>
          <div className="single-menu">Bog'lanish</div>
        </div>
        <div className="menu-panels">
            
        </div>
      </div>
      <div className="mobile-header"></div>
    </>
  );
}
