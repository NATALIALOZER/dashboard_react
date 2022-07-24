import React from "react";
import Table from "../../../parts/Table/Table";
import Cards from "../../../parts/Cards/Cards";
import "./MainDash.css";
import Blog from "../../../pages/Blog/Blog";
import Planing from "../../../pages/Planing/Planing";

const MainDash = (props) => {
  const switchDash = () => {
    switch (props.currentTab) {
      case 1:
        return (
          <div className="Blog">
            <h1>Blog</h1>
            <Blog />
          </div>
        );

      case 3:
        return (
          <div>
            <h1>Planing Page</h1>
            <Planing></Planing>
          </div>
        );

      default:
        return (
          <div className="Dashboard">
            <h1>Dashboard</h1>
            <Cards />
            <Table />
          </div>
        );
    }
  };

  return <div className="MainDash">{switchDash()}</div>;
};

export default MainDash;
