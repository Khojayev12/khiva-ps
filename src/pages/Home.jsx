import React from "react";
import SinglePage from "../components/SinglePage";
import "../styles/home.css";
import Photo from "../media/school.svg";
import PhotoEffect from "../media/backround-effect.svg";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Home() {
  return (
    <SinglePage>
      <div className="home-page">
        <div className="hero-section">
          <div className="school-images">
            <img src={Photo} alt="" className="hero-photo" />
          </div>
          <div className="hero-text">
            <img src={PhotoEffect} alt="" className="hero-photo" />
          </div>
          <div className="hero-title">
            XIVA SHAHRIDAGI PREZIDENT MAKTABINING RASMIY WEBSAYTIGA XUSH
            KELIBSIZ!
            <div className="hero-explanation">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
              architecto est odio, iure sapiente id accusantium quod inventore,
              obcaecati quam praesentium voluptates dignissimos neque fugiat
              facere delectus excepturi debitis aliquam!
            </div>
          </div>
          <div className="hero-pic-previous">
            <FiChevronLeft />
          </div>
          <div className="hero-pic-next">
            <FiChevronRight />
          </div>
        </div>
      </div>
    </SinglePage>
  );
}
