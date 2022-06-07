import React from "react";
import style from "../styles/ContactCard.module.css";
import { ContactButton } from "./Button";
import ContactData from "../data/ContactCard.json";

export default function ContactCard() {
  return (
    <div className={style.main}>
      {ContactData.map((contact, index) => (
        <ContactButton key={index} link={contact} />
      ))}
    </div>
  );
}
