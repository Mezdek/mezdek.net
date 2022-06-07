/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "../styles/Flipper.module.css";

export default function Flipper({ image = "/placeholder.jpg", text }) {
  return (
    <div className={style.container}>
      <div className={style.object}>
        <div className={`${style.card} ${style.front}`}>
          <img className={style.image} src={image} alt={text} />
        </div>
        <div className={`${style.card} ${style.back}`}>{text}</div>
      </div>
    </div>
  );
}
