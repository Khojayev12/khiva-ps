import NewsSlider from "../components/NewsSlider";
import SingleNews from "../components/SingleNews";
import SinglePage from "../components/SinglePage";
import NewsComponent from "../components/NewsComponent";
import "../styles/news.css";
import Photo from "../media/school.svg";
import Footer from "../components/Footer";

export default function News() {
  return (
    <SinglePage>
      <div className="news-page">
        <div className="just-height"></div>
        <NewsSlider title="So'ngi yangiliklar" path="/news/all">
          <NewsComponent
            id="1"
            pic={Photo}
            watch="420"
            title="This is title of news component"
            text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
          />
          <NewsComponent
            id="1"
            pic={Photo}
            watch="420"
            title="This is title of news component"
            text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
          />
          <NewsComponent
            id="1"
            pic={Photo}
            watch="420"
            title="This is title of news component"
            text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
          />
          <SingleNews
            id="1"
            pic={Photo}
            watch="420"
            title="This is title of news component"
            text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
          />
          <SingleNews
            id="1"
            pic={Photo}
            watch="420"
            title="This is title of news component"
            text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
          />
        </NewsSlider>
        <NewsSlider title="Tadbirlar" path="/news/events">
          <SingleNews
            id="1"
            pic={Photo}
            watch="420"
            title="This is title of news component"
            text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
          />
          <SingleNews
            id="1"
            pic={Photo}
            watch="420"
            title="This is title of news component"
            text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
          />
          <SingleNews
            id="1"
            pic={Photo}
            watch="420"
            title="This is title of news component"
            text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
          />
          <SingleNews
            pic={Photo}
            id="1"
            watch="420"
            title="This is title of news component"
            text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
          />
          <SingleNews
            pic={Photo}
            id="1"
            watch="420"
            title="This is title of news component"
            text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
          />
        </NewsSlider>
        <NewsSlider title="Uchrashuvlar" path="/news/meetings">
          <SingleNews
            id="1"
            pic={Photo}
            watch="420"
            title="This is title of news component"
            text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
          />
          <SingleNews
            pic={Photo}
            watch="420"
            id="1"
            title="This is title of news component"
            text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
          />
          <SingleNews
            pic={Photo}
            watch="420"
            id="1"
            title="This is title of news component"
            text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
          />
          <SingleNews
            pic={Photo}
            watch="420"
            id="1"
            title="This is title of news component"
            text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
          />
          <SingleNews
            pic={Photo}
            watch="420"
            id="1"
            title="This is title of news component"
            text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
          />
        </NewsSlider>
      </div>
      <Footer />
    </SinglePage>
  );
}
