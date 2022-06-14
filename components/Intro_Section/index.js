/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "./style.module.css";
import profile from "../../data/profile.json";

export default function Intro() {
  return (
    <div className={style.intro_main}>
      <span className={style.intro_name_line}>
        Hi, I am <i className={style.intro_name}>{profile.name}</i>
      </span>
      <span className={style.intro_location_line}>
        A <i className={style.intro_location_old}>{profile["old-city"]}</i>{" "}
        <i className={style.intro_location}>{profile["current-city"]}</i> based{" "}
        <i className={style.intro_job}>{profile.job}</i>
      </span>
    </div>
  );
}
