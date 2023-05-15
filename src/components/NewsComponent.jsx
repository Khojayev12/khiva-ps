import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function NewsComponent(props) {
  return (
    <Link to={"/post/" + props.id}>
      <div className="s-news" data-aos="zoom-in-down">
        <div className="s-news-info">
          <div className="s-news-title"> {props.title} </div>
        </div>
        <img src={props.pic} alt="" className="s-news-pic" />
      </div>
    </Link>
  );
}
