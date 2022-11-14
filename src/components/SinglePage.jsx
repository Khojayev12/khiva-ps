import React from "react";
import "../styles/header.css";

export default function SinglePage(props) {
  return (
    <div
      style={{ marginTop: "57px" }}
      className="single-page"
      onLoad={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      {props.children}
    </div>
  );
}
