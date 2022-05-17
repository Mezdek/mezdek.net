import style from "../styles/Resume.module.css";

export const TicketTitle = ({ title }) => {
  return <p className={style.ticket_title}>{title}</p>;
};

export const TicketDate = ({ start_date, end_date, lang }) => {
  const preps = lang === "de" ? ["von", "bis"] : ["from", "to"];
  return (
    <p className={style.ticket_date}>
      {preps[0]} {start_date} {preps[1]} {end_date}
    </p>
  );
};

export const TicketOrganisation = ({ activity_organisation }) => {
  return (
    <span className={style.ticket_organisation}>{activity_organisation}</span>
  );
};

export const TicketLocation = ({ activity_location }) => {
  return <span className={style.ticket_location}>{activity_location}</span>;
};

export const TicketDescription = ({ activity_description }) => {
  return (
    <ul className={style.ticket_description}>
      {activity_description.map((item, index) => (
        <li key={index} className={style.li}>
          {item}
        </li>
      ))}
    </ul>
  );
};
