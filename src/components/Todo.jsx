import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Todo = ({ todo }) => {
  const [currTime, setCurrTime] = useState(() => {
    return todo.time;
  });

  setInterval(() => {
    setCurrTime(Math.round(Date.now() / 1000));
  }, 1000);

  return (
    <>
      <div className="todo">
        <div className="todo-details">
          <p>{todo.data}</p>
          <p className="created-time">{String(currTime - todo.time)}</p>
        </div>
        <div className="edit-btn">
          <EditIcon className="edit-icon" />
        </div>
        <div className="delete-btn">
          <DeleteIcon className="delete-icon" />
        </div>
      </div>
    </>
  );
};

export default Todo;
