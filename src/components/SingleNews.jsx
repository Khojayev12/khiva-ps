import { AiOutlineEye } from "react-icons/ai";

export default function SingleNews(props) {
  return (
    <div className="s-news" data-aos="zoom-in-down">
      <img src={props.pic} alt="" className="s-news-pic" />
      <div className="s-news-title"> {props.title} </div>
      <div className="s-news-text"> {props.text.slice(0, 90)}... </div>
      <div className="s-news-controls">
        <span>
          <AiOutlineEye
            style={{
              color: "#1B3975",
              fontSize: "20px",
              marginLeft: "15px",
              marginBottom: "-3px",
            }}
          />
          {props.watch}
        </span>

        <button className="s-news-batafsil">Batafsil</button>
      </div>
    </div>
  );
}
