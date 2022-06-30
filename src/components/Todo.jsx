import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";


const timeElements = {
  SECOND:1000,
  MINUTE:60  ,
  HOUR  :60 * 60,
  DAY   :24 * 60 * 60,
  WEEK  :7  * 24 * 60 * 60,
  MONTH :30 * 24 * 60 * 60,
  YEAR  :12 * 30 * 24 * 60 * 60,
}

const Todo = ({ todo,deleteMe }) => {
  const [period,setPeriod ] = useState(`${Math.round((Date.now() - todo.time) / timeElements.SECOND)} secs ago`)
  useEffect(() => {
    const timeBetween = Math.round((Date.now() - todo.time) / timeElements.SECOND)
    const updatePeriod = () => {
      if (timeBetween > timeElements.MINUTE) setPeriod(`${Math.round(timeBetween / timeElements.MINUTE)} mins ago`)
      if (timeBetween > timeElements.HOUR) setPeriod(`${Math.round(timeBetween / timeElements.HOUR)} hours ago`)
      if (timeBetween > timeElements.DAY) setPeriod(`${Math.round(timeBetween / timeElements.DAY)} days ago`)
      if (timeBetween > timeElements.WEEK) setPeriod(`${Math.round(timeBetween / timeElements.WEEK)} weeks ago`)   
    }
    updatePeriod()
  },[])
  return (
    <>
      <div className="todo">
        <div className="todo-details">
          <p>{todo.data}</p>
          <p className="created-time">{period}</p>
        </div>
          <EditIcon className="edit-icon" />
          <DeleteIcon className="delete-icon" onClick={deleteMe}/>
      </div>
    </>
  );
};

export default Todo;
