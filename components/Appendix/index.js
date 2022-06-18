import React from "react";
import style from "./style.module.css";
import Contact from "../Contact";

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.footer_content}>
        Find me on LinkedIn and GitHub or simply email me
      </div>
      <Contact />
    </div>
  );
}
