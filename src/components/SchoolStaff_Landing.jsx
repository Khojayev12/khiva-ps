import React from 'react'

export default function SchoolStaff_Landing(props) {
  return (
    <div className='staff-landing' data-aos="zoom-out">
      <img src={props.pic} alt="" className="lan-staf-pic" />
      <div className="lan-staf-div">
        <div className="lan-staf-name"> {props.name} </div>
        <div className="lan-staf-status"> {props.status} </div>
      </div>
    </div>
  )
}
