/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "../styles/Main.module.css";

export default function CodingXP() {
  return (
    <div className={style.CodingXP_Container}>
      <p className={style.CodingXP_Intro}>
        From September 2021 to February 2022, I attended a full-stack web
        development boot camp at Wild Code School. I learned together with my
        classmates how to build complete web applications using React, Node,
        Express, and MySQL with the help of many dojos and workshops.
      </p>
      <div className={style.CodingXP_Projects}>
        <p className={style.CodingXP_Projects_Title}>
          Here are some of the projects I worked on during my time at Wild Code:
        </p>
        <div className={style.CodingXP_Projects_Container}>
          <div className={style.CodingXP_Projects_Item}>
            <div className={style.CodingXP_Projects_Item_Title}>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className={style.CodingXP_Projects_Item_Title_Link}
              >
                <h3></h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
