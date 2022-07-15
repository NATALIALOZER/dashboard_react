import React from "react";
import "./Blog.css";
import { UilCancel, UilEditAlt, Uil10Plus } from "@iconscout/react-unicons";

const Blog = () => {
  return (
    <div className="BlogLayout">
      <div className="BlogLeftSide">
        <div className="item">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          neque accusantium fugit quos qui, blanditiis vitae tempore impedit
          quaerat inventore esse quibusdam explicabo enim maiores omnis sequi,
          est eius illum.
        </div>
      </div>

      <div className="BlogRightSide">
        <button className="add-button">
          <Uil10Plus></Uil10Plus>
        </button>
        <button className="delete-button">
          <UilCancel></UilCancel>
        </button>
        <button className="edit-button">
          <UilEditAlt></UilEditAlt>
        </button>
      </div>
    </div>
  );
};

export default Blog;
