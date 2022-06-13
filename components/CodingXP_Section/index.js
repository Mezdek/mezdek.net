/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "./style.module.css";
import ProjectTicket from "./ProjectTicket";
import Link from "../Link";
import projects from "../../data/projects";

const handleScroll = (element, dir, offset = 300) => {
  dir === "left"
    ? (element.parentElement.scrollLeft -= offset)
    : (element.parentElement.scrollLeft += offset);
};

export default function CodingXP() {
  return (
    <div className={style.main}>
      <div className={style.intro}>
        From September 2021 to February 2022, I attended a full-stack web
        development boot camp at{" "}
        <Link
          title="Wild Code School"
          href={"https://www.wildcodeschool.com/en-GB"}
          target="_blank"
          rel="noopener noreferrer"
        />
        . I learned together with my classmates how to build complete web
        applications using React, Node, Express, and MySQL with the help of many
        dojos and workshops.
      </div>
      <div className={style.projects_container}>
        <div className={style.projects_header}>
          Here are some of the projects I worked on:
        </div>
        <div className={style.projects_slider}>
          <div
            className={`${style.projects_slider_scroller} ${style.left}`}
            onClick={(e) => {
              handleScroll(e.target, "left");
            }}
          >
            &#60;
          </div>
          {projects.map((proj, index) => (
            <ProjectTicket key={index} project={proj} />
          ))}
          <div
            className={`${style.projects_slider_scroller} ${style.right}`}
            onClick={(e) => {
              handleScroll(e.target, "right");
            }}
          >
            &#62;
          </div>
        </div>
      </div>
    </div>
  );
}
