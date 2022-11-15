import NewsSlider from "../components/NewsSlider";
import SingleNews from "../components/SingleNews";
import SinglePage from "../components/SinglePage";
import "../styles/news.css";
import Photo from "../media/school.svg";
import Footer from "../components/Footer";

export default function News() {
  return (
    <SinglePage>
      <div className="news-page">
        <div className="just-height"></div>
        <NewsSlider title="So'ngi yangiliklar" path="/news/all" >
          <SingleNews
            pic={Photo}
            watch="420"
            title="This is title of news component"
            text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
          />
          <SingleNews
            pic={Photo}
            watch="420"
            title="This is title of news component"
            text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
          />
          <SingleNews
            pic={Photo}
            watch="420"
            title="This is title of news component"
            text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
          />
          <SingleNews
            pic={Photo}
            watch="420"
            title="This is title of news component"
            text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
          />
          <SingleNews
            pic={Photo}
            watch="420"
            title="This is title of news component"
            text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
          />
        </NewsSlider>
        <NewsSlider title="Tadbirlar" path="/news/events" >
          <SingleNews
            pic={Photo}
            watch="420"
            title="This is title of news component"
            text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
          />
          <SingleNews
            pic={Photo}
            watch="420"
            title="This is title of news component"
            text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
          />
          <SingleNews
            pic={Photo}
            watch="420"
            title="This is title of news component"
            text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
          />
          <SingleNews
            pic={Photo}
            watch="420"
            title="This is title of news component"
            text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
          />
          <SingleNews
            pic={Photo}
            watch="420"
            title="This is title of news component"
            text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
          />
        </NewsSlider>
        <NewsSlider title="Uchrashuvlar" path="/news/meetings" >
          <SingleNews
            pic={Photo}
            watch="420"
            title="This is title of news component"
            text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
          />
          <SingleNews
            pic={Photo}
            watch="420"
            title="This is title of news component"
            text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
          />
          <SingleNews
            pic={Photo}
            watch="420"
            title="This is title of news component"
            text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
          />
          <SingleNews
            pic={Photo}
            watch="420"
            title="This is title of news component"
            text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
          />
          <SingleNews
            pic={Photo}
            watch="420"
            title="This is title of news component"
            text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
          />
        </NewsSlider>
      </div>
      <Footer />
    </SinglePage>
  );
}
