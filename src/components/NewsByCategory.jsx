import SingleNews from "../components/SingleNews";
import "../styles/news.css";
import Photo from "../media/school.svg";
import SinglePage from "./SinglePage";

export default function NewsByCategory(props) {
  return (
    <SinglePage>
      <div className="news-category">
        <div className="news-catogory-title">{props.title}</div>
        <div>
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
        </div>
      </div>
    </SinglePage>
  );
}
