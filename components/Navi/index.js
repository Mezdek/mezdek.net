import React from "react";
import style from "./style.module.css";
import { useSelector } from "react-redux";

export default function Navi({ count, scrollTo }) {
  const state = useSelector((state) => state.visible);
  let countArr = [];
  for (let i = 0; i < count; i++) {
    countArr.push(i + 1);
  }
  return (
    <div className={style.navi}>
      {countArr.map((item, index) => (
        <div
          key={index}
          onClick={(e) => scrollTo({ index })}
          className={`${style.navi_selector} ${
            state[0] == `${item}` || (state.length == 0 && index == 0)
              ? style.navi_selected
              : undefined
          }`}
        ></div>
      ))}
    </div>
  );
}
