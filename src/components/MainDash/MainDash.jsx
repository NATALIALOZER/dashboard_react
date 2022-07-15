import React from "react";
import Table from "../Table/Table";
import Cards from "../Cards/Cards";
import "./MainDash.css";
import Blog from "../Blog/Blog";

const MainDash = (props) => {
  const project = () => {
    console.log(props.currentTab);
    switch (props.currentTab) {
      case 1:
        return (
          <div className="Blog">
            <h1>Blog</h1>
            <Blog />
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

  return <div className="MainDash">{project()}</div>;
};

export default MainDash;
