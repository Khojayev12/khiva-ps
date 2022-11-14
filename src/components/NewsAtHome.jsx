import React from 'react'
import "../styles/home.css"

export default function NewsAtHome(props) {
  return (
    <div className='news-at-home' style={{width: props.width}} data-aos="fade-up" >
      <img src={props.pic} alt="" className="news-at-home-pic" />
      <div className="news-home-text">
        {props.text}
      </div>
    </div>
  )
}
