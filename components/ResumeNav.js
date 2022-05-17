import React from "react";

import { bindActionCreators } from "redux";
import { actionCreators } from "../state";
import { useDispatch, useSelector } from "react-redux";

import style from "../styles/Resume.module.css";

export default function ResumeNav({ id, content }) {
  const dispatch = useDispatch();
  const { setCategory } = bindActionCreators(actionCreators, dispatch);
  const state = useSelector((state) => state.switcher);
  const active = state.id == id;
  return (
    <div
      className={`${style.key} ${active ? style.active : ""}`}
      onClick={(e) => {
        setCategory(e.target.id);
      }}
      id={id}
    >
      {content}
    </div>
  );
}
