import AcademicsMenu from "../components/AcademicsMenu";
import SinglePage from "../components/SinglePage";
import "../styles/education.css";
import Photo from "../media/school.svg";
import { MdSchool } from "react-icons/md";
import Notes2 from "../media/notes2.svg";
import Fan from "../media/fan.png";

export default function Academics() {
  return (
    <SinglePage>
      <div className="academics-page">
        <AcademicsMenu />
        <div className="ac-sec" id="sec-1">
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
            <div className="ac-sec-body-p">
              <div className="ac-sec-imtihon-bullet-name">
                Imtihon bosqichlari:
                <div className="ac-sec-imtihon-bullet-list">
                  <div className="ac-sec-exam-note">
                    <div className="ac-sec-exam-note-title">1-bosqich</div>
                    <img
                      src={Notes2}
                      alt=""
                      className="ac-sec-exam-note-shape"
                    />
                  </div>
                  <div className="ac-sec-imtihon-bullet-list">
                    •matematika fanidan 30 ta topshiriqdan iborat test shaklida
                    o‘tkaziladi. Belgilangan vazifani bajarish uchun 90 daqiqa
                    vaqt ajratiladi;
                  </div>
                  <div className="ac-sec-imtihon-bullet-list">
                    •birinchi bosqich natijasiga ko‘ra qabul kvotasida
                    belgilangan har bir o‘ringa 20 kishi hisobidan maksimal
                    talabgorlar 2-bosqichda ishtirok etishga ruxsat etiladi;
                  </div>
                </div>
                <div className="ac-sec-imtihon-bullet-list">
                  <div className="ac-sec-exam-note">
                    <div className="ac-sec-exam-note-title">2-bosqich</div>
                    <img
                      src={Notes2}
                      alt=""
                      className="ac-sec-exam-note-shape"
                    />
                  </div>
                  <div className="ac-sec-imtihon-bullet-list">
                    •axborotni tahlil qilish va solishtirish qobiliyatini
                    aniqlash bo‘yicha — 16 ta masala;
                  </div>
                  <div className="ac-sec-imtihon-bullet-list">
                    •mantiq elementlari bo‘lgan matematika fanidan — 24 ta
                    masala
                  </div>
                  <div className="ac-sec-imtihon-bullet-list">
                    •ingliz tilidan — 55 ta test.
                  </div>
                  <div className="ac-sec-imtihon-bullet-list">
                    •2-bosqich kirish imtihonlari uchun jami 150 daqiqa vaqt
                    ajratiladi.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ac-sec" id="sec-3">
          <div className="ac-sec-header">
            <img src={Photo} alt="" className="ac-sec-header-pic" />
            <div className="ac-sec-header-title">O'qitiladigan fanlar</div>
          </div>
          <div className="ac-sec-body">
            <div className="ac-sec-fanlar">
              <div className="ac-sec-fan-block">
                <img src={Fan} alt="" className="ac-sec-fan-rasm" />
                <div className="ac-sec-fan-name">Chemistry</div>
              </div>
              <div className="ac-sec-fan-block">
                <img src={Fan} alt="" className="ac-sec-fan-rasm" />
                <div className="ac-sec-fan-name">Chemistry</div>
              </div>
              <div className="ac-sec-fan-block">
                <img src={Fan} alt="" className="ac-sec-fan-rasm" />
                <div className="ac-sec-fan-name">Chemistry</div>
              </div>
              <div className="ac-sec-fan-block">
                <img src={Fan} alt="" className="ac-sec-fan-rasm" />
                <div className="ac-sec-fan-name">Chemistry</div>
              </div>
              <div className="ac-sec-fan-block">
                <img src={Fan} alt="" className="ac-sec-fan-rasm" />
                <div className="ac-sec-fan-name">Chemistry</div>
              </div>
              <div className="ac-sec-fan-block">
                <img src={Fan} alt="" className="ac-sec-fan-rasm" />
                <div className="ac-sec-fan-name">Chemistry</div>
              </div>
              <div className="ac-sec-fan-block">
                <img src={Fan} alt="" className="ac-sec-fan-rasm" />
                <div className="ac-sec-fan-name">Chemistry</div>
              </div>
              <div className="ac-sec-fan-block">
                <img src={Fan} alt="" className="ac-sec-fan-rasm" />
                <div className="ac-sec-fan-name">Chemistry</div>
              </div>
              <div className="ac-sec-fan-block">
                <img src={Fan} alt="" className="ac-sec-fan-rasm" />
                <div className="ac-sec-fan-name">Chemistry</div>
              </div>
              <div className="ac-sec-fan-block">
                <img src={Fan} alt="" className="ac-sec-fan-rasm" />
                <div className="ac-sec-fan-name">Chemistry</div>
              </div>
              <div className="ac-sec-fan-block">
                <img src={Fan} alt="" className="ac-sec-fan-rasm" />
                <div className="ac-sec-fan-name">Chemistry</div>
              </div>
              <div className="ac-sec-fan-block">
                <img src={Fan} alt="" className="ac-sec-fan-rasm" />
                <div className="ac-sec-fan-name">Chemistry</div>
              </div>
              <div className="ac-sec-fan-block">
                <img src={Fan} alt="" className="ac-sec-fan-rasm" />
                <div className="ac-sec-fan-name">Chemistry</div>
              </div>
              <div className="ac-sec-fan-block">
                <img src={Fan} alt="" className="ac-sec-fan-rasm" />
                <div className="ac-sec-fan-name">Chemistry</div>
              </div>
              <div className="ac-sec-fan-block">
                <img src={Fan} alt="" className="ac-sec-fan-rasm" />
                <div className="ac-sec-fan-name">Chemistry</div>
              </div>
              <div className="ac-sec-fan-block">
                <img src={Fan} alt="" className="ac-sec-fan-rasm" />
                <div className="ac-sec-fan-name">Chemistry</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SinglePage>
  );
}
