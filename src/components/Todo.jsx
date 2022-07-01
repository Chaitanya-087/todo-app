import React, { useEffect, useState } from "react"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"

const Todo = ({ todo, dispatch }) => {
  const [editTodo, setEditedTodo] = useState(todo.data)
  const [period, setPeriod] = useState(`0 secs`)

  useEffect(() => {
    const updateTime = () => {
      const timeDiff = Math.floor((Date.now() - todo.time) / 1000)
      timeDiff < 60 && setPeriod(`${timeDiff} secs`)
      timeDiff >= 60 && timeDiff < 3600 && setPeriod(`${Math.floor(timeDiff / 60)} mins ${Math.floor((timeDiff / 60 - Math.floor(timeDiff / 60)) * 60)} secs`)
      timeDiff >= 3600 && setPeriod(`${Math.floor(timeDiff / 3600)} hrs ${Math.floor((timeDiff / 3600 - Math.floor(timeDiff / 3600)) * 3600 / 60)} mins`)
    }
    updateTime()
  }, [todo.edit])

  const editFormHandle = (e) => {
    e.preventDefault()
    editTodo && dispatch({ type: 'UPDATE_TODO', payload: { id: todo.id, data: editTodo } })
    dispatch({type:'SORT_TODOS'})
  }
  return (
    <>
      <div className="todo">
        <div className="todo-details">
          <p>{todo.data}</p>
          <p className="created-time">{period} ago</p>
        </div>
        <label htmlFor="edit" name='edit'>
          <EditIcon className="edit-icon" onClick={() => dispatch({ type: 'EDIT_ENABLE', payload: {id:todo.id }})} />
        </label>
        <DeleteIcon className="delete-icon" onClick={() => dispatch({ type: 'DELETE_TODO', payload:{ id:todo.id }})} />
      </div>

      {
        todo.edit && 
          <form onSubmit={editFormHandle} className="edit-todo">
            <input style={{ color: 'white', fontSize: '16px' }} value={editTodo} id="edit" onChange={(e) => setEditedTodo(e.target.value)} />
            <input type='submit' value='Update' className="btn-update" />
          </form>
      }
    </>
  )
}

export default Todo;