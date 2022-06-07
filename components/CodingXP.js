/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "../styles/Main.module.css";
import projects from "../data/projects";

const Item = ({ projects }) => {
  return (
    <div className={style.CodingXP_Projects_Item}>
      <a
        href={projects.link}
        target="_blank"
        rel="noopener noreferrer"
        className={style.CodingXP_Projects_Link}
      >
        {projects.name}
      </a>
      <img
        src={projects.image}
        alt="mimimi"
        className={style.CodingXP_Projects_Image}
      />
      <p className={style.CodingXP_Projects_Description}>
        {projects.description}
      </p>
    </div>
  );
};

export default function CodingXP() {
  return (
    <div className={style.CodingXP_Container}>
      <div className={style.CodingXP_Intro}>
        From September 2021 to February 2022, I attended a full-stack web
        development boot camp at{" "}
        <a
          target={"_blank"}
          rel={"noreferrer noopener"}
          href={"https://www.wildcodeschool.com/en-GB"}
        >
          Wild Code School
        </a>
        . I learned together with my classmates how to build complete web
        applications using React, Node, Express, and MySQL with the help of many
        dojos and workshops.
      </div>
      <div className={style.CodingXP_Projects}>
        <div className={style.CodingXP_Projects_Title}>
          Here are some of the projects I worked on during my time at Wild Code:
        </div>
        <div className={style.CodingXP_Projects_Container}>
          <div
            className={style.CodingXP_Projects_Container_Scroller_Left}
            onClick={(e) => {
              e.target.parentElement.scrollLeft -= 300;
            }}
          >
            &#60;
          </div>
          {projects.map((proj, index) => (
            <Item key={index} projects={proj} />
          ))}
          <div
            className={style.CodingXP_Projects_Container_Scroller_Right}
            onClick={(e) => {
              e.target.parentElement.scrollLeft += 300;
            }}
          >
            &#62;
          </div>
        </div>
      </div>
    </div>
  );
}
