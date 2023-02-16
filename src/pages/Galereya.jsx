import Footer from "../components/Footer";
import GalereyaLanding from "../components/GalereyaLanding";
import SinglePage from "../components/SinglePage";
import GalereyaLanding from "../components/GalereyaLanding";
import "../styles/galereya.css";
import Photo from "../media/school.svg";

export default function Galereya() {
  return (
    <SinglePage>
      <div className="news-page">
        <div className="gal-header">Maktabimiz Galereyasi</div>
        <div className="gal-img-grid">
          <div className="gal-img-container">
            <GalereyaLanding width="100%" height="auto" pic={Photo} />
          </div>
          <div className="gal-img-container">
            <GalereyaLanding width="100%" height="auto" pic={Photo} />
          </div>
          <div className="gal-img-container">
            <GalereyaLanding width="100%" height="auto" pic={Photo} />
          </div>
          <div className="gal-img-container">
            <GalereyaLanding width="100%" height="auto" pic={Photo} />
          </div>
          <div className="gal-img-container">
            <GalereyaLanding width="100%" height="auto" pic={Photo} />
          </div>
          <div className="gal-img-container">
            <GalereyaLanding width="100%" height="auto" pic={Photo} />
          </div>
          <div className="gal-img-container">
            <GalereyaLanding width="100%" height="auto" pic={Photo} />
          </div>
          <div className="gal-img-container">
            <GalereyaLanding width="100%" height="auto" pic={Photo} />
          </div>
          <div className="gal-img-container">
            <GalereyaLanding width="100%" height="auto" pic={Photo} />
          </div>
          <div className="gal-img-container">
            <GalereyaLanding width="100%" height="auto" pic={Photo} />
          </div>
          <div className="gal-img-container">
            <GalereyaLanding width="100%" height="auto" pic={Photo} />
          </div>
          <div className="gal-img-container">
            <GalereyaLanding width="100%" height="auto" pic={Photo} />
          </div>
          <div className="gal-img-container">
            <GalereyaLanding width="100%" height="auto" pic={Photo} />
          </div>
          <div className="gal-img-container">
            <GalereyaLanding width="100%" height="auto" pic={Photo} />
          </div>
          <div className="gal-img-container">
            <GalereyaLanding width="100%" height="auto" pic={Photo} />
          </div>
          <div className="gal-img-container">
            <GalereyaLanding width="100%" height="auto" pic={Photo} />
          </div>
        </div>
      </div>
    </SinglePage>
  );
}
