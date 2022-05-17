import React from "react";
import style from "../styles/Resume.module.css";

import ResumeContent from "./ResumeContent";
import ResumeNav from "./ResumeNav";
import ResumeData from "../data/ResumeData_En";

export default function Resume() {
  return (
    <div className={style.container}>
        <div className={style.side}>
          {ResumeData.map((data, key) => (
            <ResumeNav key={key} id={key} content={data.section} />
          ))}
        </div>
        <div className={style.main}>
          {ResumeData.map((data, key) => (
            <ResumeContent key={key} id={key} {...data} lang={"en"} />
          ))}
        </div>
    </div>
  );
}
