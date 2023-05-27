import React from "react";

export default function SchoolStaff_Landing(props) {
  return (
    <>
      <div className="staff-landing" data-aos="zoom-in">
        <div className="staf-pic-div">
          <img src={props.pic} alt="" className="lan-staf-pic" />
          <div className="staff-pic-shadow"></div>
        </div>
        <div className="staf-info-div">
          <div className="staff-name"> {props.name} </div>
          <div className="staff-status"> {props.status} </div>
          <div className="staff-contsct"> {props.contact} </div>
          <div className="staff-text"> {props.text} </div>
        </div>
      </div>
      <hr className="staff-info-line" />
    </>
  );
}
