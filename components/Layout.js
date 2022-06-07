import React, { Children, cloneElement, isValidElement } from "react";
import style from "../styles/Main.module.css";

import { bindActionCreators } from "redux";
import { actionCreators } from "../state";
import { useDispatch } from "react-redux";

// import SideBar from "./SideBar";
import Navi from "./Navi";

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.bottom >= 0 && rect.top <= window.innerHeight;
}
export default function Layout({ children }) {
  const dispatch = useDispatch();
  const { isVisible, isHidden } = bindActionCreators(actionCreators, dispatch);

  const handleScroll = (e) => {
    for (const ele of e.target.children) {
      isInViewport(ele) ? isVisible(ele.id) : isHidden(ele.id);
    }
  };

  const childrenWithID = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      return cloneElement(child, { id: ++index });
    } else {
      return child;
    }
  });

  return (
    <div className={style.layout}>
      {/* <SideBar /> */}
      <Navi count={childrenWithID.length} />
      <div className={style.child} onScroll={(e) => handleScroll(e)}>
        {childrenWithID}
      </div>
    </div>
  );
}
