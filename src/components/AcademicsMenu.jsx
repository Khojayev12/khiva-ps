import Menu1 from "../media/menu-icons/menu1.svg";
import Menu2 from "../media/menu-icons/menu2.svg";
import Menu3 from "../media/menu-icons/menu3.svg";
import Menu4 from "../media/menu-icons/menu4.svg";
import Menu5 from "../media/menu-icons/menu5.svg";
import Menu6 from "../media/menu-icons/menu6.svg";
import Menu7 from "../media/menu-icons/menu7.svg";
import Menu8 from "../media/menu-icons/menu8.svg";
import "../styles/education.css"

export default function AcademicsMenu() {
  return (
    <div className="AcademicsMenu">
      <div className="ac-menu-block">
        <div className="ac-menu-element">
          <img src={Menu1} alt="" className="ac-menu-element-icon" />
          <span className="ac-menu-element-text">Qabul haqida </span>
        </div>
        <div className="ac-menu-element">
          <img src={Menu2} alt="" className="ac-menu-element-icon mar-left" />
          <span className="ac-menu-element-text">Imtihon </span>
        </div>
        <div className="ac-menu-element">
          <img src={Menu3} alt="" className="ac-menu-element-icon mar-left" />
          <span className="ac-menu-element-text">Eligibility </span>
        </div>
        <div className="ac-menu-element">
          <img src={Menu4} alt="" className="ac-menu-element-icon mar-left" />
          <span className="ac-menu-element-text">Hujjat topshirish </span>
        </div>
        <div className="ac-menu-element">
          <img src={Menu5} alt="" className="ac-menu-element-icon" />
          <span className="ac-menu-element-text">A & As-level </span>
        </div>
        <div className="ac-menu-element">
          <img src={Menu6} alt="" className="ac-menu-element-icon" />
          <span className="ac-menu-element-text">O'qitiladigan fanlar </span>
        </div>
        <div className="ac-menu-element">
          <img src={Menu7} alt="" className="ac-menu-element-icon" />
          <span className="ac-menu-element-text">Qo'shimcha to'garaklar </span>
        </div>
        <div className="ac-menu-element">
          <img src={Menu8} alt="" className="ac-menu-element-icon" />
          <span className="ac-menu-element-text">Bitiruvchilar </span>
        </div>
      </div>
    </div>
  );
}
