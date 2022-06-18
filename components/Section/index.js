import React from "react";
import style from "./style.module.css";
import { useSelector } from "react-redux";

export default function Section({ id, animation, children }) {
  const state = useSelector((state) => state.visible);
  const isVisible = state.includes(`${id}`);
  return (
    <div className={style.section} id={id}>
      <div
        className={`${style.section_in} ${
          isVisible ? style[animation] : undefined
        }`}
      >
        {children}
      </div>
    </div>
  );
}
