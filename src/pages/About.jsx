import Footer from "../components/Footer";
import SinglePage from "../components/SinglePage";
import Photo from "../media/school.svg";
import "../styles/about.css";

export default function About() {
  const OnLoad = () => {
    var r = document.querySelector(":root");
    var my_atan = (window.screen.availWidth * 0.653) / 1500;
    var my_right = window.screen.availWidth * 0.347;
    console.log(my_right);
    r.style.setProperty(
      "--angle",
      "calc(atan(" + my_atan.toString() + ") * -1)"
    );
    r.style.setProperty("--width", "calc(" + my_right.toString() + "* 1px)");
    r.style.setProperty(
      "--right",
      "calc(" + (window.screen.availWidth * 0.653).toString() + "/3)"
    );
  };
  console.log(window.screen.availWidth);
  return (
    <SinglePage>
      <div className="about-page" onLoad={OnLoad}>
        <div className="at-farmon-sec">
          <div className="at-farmon-title at-title">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use
          </div>
          <div className="at-farmon-rasm prallelegram">
            <img src={Photo} alt="" className="at-farmon-img" />
          </div>
        </div>
        <div className="at-dars-sec">
          <img src={Photo} alt="" className="at-dars-img" />
          <img src={Photo} alt="" className="at-dars-img" />
          <div className="at-dars-title prallelegram at-title">
            <div className="at-dars-text">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use
            </div>
          </div>
        </div>
        <div className="at-farmon-sec">
          <div className="at-farmon2-title at-title">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use
          </div>
          <div className="at-farmon2-rasm prallelegram">
            <img src={Photo} alt="" className="at-farmon-img" />
          </div>
        </div>
      </div>
      <Footer />
    </SinglePage>
  );
}
