import React from "react";
import style from "./style.module.css";

function JobDescription({ data }) {
  return (
    <div className={style.ticket}>
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
    </div>
  );
}

export default function Ticket({ data }) {
  return (
    <i className={style.entry}>
      <i className={style.key}>{data.title}</i>
      <JobDescription data={data} />
    </i>
  );
}
