import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import AOS from "aos";
import { languages, LangContext } from "./components/LangContext.jsx";
import News from "./pages/News";
import NewsByCategory from "./components/NewsByCategory";
import Photo from "./media/school.svg";
import NewsPage from "./pages/NewsPage";
import About from "./pages/About";
import Galereya from "./pages/Galereya";
import Administration from "./pages/Administration";
import Academics from "./pages/Academics";

function App() {
  const [lang, setLang] = useState(languages.uz);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const mydata = {
    photos: [Photo, Photo],
    date: "12.11.2022",
    watches: "310",
    title: "My title 123",
    text: "lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum",
  };
  return (
    <div className="App">
      <LangContext.Provider value={lang}>
        <BrowserRouter>
          <Header setLang={setLang} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/galereya" element={<Galereya />} />
            <Route path="/about" element={<About />} />
            <Route path="/administration" element={<Administration />} />
            <Route path="/galereya" element={<Galereya />} />
            <Route path="/post/1" element={<NewsPage data={mydata} />} />
            <Route
              path="news/all"
              element={<NewsByCategory title="Barcha yangiliklar" />}
            />
            <Route
              path="news/events"
              element={<NewsByCategory title="Tadbirlar" />}
            />
            <Route
              path="news/meetings"
              element={<NewsByCategory title="Uchrashuvlar" />}
            />
          </Routes>
        </BrowserRouter>
      </LangContext.Provider>
    </div>
  );
}

export default App;
