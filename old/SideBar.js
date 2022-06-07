import React from "react";
import style from "../styles/Main.module.css";
import { NavButton } from "./Button";
import NavLinks from "../data/NavLinks.json";

export default function SideBar() {
  return (
    <div className={style.side_bar}>
      {NavLinks.map((item, index) => {
        return <NavButton key={index} link={item} />;
      })}
    </div>
  );
}
