import React from "react";
import { useSelector } from "react-redux";
import {JobTicket, SkillTicket } from "./Tickets";

import style from "../styles/Resume.module.css";

export default function ResumeContent({ id, details, section, lang }) {
  const state = useSelector((state) => state.switcher);
  const active = state.id == id;
  const other_skills = section == "Sonstige Kenntnisse" || section == "Other Skills";
  return (
    <div className={`${style.content} ${active ? style.active : ""}`} id={id}>
      {other_skills
        ? details.map((item, index) => <SkillTicket key={index} data={item} />)
        : details.map((item, index) => <JobTicket key={index} data={item} lang={lang} />)}
    </div>
  );
}
