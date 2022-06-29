import "./styles.css";
import { useState, useRef, useEffect } from "react";
import Todo from "./components/Todo";



const getTodos = () => {
    const localTodos = localStorage.getItem('local_todos')
    if (localTodos) {
      return JSON.parse(localStorage.getItem('local_todos'));
    }
    else{
      return [];
    }
}

export default function App() {
  const [todos, setTodos] = useState(getTodos());
  const todoRef = useRef();

  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.random().toString(36).substring(2, 9),
      time: Number(Math.round(Date.now() / 1000)),
      data: todoRef.current.value
    };

    if (newTodo.data) setTodos((prev) => [...prev, newTodo]);
    todoRef.current.value = "";
  };
  const deleteTodo = (index) => {
    setTodos(todos.filter((todo) => todo.id !== index))
  }

  useEffect(() => {
    if (todos) localStorage.setItem('local_todos',JSON.stringify(todos))
  },[todos])

  return (
    <div className="App">
      <div className="container">
        <form onSubmit={addTodo} className="add-todo-form">
          <input className="todo-input" ref={todoRef} placeholder="Todo..." />
          <input className="submit" type="submit" value="Add" />
        </form>
        <div className="todos">
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} deleteMe={()=>deleteTodo(todo.id)}/>
          ))}
        </div>
        <div className="btn-wrapper">
            <button className="btn-clearall" onClick={()=>setTodos([])}>
              Clear All
            </button>
        </div>
      </div>
    </div>
  );
}
