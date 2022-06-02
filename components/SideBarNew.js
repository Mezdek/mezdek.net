import React from "react";
import style from "../styles/Maino.module.css";
import { NavButton } from "./Button";
import NavLinks from "../data/NavLinks.json";

export default function SideBar() {
  return (
    <div className={style.side_bar}>
      <div className={style.filler}></div>
    </div>
  );
}
