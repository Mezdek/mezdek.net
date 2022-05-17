/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";
import style from "../styles/Buttons.module.css";

function Button({ link, type }) {
  const router = useRouter();
  const visited = type === "nav" && router.pathname === link.href;

  return (
    <a
      href={visited ? null : link.href}
      target={link.target ? link.target : "_self"}
      className={`${style.button} ${
        type === "contact" ? style.contact_button : ""
      } ${visited ? style.visited : ""} `}
    >
      {link.icon ? (
        <img
          src={link.icon}
          alt={link.name}
          className={style.contact_button_image}
        />
      ) : (
        link.name
      )}
    </a>
  );
}

export function NavButton({ link }) {
  return <Button link={link} type={"nav"} />;
}
export function ContactButton({ link }) {
  return <Button link={link} type={"contact"} />;
}
