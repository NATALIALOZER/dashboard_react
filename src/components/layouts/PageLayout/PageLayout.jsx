import React, { useState } from "react";
import RightAside from "./RightAside/RightAside";
import MainDash from "./MainDash/MainDash";
import LeftSidebar from "./LeftSidebar/LeftSidebar";
import "./PageLayout.css";

const PageLayout = () => {
  const [currentTab, setTab] = useState(0);

  function changeView(tabIndex) {
    setTab(tabIndex);
  }

  return (
    <div className="Page">
      <div className="PageGlass">
        <LeftSidebar handleTabSwich={changeView} />
        <MainDash currentTab={currentTab} />
        <RightAside />
      </div>
    </div>
  );
};

export default PageLayout;
