import React from "react";
import style from "./style.module.css";
import Ticket from "./Ticket";

import ResumeData from "../../data/ResumeData_En";

export default function Resume() {
  return (
    <div className={style.main}>
      <div className={style.resume}>
        I have always worked with people. My language skills gave me the tools I
        needed to work with others as a <Ticket data={ResumeData[2]} />, but I
        have also been a <Ticket data={ResumeData[0]} />, a{" "}
        <Ticket data={ResumeData[1]} /> in Istanbul and a{" "}
        <Ticket data={ResumeData[3]} /> with Doctors without Borders during the
        war in Syria. Now I’m ready for a new challenge; I’m starting a career
        as a developer for web applications.
      </div>
    </div>
  );
}
