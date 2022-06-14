/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "../styles/Link.module.css";
import ContactData from "../data/ContactCard.json";

import Link from "./Link";

export default function ContactCard() {
  return (
    <div className={style.main}>
      {ContactData.map((contact, index) => (
        <Link key={index} {...contact} />
      ))}
    </div>
  );
}
