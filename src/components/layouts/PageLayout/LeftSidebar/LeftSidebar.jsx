import React, { useState } from "react";
import Logo from "../../../../imgs/logo.png";
import "./LeftSidebar.css";
import { LeftSidebarData } from "../../../../Data/Data";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { NavLink } from "react-router-dom";

const LeftSidebar = (props) => {
  const [selected, setSelected] = useState(0);

  function onChangeTab(index) {
    console.log(index);
    setSelected(index);
    props.handleTabSwich(index);
  }

  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <span>
          Nata<span className="a">L</span>o
        </span>
      </div>
      <div className="menu">
        {LeftSidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => onChangeTab(index)}
            >
              <item.icon></item.icon>
              <span>{item.heading}</span>
            </div>
          );
        })}

        <div className="menuItem">
          <NavLink to="/auth">
            <UilSignOutAlt />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
