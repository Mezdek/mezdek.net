import React from "react";
import style from "../styles/Resume.module.css";

export function Ticket({ data, id }) {
  return (
    <div className={style.ticket} id={id}>
      {/* <p className={style.ticket_title}>{data.title}</p> */}
      <p className={style.ticket_header}>
        {data.start_date} - {data.end_date}
        <br />
        {data.organisation}
        <br />
        {data.location}
      </p>
      {data.description.length > 0 && (
        <ul className={style.ticket_description}>
          {data.description.map((item, index) => (
            <li key={index} className={style.li}>
              {item}
            </li>
          ))}
        </ul>
      )}
      {data.remarks && (
        <p>
          <i>{data.remarks}</i>
        </p>
      )}
    </div>
  );
}
