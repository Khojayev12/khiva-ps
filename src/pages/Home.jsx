import React, { useState } from "react";
import SinglePage from "../components/SinglePage";
import "../styles/home.css";
import Photo from "../media/school.svg";
import Photo2 from "../media/school2.jpg";
import Photo3 from "../media/school3.jpg";
import PhotoEffect from "../media/backround-effect.svg";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import NewsAtHome from "../components/NewsAtHome";
export default function Home() {
  //const Images = [Photo, Photo2, Photo3];
  const [pic, setPic] = useState(0);

  const changeNextPic = () => {
    if (pic < 2) {
      setPic(pic + 1);
    } else {
      setPic(0);
    }
  };

  const changePreviousPic = () => {
    if (pic > 0) {
      setPic(pic - 1);
    } else {
      setPic(2);
    }
  };

  return (
    <SinglePage>
      <div className="home-page">
        <div className="hero-section">
          <div className="school-images">
            <img
              src={Photo}
              alt=""
              className={pic === 0 ? "hero-photo" : "hero-photo-hide"}
            />
            <img
              src={Photo2}
              alt=""
              className={pic === 1 ? "hero-photo" : "hero-photo-hide"}
            />
            <img
              src={Photo3}
              alt=""
              className={pic === 2 ? "hero-photo" : "hero-photo-hide"}
            />
          </div>
          <div className="hero-text">
            <img src={PhotoEffect} alt="" className="hero-photo2" />
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
          <div className="hero-pic-previous" onClick={changePreviousPic}>
            <FiChevronLeft />
          </div>
          <div className="hero-pic-next">
            <FiChevronRight onClick={changeNextPic} />
          </div>
        </div>

        <div className="news-section">
          <div className="news-section-header">
            <span className="news-section-text">SO'NGI YANGILIKLAR</span>
            <button className="barchasi-btn">BARCHASI</button>
          </div>
          <div className="news-section-yangilikla">
            <div className="half-news">
              <NewsAtHome
                pic={Photo}
                width="100%"
                text="iserbgiuergbiuserhfuisegisheioubsie ubviserbvisuebrvisuebrvius briguseriub"
              />
            </div>
            <div className="half-news" style={{ position: "relative" }}>
              <div style={{ height: "50%", marginBottom: "10px" }}>
                <NewsAtHome
                  pic={Photo}
                  width="98.2%"
                  text="iserbgiuergbiuserhfuisegisheiou bsieubviserbvisuebrvisu ebrviusbriguseriub"
                />
              </div>
              <div
                style={{
                  height: "calc(50% - 10px)",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div className="half-news">
                  <NewsAtHome
                    pic={Photo}
                    width="99%"
                    text="iserbgiuer gbiuserhfuise gisheioubsieubvis erbvisuebrvisuebrv iusbriguseriub"
                  />
                </div>
                <div className="half-news">
                  <NewsAtHome
                    pic={Photo}
                    width="99%"
                    text="is erbgiuergbiuserhfuisegisheioubsieubvis erbvisuebrvi suebrviusb riguseriu b"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SinglePage>
  );
}
