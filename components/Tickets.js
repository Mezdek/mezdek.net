import React from "react";
import style from "../styles/Resume.module.css";
import {
  TicketTitle,
  TicketDate,
  TicketOrganisation,
  TicketLocation,
  TicketDescription,
} from "./TicketComponents";

const SingleSkill = ({ item }) => {
  return (
    <div className={style.skill}>
      <span style={{ width: "33%" }}>{item.skill}</span>
      <span
        style={{
          width: "34%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        -
      </span>
      <span style={{ width: "33%" }}>{item.level}</span>
    </div>
  );
};

export function SkillTicket({ data }) {
  return (
    <div className={style.skill_ticket}>
      <div style={{ width: "30%", display: "flex", textAlign: "center" }}>
        <TicketTitle title={data.activity_title} />
      </div>
      <div className={style.skill_list}>
        {data.activity_description.map((item, index) => (
          <SingleSkill item={item} key={index} />
        ))}
      </div>
    </div>
  );
}
export function JobTicket({ data, lang }) {
  return (
    <div className={style.job_ticket}>
      <TicketTitle title={data.activity_title} />
      {data.start_date && (
        <TicketDate
          start_date={data.start_date}
          end_date={data.end_date}
          lang={lang}
        />
      )}
      <TicketOrganisation activity_organisation={data.activity_organisation} />
      <TicketLocation activity_location={data.activity_location} />
      {data.activity_description.length > 0 && (
        <TicketDescription activity_description={data.activity_description} />
      )}
      {data.remarks && (
        <p>
          <i>{data.remarks}</i>
        </p>
      )}
    </div>
  );
}
