import React, { useState } from "react";
import { BsTranslate, BsChevronDown } from "react-icons/bs";
import { LangContext, languages } from "./LangContext";

export default function LangPanel(props) {
  const [isContextOpen, SetIsContextOpen] = useState(false);

  const handleContext = () => {
    SetIsContextOpen(!isContextOpen);
  };

  const handleLangChange = (til) => {
    props.setLang(til);
    handleContext();
  };

  return (
    <LangContext.Consumer>
      {(lang) => (
        <div className="lang-change-panel">
          <div
            className={
              isContextOpen ? "l-panel borderless" : "l-panel borderful"
            }
            onClick={handleContext}
          >
            <BsTranslate className="lang-icon" />
            {lang.til}
            <BsChevronDown
              className={
                isContextOpen
                  ? "expand-icon active-context"
                  : "expand-icon de-activated"
              }
            />
          </div>
          <div
            className={
              isContextOpen
                ? "lang-list langlist-active"
                : "lang-list langlist-deactive"
            }
          >
            <div
              className="single-lang"
              onClick={() => {
                handleLangChange(languages.uz);
              }}
            >
              UZ
            </div>
            <div
              className="single-lang"
              onClick={() => {
                handleLangChange(languages.en);
              }}
            >
              ENG
            </div>
            <div
              className="single-lang"
              onClick={() => {
                handleLangChange(languages.ru);
              }}
            >
              RU
            </div>
          </div>
        </div>
      )}
    </LangContext.Consumer>
  );
}
