/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "../styles/Main.module.css";
import intro from "../data/intro.json";

export default function Intro() {
  return (
    <div className={style.intro}>
      <img
        className={style.intro_image}
        src={intro.image}
        alt={intro.name}
      />
      <p className={style.intro_text}>{intro.main}</p>
    </div>
  );
}
