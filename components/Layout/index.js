import React, { Children, cloneElement, isValidElement, useRef } from "react";
import style from "./style.module.css";

import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { useDispatch } from "react-redux";

import Navi from "../Navi";
import Section from "../Section";

//This method is to check if an element is inside the viewport
const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return rect.bottom >= 0 && rect.top <= window.innerHeight;
};

//This component is the main Layout for the website
export default function Layout({ children }) {
  const dispatch = useDispatch();
  const { isVisible, isHidden } = bindActionCreators(actionCreators, dispatch);
  //A reference for the container of all the sections
  const sectionsContainer = useRef(null);
  //This method updates the state with the id of the section that is in the viewport when the user scrolls
  const handleScroll = (e) => {
    for (const ele of e.target.children) {
      isInViewport(ele) ? isVisible(ele.id) : isHidden(ele.id);
    }
  };
  //This method is to scroll to the section that is selected in the navi, and it is to be passed to the Navi component
  const scrollTo = ({ index }) => {
    sectionsContainer.current.scrollTo({
      top: sectionsContainer.current.children[index].offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  //This method dynamically encircles each children in a Section component
  const sectionedChildren = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      return <Section id={++index}>{child}</Section>;
    } else {
      return child;
    }
  });
  //Eventualy the layout has the navigator and the contatCard components beside a container with all the other sections in it after dynamically assigning an id to each of them
  return (
    <div className={style.layout}>
      <Navi count={sectionedChildren.length} scrollTo={scrollTo} />
      <div
        className={style.child}
        ref={sectionsContainer}
        onScroll={(e) => handleScroll(e)}
      >
        {sectionedChildren}
      </div>
    </div>
  );
}
