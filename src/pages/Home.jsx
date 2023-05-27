import SinglePage from "../components/SinglePage";
import "../styles/home.css";
import Photo from "../media/school.svg";
import Photo2 from "../media/school.png";
import NewsIcon from "../media/newsIcon.svg";
import Stem from "../media/s.svg";
import sTem from "../media/t.svg";
import stEm from "../media/e.svg";
import steM from "../media/m.svg";
import STEM from "../media/stem.svg";
import { GoChevronRight } from "react-icons/go";

import GroupIcon from "../media/Group.svg";
import TeacherIcon from "../media/Teacher.svg";
import HomeIcon from "../media/Home.svg";
import FinishIcon from "../media/Finish.svg";
import HonorLanding from "../components/honorLanding";
import GalereyaLanding from "../components/GalereyaLanding";
import SchoolStaffLanding from "../components/SchoolStaff_Landing";
import Footer from "../components/Footer";
import { LangContext } from "../components/LangContext";
import NewsComponent from "../components/NewsComponent";
import { Link } from "react-router-dom";

export default function Home() {
  const NewsScoll = () => {
    document.getElementById("news-scroll").scrollTo({
      left: 2000,
      behavior: "smooth",
    });
  };
  return (
    <SinglePage>
      <LangContext.Consumer>
        {(lang) => (
          <>
            <div className="home-page">
              <div className="hero-section">
                <img src={Photo2} alt="" className="hero-photo" />
                <div className="hero-title">
                  <div className="hero-header">Bizning maqsadimiz</div>
                  <div className="hero-opostrov" style={{ marginLeft: "60px" }}>
                    “
                  </div>
                  <div className="hero-text">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use{" "}
                  </div>
                  <div
                    className="hero-opostrov"
                    style={{ marginRight: "60px", textAlign: "end" }}
                  >
                    ”
                  </div>
                </div>
              </div>

              <div className="news-section">
                <div className="news-section-header">
                  <div className="n-h-left">
                    <img src={NewsIcon} alt="" className="n-h-icon" />
                  </div>
                  <div className="n-h-center">
                    <div className="n-h-sub">
                      Xiva shahridagi Prezident maktabi
                    </div>
                    <div className="n-h-title">News & Events</div>
                  </div>
                  <div className="n-h-right">
                    <img
                      src={NewsIcon}
                      alt=""
                      className="n-h-icon"
                      style={{ transform: "scaleX(-1)" }}
                    />
                  </div>
                </div>
                <div className="news-section-yangilikla">
                  <div className="newas-next-btn" onClick={NewsScoll}>
                    <GoChevronRight className="newas-next-icon" />
                  </div>
                  <hr className="news-all-line" />
                  <Link to="/news">
                    <button className="news-all">Barcha yangiliklar</button>
                  </Link>
                  <div className="home-n-slider" id="news-scroll">
                    <NewsComponent
                      id="1"
                      pic={Photo}
                      watch="420"
                      time={"30.12.2023"}
                      title="This is title of news component"
                      description="This is description of news component, This is description of news component, This is description of news component"
                      text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
                    />
                    <NewsComponent
                      id="1"
                      pic={Photo}
                      watch="420"
                      time={"30.12.2023"}
                      title="This is title of news component"
                      description="This is description of news component, This is description of news component, This is description of news component"
                      text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
                    />
                    <NewsComponent
                      id="1"
                      pic={Photo}
                      watch="420"
                      time={"30.12.2023"}
                      title="This is title of news component"
                      description="This is description of news component, This is description of news component, This is description of news component"
                      text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
                    />
                    <NewsComponent
                      id="1"
                      pic={Photo}
                      watch="420"
                      time={"30.12.2023"}
                      title="This is title of news component"
                      description="This is description of news component, This is description of news component, This is description of news component"
                      text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
                    />
                    <NewsComponent
                      id="1"
                      pic={Photo}
                      watch="420"
                      time={"30.12.2023"}
                      title="This is title of news component"
                      description="This is description of news component, This is description of news component, This is description of news component"
                      text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
                    />
                    <NewsComponent
                      id="1"
                      pic={Photo}
                      watch="420"
                      time={"30.12.2023"}
                      title="This is title of news component"
                      description="This is description of news component, This is description of news component, This is description of news component"
                      text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
                    />
                    <NewsComponent
                      id="1"
                      pic={Photo}
                      watch="420"
                      time={"30.12.2023"}
                      title="This is title of news component"
                      description="This is description of news component, This is description of news component, This is description of news component"
                      text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
                    />
                    <NewsComponent
                      id="1"
                      pic={Photo}
                      watch="420"
                      time={"30.12.2023"}
                      title="This is title of news component"
                      description="This is description of news component, This is description of news component, This is description of news component"
                      text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
                    />
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
                    contact="name@gmail.com"
                    text="Mr. Myles Beaupre was born and raised in Thunder Bay, Ontario, Canada. He started teaching at Queen Elizabeth District High School in Sioux Lookout, ON before moving to the United States to attend the University of Notre Dame. Since moving to Memphis in 2011, Mr. Beaupre has taught with the Achievement School District, Southwind High School and, since 2014, at Collierville High School. At CHS, he has taught history and served as both Assistant and Head Track Coach, Instructional Coach, and Support Team Leader."
                  />
                  <SchoolStaffLanding
                    pic={Photo}
                    name="Ism Familiya"
                    status="Lavozim"
                    contact="name@gmail.com"
                    text="Mr. Myles Beaupre was born and raised in Thunder Bay, Ontario, Canada. He started teaching at Queen Elizabeth District High School in Sioux Lookout, ON before moving to the United States to attend the University of Notre Dame. Since moving to Memphis in 2011, Mr. Beaupre has taught with the Achievement School District, Southwind High School and, since 2014, at Collierville High School. At CHS, he has taught history and served as both Assistant and Head Track Coach, Instructional Coach, and Support Team Leader."
                  />
                </div>
                  <Link to="/administration">
                    <button className="news-all staff-all">Barcha xodimlar</button>
                  </Link>
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
