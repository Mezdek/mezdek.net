/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "./style.module.css";

export default function ProjectTicket({ project }) {
  return (
    <div className={style.project}>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={style.project_title}
      >
        {project.name}
      </a>
      <div className={style.project_image_container}>
        <img
          src={project.image}
          alt={project.name}
          className={style.project_image}
        />
      </div>
      <div className={style.project_description}>
        {project.description.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
}
