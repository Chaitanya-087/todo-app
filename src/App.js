import "./styles.css";
// import Todo from "./components/Todo";
import { useState, useRef, useEffect } from "react";
import Todo from "./components/Todo";

export default function App() {
  const [todos, setTodos] = useState([]);
  const todoRef = useRef();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")));
  }, []);

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

  return (
    <div className="App">
      <form onSubmit={addTodo} className="add-todo-form">
        <input className="todo-input" ref={todoRef} placeholder="Todo..." />
        <input className="submit" type="submit" value="Add" />
      </form>
      <div className="Todos">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}
