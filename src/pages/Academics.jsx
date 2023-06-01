import AcademicsMenu from "../components/AcademicsMenu";
import SinglePage from "../components/SinglePage";
import "../styles/education.css";
import Photo from "../media/school.svg";
import { MdSchool } from "react-icons/md";

export default function Academics() {
  return (
    <SinglePage>
      <div className="academics-page">
        <AcademicsMenu />
        <div className="ac-sec" id="sec-1" >
          <div className="ac-sec-header">
            <img src={Photo} alt="" className="ac-sec-header-pic" />
            <div className="ac-sec-header-title">Qabul haqida</div>
          </div>
          <div className="ac-sec-body">
            <div className="ac-sec-body-p">
              Prezident maktablari – O‘zbekiston Respublikasi Prezidenti Shavkat
              Mirziyoyev tashabbusi bilan 2019-2021-yillarda tashkil etilgan 14
              ta maxsus maktablar. 2019-yil 20- fevraldagi “Prezident
              maktablarini tashkil etish chora-tadbirlari to‘g‘risida
              O‘zbekiston Respublikasi Prezidentining qarori” ga asosan
              2019-yilda 4 ta Prezident maktablari Toshkent, Xiva, Namangan va
              Nukus shaharlarida o‘z faoliyatini boshlagan.
            </div>
            <div className="ac-sec-body-p">
              2019-yilning iyun oyida „Prezident maktablari toʻgʻrisida nizom“
              tasdiqlanib, sentabrda „Oʻzbekiston Respublikasi Vazirlar
              Mahkamasi huzuridagi Prezident, ijod va ixtisoslashtirilgan
              maktablarni rivojlantirish agentligini tashkil etish toʻgʻrisida“
              Prezident farmoni eʼlon qilindi. Prezidentning 2021-yilda
              imzolagan qaroriga muvofiq, agentlik nomi „Prezident taʼlim
              muassasalari agentligi“ga oʻzgartirildi. 2021- yilda yana 10 ta
              hududda Prezident maktablari o‘z faoliyatini boshlagan.
            </div>
          </div>
        </div>

        <div className="ac-sec" id="sec-2">
          <div className="ac-sec-header">
            <img src={Photo} alt="" className="ac-sec-header-pic" />
            <div className="ac-sec-header-title">Imtihon</div>
          </div>
          <div className="ac-sec-body">
            <div
              className="ac-sec-body-p"
              style={{ position: "relative", height: "400px" }}
            >
              <div className="ac-sec-imtihon-icons">
                <div
                  className="ac-sec-imtihon-icon"
                  style={{ top: "30px", right: "30px" }}
                >
                  <MdSchool className="ac-sec-exam-icon" />
                </div>
                <div
                  className="ac-sec-imtihon-icon"
                  style={{ top: "100px", right: "130px" }}
                >
                  <MdSchool className="ac-sec-exam-icon" />
                </div>
                <div
                  className="ac-sec-imtihon-icon"
                  style={{ top: "130px", right: "0px" }}
                >
                  <MdSchool className="ac-sec-exam-icon" />
                </div>
              </div>
              <div className="ac-sec-imtihon-text">
                <div className="ac-sec-imtihon-bullet-name">
                  •Imtihon qancha bosqichdan iborat bo'ladi?
                </div>
                <div className="ac-sec-imtihon-bullet-list">
                  •Imtihon 2 bosqichdan iborat bo'ladi
                </div>
                <div className="ac-sec-imtihon-bullet-list">
                  •Imtihon Cambridge Intenational Assessments bilan hamkorlikda
                  tashkillashtiriladi
                </div>
                <div className="ac-sec-imtihon-bullet-list">
                  •Imtihon Cambridge Intenational Assessments tomonidan
                  baholanadi
                </div>
                <div className="ac-sec-imtihon-bullet-list">
                  •Imtihon natijalari Cambridge Intenational Assessments
                  tomonidan e'lon qilinadi
                </div>
              </div>
            </div>
          </div>
          <div className="ac-sec-body-p">
            <div className="ac-sec-imtihon-bullet-name">
              Imtihon bosqichlari:
            </div>
            
          </div>
        </div>
      </div>
    </SinglePage>
  );
}
