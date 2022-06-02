/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "../styles/Main.module.css";
import intro from "../data/intro.json";
import { hobbies } from "../modules";

export default function Intro() {
  return (
    <div className={style.intro}>
      <p className={style.intro_text_main}>
        Hi, my name is <span className={style.intro_name}>{intro.name}</span>{" "}
        and I am a web developer based in{" "}
        <span className={style.intro_city}>{intro.city}</span>.{" "}
        {hobbies(intro.hobbies)}.
      </p>
      <p className={style.intro_text_sub}>
        During the pandemic I took the chance to improve my old hobby in
        programming. And now I {"can't"} wait to dive deeper in this profession.
      </p>
    </div>
  );
}