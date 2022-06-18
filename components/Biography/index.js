import React from "react";
import style from "./style.module.css";

import profile from "../../data/profile.json";

export default function index() {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <h1 className={style.title}>Biography</h1>
        {profile.story.map((item, index) => (
          <div key={index} className={style.story}>
            {item}
          </div>
        ))}
        {profile.passions.map((item, index) => (
          <div key={index} className={style.story}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
