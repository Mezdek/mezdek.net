/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "./style.module.css";

export default function Link({
  title,
  href,
  icon,
  target = "_blank",
  rel = "noreferrer noopener",
}) {
  return (
    <a
      href={href}
      target={target}
      className={`${icon ? style.icon : style.text}`}
      rel={rel}
    >
      {icon ? <img src={icon} alt={title} className={style.image} /> : title}
    </a>
  );
}
