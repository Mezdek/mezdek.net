import React from "react";
import style from "../styles/Resume.module.css";

import ResumeData from "../data/ResumeData_En";
import { Ticket } from "./Ticket";

const Job = ({ i }) => {
  return (
    <i className={style.entry}>
      <i className={style.key}>{ResumeData[i].title}</i>
      <Ticket data={ResumeData[i]} />
    </i>
  );
};

export default function Background() {
  return (
    <div className={style.container}>
      <div className={style.resume}>
        I have always worked with people, mostly using my language skills as a{" "}
        <Job i="3" /> but not only. My last job just before the pandemic was{" "}
        <Job i={1} /> and I also worked once as a <Job i={2} /> in Istanbul and
        as a <Job i={4} /> with Doctors without Borders in Syria during the war.
      </div>
      <p className={style.hint}>
        Hover over a job to see more information about it
      </p>
    </div>
  );
}
