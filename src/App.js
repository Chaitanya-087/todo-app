import "./styles.css";
import { useState, useRef, useEffect, useReducer } from "react"
import Todo from "./components/Todo"
import TodoReducer from "./helpers/TodoReducer";

const getTodos = () => {
    const localTodos = localStorage.getItem('local_todos')
    if (localTodos) {
      return JSON.parse(localStorage.getItem('local_todos'))
    }
    else{
      return [];
    }
}

export default function App() {
  const [value,setValue] = useState('')
  const [todos,dispatch] = useReducer(TodoReducer,getTodos())

  const newTodo = (data) => {
    return {id:Math.random().toString(36).substring(2, 9),time: Date.now(),data: data, edit: false}
  }

  const addTodo = (e) => {
    e.preventDefault();
    value && dispatch({type:'ADD_TODO',payload:newTodo(value)})
    setValue('')
  }

  useEffect(() => {
    if (todos) localStorage.setItem('local_todos',JSON.stringify(todos))
  },[todos])

  return (
    <div className="App">
      <div className="container">
        <form onSubmit={addTodo} className="add-todo-form">
          <input className="todo-input" value={value} placeholder="Todo..." onChange={(e)=>setValue(e.target.value)} />
          <input className="submit" type="submit" value="Add" />
        </form>
        <div className="todos">
          {todos.map((todo) => (
            <Todo key={todo.id} todo = {todo}  dispatch={dispatch}/>
          ))}

        </div>
        <div className="btn-wrapper">
            <button className="btn-clearall" onClick={() => dispatch({type:'RESET'})}>
              Clear All
            </button>
        </div>
      </div>
    </div>
  );
}
