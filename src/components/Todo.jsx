import React, { useEffect, useState} from "react"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import { timeElements } from "../helpers/timeElements"

const Todo = ({ todo,dispatch }) => {
  const [editTodo,setEditedTodo] = useState(todo.data)
  const [period,setPeriod ] = useState(`${Math.floor((Date.now() - todo.time) / timeElements.SECOND)} secs`)

  useEffect(()=>{
    const updateTime = () => {
      const timeDiff = Math.floor(Math.floor((Date.now() - todo.time) / timeElements.SECOND))
      timeDiff >= timeElements.MINUTE && timeDiff < timeElements.HOUR && setPeriod(`${Math.floor(timeDiff / timeElements.MINUTE)} mins`)
      timeDiff >= timeElements.HOUR && timeDiff < timeElements.DAY  && setPeriod(`${Math.floor(timeDiff / timeElements.HOUR)} hrs`)
    }
    updateTime()
  },[])

  return (
    <>
      <div className="todo">
        <div className="todo-details">
          <p>{todo.data}</p>
          <p className="created-time">{period} ago</p>
        </div>
          <label htmlFor="edit">
            <EditIcon className="edit-icon" onClick={() => dispatch({type:'EDIT_ENABLE',payload:todo.id})}/>
          </label>
          <DeleteIcon className="delete-icon" onClick={() => dispatch({type:'DELETE_TODO',payload:todo.id})}/>
      </div>

      {todo.edit && <div className="edit-todo">
            <input style={{color:'white',fontSize:'16px'}} id="edit" value={editTodo} onChange={(e)=>setEditedTodo(e.target.value)}/>
            <button className="btn-update" onClick={() => dispatch({type:'UPDATE_TODO',payload:{id:todo.id,data:editTodo}})}>Update</button>
        </div>}
    </>
  )
}

export default Todo;