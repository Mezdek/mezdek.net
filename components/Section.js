import React, { useRef } from "react";
import style from "../styles/Main.module.css";
import { useSelector } from "react-redux";

export default function Section({ id, animation, children }) {
  const state = useSelector((state) => state.visible);
  const isVisible = state.includes(`${id}`);
  return (
    <div className={style.section} id={id}>
      <div className={isVisible ? style[animation] : undefined}>{children}</div>
    </div>
  );
}
