import React from "react";
import style from "./style.module.css";

export default function index() {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.beforeRev}>
          I was born in <i className={style.city}>1989 in Al-Hasaka, Syria</i>{" "}
          and was a very curious and talkative child. I learned programming for
          the first time using <i className={style.basic}>MSX BASIC</i> when I
          was 9 years old, and I was also fascinated by electronics and the{" "}
          <i className={style.boards}>green circuit boards</i>, so I tried to
          build a small radio when I was 14. After I grew up, I went to college
          to study Mathematics but when I changed my mind and wanted to study
          something less abstract, the Syrian revolution has started.
        </div>
        <div className={style.afterRev}>
          In 2011 to avoid joining the military suppression of Assad&apos;s
          regime, I left to Turkey, after which the course of my life became
          unstable for the next few years, until I arrived to Germany in 2016.
        </div>
        <div className={style.langSkill}>
          I love languages, and I am a native speaker of both Kurdish and
          Arabic, beside fluently speaking English and German and some Turkish.
        </div>
        <div className={style.hobbies}>
          I enjoy learning the etymology of a word, and am captivated about
          ancient history, and beside going for long hikes, I also try to
          volunteer in places where people could use my help.
        </div>
      </div>
    </div>
  );
}
