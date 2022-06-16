import React from "react";
import style from "./style.module.css";
import Ticket from "./Ticket";

import ResumeData from "../../data/ResumeData_En";

export default function Resume() {
  return (
    <div className={style.main}>
      <div className={style.resume}>
        I have always worked with people, mostly using my language skills as a{" "}
        <Ticket data={ResumeData[2]} /> but not only. My last job just before
        the pandemic was <Ticket data={ResumeData[0]} /> and I also worked once
        as a <Ticket data={ResumeData[1]} /> in Istanbul and as a{" "}
        <Ticket data={ResumeData[3]} /> with Doctors without Borders in Syria
        during the war. But now I want to start a career as developer for web
        applications.
      </div>
    </div>
  );
}
