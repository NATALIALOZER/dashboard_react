import React, { useState } from "react";
import "./Blog.css";
import { UilCancel, UilEditAlt, Uil10Plus } from "@iconscout/react-unicons";
import { NotesData } from "../../Data/Data";
import CreateEditDialog from "../CreateEditDialog/CreateEditDialog";
import { Button } from "@mui/material";

const Blog = () => {
  const [deleteMode, setDeleteMode] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onDelete = () => {
    setDeleteMode(!deleteMode);
  };

  const setDeleteButtons = () => {
    if (deleteMode) {
      return (
        <Button
          onClick={(event) => {
            const targetItem = event.target.closest(".item");
            targetItem.style.display = "none";
            NotesData.pop(NotesData.find((item) => item.id === targetItem.id));
            if (NotesData.length <= 0) setDeleteMode(false);
          }}
        >
          <UilCancel></UilCancel>
        </Button>
      );
    }
  };

  return (
    <div className="BlogLayout">
      <div className="BlogLeftSide">
        {NotesData.map((item, index) => {
          return (
            <div
              className={"item" + (deleteMode ? " delete-mode" : "")}
              key={index}
              id={item.id}
            >
              <div>{item.text}</div>
              <div className="delete-checkbox">{setDeleteButtons()}</div>
            </div>
          );
        })}
      </div>

      <div className="BlogRightSide">
        <button className="add-button" onClick={handleClickOpen}>
          <Uil10Plus></Uil10Plus>
        </button>
        <button className="delete-button" onClick={onDelete}>
          <UilCancel></UilCancel>
        </button>
        <button className="edit-button">
          <UilEditAlt></UilEditAlt>
        </button>

        <CreateEditDialog open={open} handleClose={handleClose} />
      </div>
    </div>
  );
};

export default Blog;
