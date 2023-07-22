import { Link } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";

export default function NewsSlider(props) {
  const NewsScoll = () => {
    document.getElementById("news-scroll-" + props.title.trim()).scrollTo({
      left: 2000,
      behavior: "smooth",
    });
  };
  return (
    <div className="news-section-yangilikla" data-aos="zoom-in-down">
      <div className="slider-title"> {props.title} </div>
      <div className="newas-next-btn" onClick={NewsScoll}>
        <GoChevronRight className="newas-next-icon" />
      </div>
      <hr className="news-all-line" />
      <Link to={props.path}>
        <button className="news-all">Barchasi</button>
      </Link>
      <div className="home-n-slider" id={"news-scroll-" + props.title.trim()}>
        {props.children}
      </div>
    </div>
  );
}
