import NewsComponent from "./NewsComponent";
import "../styles/news.css";
import Photo from "../media/school.svg";
import SinglePage from "./SinglePage";

export default function NewsByCategory(props) {
  return (
    <SinglePage>
      <div className="news-category">
        <div className="news-catogory-title">{props.title}</div>
        <div>
        <NewsComponent
            id="1"
            pic={Photo}
            watch="420"
            time={"30.12.2023"}
            title="This is title of news component"
            description="This is description of news component, This is description of news component, This is description of news component"
            text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
          />
          <NewsComponent
            id="1"
            pic={Photo}
            watch="420"
            time={"30.12.2023"}
            title="This is title of news component"
            description="This is description of news component, This is description of news component, This is description of news component"
            text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
          />
          <NewsComponent
            id="1"
            pic={Photo}
            watch="420"
            time={"30.12.2023"}
            title="This is title of news component"
            description="This is description of news component, This is description of news component, This is description of news component"
            text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
          />
          <NewsComponent
            id="1"
            pic={Photo}
            watch="420"
            time={"30.12.2023"}
            title="This is title of news component"
            description="This is description of news component, This is description of news component, This is description of news component"
            text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
          />
          <NewsComponent
            id="1"
            pic={Photo}
            watch="420"
            time={"30.12.2023"}
            title="This is title of news component"
            description="This is description of news component, This is description of news component, This is description of news component"
            text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
          />
          <NewsComponent
            id="1"
            pic={Photo}
            watch="420"
            time={"30.12.2023"}
            title="This is title of news component"
            description="This is description of news component, This is description of news component, This is description of news component"
            text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
          />
          <NewsComponent
            id="1"
            pic={Photo}
            watch="420"
            time={"30.12.2023"}
            title="This is title of news component"
            description="This is description of news component, This is description of news component, This is description of news component"
            text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
          />
          <NewsComponent
            id="1"
            pic={Photo}
            watch="420"
            time={"30.12.2023"}
            title="This is title of news component"
            description="This is description of news component, This is description of news component, This is description of news component"
            text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
          />
          <NewsComponent
            id="1"
            pic={Photo}
            watch="420"
            time={"30.12.2023"}
            title="This is title of news component"
            description="This is description of news component, This is description of news component, This is description of news component"
            text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
          />
          <NewsComponent
            id="1"
            pic={Photo}
            watch="420"
            time={"30.12.2023"}
            title="This is title of news component"
            description="This is description of news component, This is description of news component, This is description of news component"
            text="This is title of news component, This is title of news component, This is title of news component, This is title of news component"
          />
        </div>
      </div>
    </SinglePage>
  );
}
