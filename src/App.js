import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import { useState } from "react";
import { languages, LangContext } from "./components/LangContext.jsx";

function App() {
  const [lang, setLang] = useState(languages.uz);
  return (
    <div className="App">
      <LangContext.Provider value={lang}>
        <BrowserRouter>
          <Header setLang={setLang} />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </LangContext.Provider>
    </div>
  );
}

export default App;
