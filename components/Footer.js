import React from "react";
import style from "../styles/Main.module.css";
import ContactCard from "./ContactCard";

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.footer_content}>
        Find me on LinkedIn and GitHub or simply email me
      </div>
      <ContactCard />
    </div>
  );
}
