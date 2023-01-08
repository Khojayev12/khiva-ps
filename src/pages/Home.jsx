import React, { useState } from "react";
import SinglePage from "../components/SinglePage";
import "../styles/home.css";
import Photo from "../media/school.svg";
import Photo2 from "../media/school2.jpg";
import Photo3 from "../media/school3.jpg";
import Stem from "../media/s.svg";
import sTem from "../media/t.svg";
import stEm from "../media/e.svg";
import steM from "../media/m.svg";
import STEM from "../media/stem.svg";

import GroupIcon from "../media/Group.svg";
import TeacherIcon from "../media/Teacher.svg";
import HomeIcon from "../media/Home.svg";
import FinishIcon from "../media/Finish.svg";
import PhotoEffect from "../media/backround-effect.svg";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import NewsAtHome from "../components/NewsAtHome";
import HonorLanding from "../components/honorLanding";
import GalereyaLanding from "../components/GalereyaLanding";
import SchoolStaffLanding from "../components/SchoolStaff_Landing";
import Footer from "../components/Footer";
import { LangContext } from "../components/LangContext";

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
      <LangContext.Consumer>
        {(lang) => (
          <>
            <div className="home-page">
              <div className="hero-section">
                <div className="school-images">
                  <img
                    src={Photo}
                    alt=""
                    className={pic === 0 ? "hero-photo" : ( pic === 1? "hero-photo-hide":"hero-photo-prepare")}
                  />
                  <img
                    src={Photo2}
                    alt=""
                    className={pic === 1 ? "hero-photo" : ( pic === 2? "hero-photo-hide":"hero-photo-prepare")}
                  />
                  <img
                    src={Photo3}
                    alt=""
                    className={pic === 2 ? "hero-photo" : ( pic === 0? "hero-photo-hide":"hero-photo-prepare")}
                  />
                </div>
                <div className="hero-text">
                  <img src={PhotoEffect} alt="" className="hero-photo2" />
                </div>
                <div className="hero-title">
                  XIVA SHAHRIDAGI PREZIDENT MAKTABINING RASMIY WEBSAYTIGA XUSH
                  KELIBSIZ!
                  <div className="hero-explanation">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eius architecto est odio, iure sapiente id accusantium quod
                    inventore, obcaecati quam praesentium voluptates dignissimos
                    neque fugiat facere delectus excepturi debitis aliquam!
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
                  <span className="news-section-text"> {lang.lastnews} </span>
                  <button
                    className="barchasi-btn"
                    style={{ marginRight: "30px" }}
                  >
                    {lang.all}
                  </button>
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

              <div className="honors-section">
                <div className="honors-title">{lang.ouHonors}</div>
                <div className="honor-landing-blocks">
                  <HonorLanding
                    pic={Photo}
                    num="48"
                    text="Bitiruvchi"
                    icon={GroupIcon}
                  />
                  <HonorLanding
                    pic={Photo}
                    num="48"
                    text="Bitiruvchi"
                    icon={TeacherIcon}
                  />
                  <HonorLanding
                    pic={Photo}
                    num="48"
                    text="Bitiruvchi"
                    icon={HomeIcon}
                  />
                  <HonorLanding
                    pic={Photo}
                    num="48"
                    text="Bitiruvchi"
                    icon={FinishIcon}
                  />
                </div>
                <div className="main-honors">
                  <div className="main-honor">
                    <div className="main-honor-pic">
                      <img src={Photo} alt="" className="main-honor-photo" />
                    </div>
                    <div className="main-honor-text">
                      <div className="main-honor-title">Masharipov Azizbek</div>
                      <div className="main-honor-definition">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Culpa architecto neque voluptates quis, inventore
                        accusantium eligendi suscipit modi non
                      </div>
                    </div>
                  </div>
                  <div className="main-honor">
                    <div className="main-honor-pic">
                      <img src={Photo} alt="" className="main-honor-photo" />
                    </div>
                    <div className="main-honor-text">
                      <div className="main-honor-title">Abror Niyazmetov</div>
                      <div className="main-honor-definition">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Culpa architecto neque voluptates quis, inventore
                        accusantium eligendi suscipit modi non
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="barchasi-btn all-honors-btn"
                  style={{ width: "250px" }}
                >
                  {lang.allHonors}
                </button>
              </div>

              <div className="galereya">
                <div className="galereya-header">
                  <div className="galereya-title">Galereya</div>
                  <button className="barchasi-btn all-galereya">
                    Barchasi
                  </button>
                </div>
                <div className="galereya-show">
                  <div className="galereya-big">
                    <GalereyaLanding width="100%" height="100%" pic={Photo} />
                  </div>
                  <div className="galereya-small">
                    <GalereyaLanding width="100%" height="33%" pic={Photo} />
                    <GalereyaLanding width="100%" height="33%" pic={Photo} />
                    <GalereyaLanding width="100%" height="33%" pic={Photo} />
                  </div>
                </div>
              </div>

              <div className="school-staff">
                <div className="staff-title">MAKTAB MA'MURIYATI</div>
                <div className="staff-flex">
                  <SchoolStaffLanding
                    pic={Photo}
                    name="Ism Familiya"
                    status="Lavozim"
                  />
                  <SchoolStaffLanding
                    pic={Photo}
                    name="Ism Familiya"
                    status="Lavozim"
                  />
                </div>

                <div className="staff-flex">
                  <SchoolStaffLanding
                    pic={Photo}
                    name="Ism Familiya"
                    status="Lavozim"
                  />
                  <SchoolStaffLanding
                    pic={Photo}
                    name="Ism Familiya"
                    status="Lavozim"
                  />
                  <SchoolStaffLanding
                    pic={Photo}
                    name="Ism Familiya"
                    status="Lavozim"
                  />
                </div>
                <div className="staff-flex">
                  <button className="barchasi-btn all-staff">
                    Barcha xodimlar
                  </button>
                </div>
              </div>

              <div className="educatoin">
                <div className="edu-title">Ta'lim tizimi</div>
                <img src={Stem} alt="" className="stemS" />
                <img src={sTem} alt="" className="stemT" />
                <img src={stEm} alt="" className="stemE" />
                <img src={steM} alt="" className="stemM" />
                <img src={STEM} alt="" className="stem" />
                <div className="stem-text">
                  Science, technology, engineering, and mathematics is a broad
                  term used to group together these academic disciplines. This
                  term is typically used to address an education policy or
                  curriculum choices in schools. It has implications for
                  workforce development, national security concerns and
                  immigration policy.
                </div>
              </div>
            </div>
            <Footer />
          </>
        )}
      </LangContext.Consumer>
    </SinglePage>
  );
}
