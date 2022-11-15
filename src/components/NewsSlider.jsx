import { Link } from "react-router-dom";

export default function NewsSlider(props) {
  return (
    <div className="news-slider">
      <div className="n-slider-title">
        <span>{props.title}</span>
        <Link className="my-link" to={props.path}>
          <button className="barchasi-btn" style={{ marginRight: "15px" }}>
            Barchasi
          </button>
        </Link>
      </div>
      <div className="n-main-slider">
        <div className="n-main-slider-flex">{props.children}</div>
      </div>
    </div>
  );
}
