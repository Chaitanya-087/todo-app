import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Todo = ({ todo,deleteMe }) => {
  const [currTime, setCurrTime] = useState(() => {
    return todo.time;
  });
  
  useEffect(() => {
    setCurrTime(Math.round(Date.now() / 1000));
  },[]);
  return (
    <>
      <div className="todo">
        <div className="todo-details">
          <p>{todo.data}</p>
          <p className="created-time">{String(currTime - todo.time)}</p>
        </div>
          <EditIcon className="edit-icon" />
          <DeleteIcon className="delete-icon" onClick={deleteMe}/>
      </div>
    </>
  );
};

export default Todo;
