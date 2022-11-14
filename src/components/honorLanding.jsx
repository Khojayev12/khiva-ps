import React from "react";

export default function honorLanding(props) {
  return (
    <div
      className="honor-landing"
      data-aos="flip-up"
      style={{ backgroundImage: "url(" + props.pic + ")" }}
    >
      <img src={props.icon} alt="" className="honor-landing-icon" />
      <div className="honor-lading-num"> {props.num} </div>
      <div className="honor-lading-text"> {props.text} </div>
    </div>
  );
}
