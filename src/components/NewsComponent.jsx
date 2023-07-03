import { AiOutlineEye } from "react-icons/ai";
import {IoMdTime} from "react-icons/io"
import { Link } from "react-router-dom";

export default function NewsComponent(props) {
  return (
    <Link to={"/post/" + props.id}>
      <div className="s-news" data-aos="zoom-in-down">
        <div className="s-news-info">
          <div className="s-news-title"> {props.title} </div>
          <div className="s-news-desc"> {props.description} </div>
          <div className="s-news-controls">
          <span className="news-component-date" >
            <IoMdTime
              style={{
                color: "#1B3975",
                fontSize: "20px",
                marginBottom: "-3px",
              }}
            />
            {props.time}
          </span>
          <span >
            <AiOutlineEye style={{
                color: "#1B3975",
                fontSize: "20px",
                marginBottom: "-3px",
              }} /> {props.watch}
          </span>
        </div>
        </div>
        <img src={props.pic} alt="" className="s-news-pic" />
      </div>
    </Link>
  );
}
