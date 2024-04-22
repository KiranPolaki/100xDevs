import { useEffect, useState } from "react";

export function Todos() {
  const [todos, setTodos] = useState([]);

  async function fetchTodos() {
    const res = await fetch("http://localhost:3000/todos");
    let data = await res.json();
    setTodos(() => data);
  }

  useEffect(() => {
    // * We cant use the Hooks inside the async function and we want to fetch the data
    // * as soon as the UI is rendered so we use this useEffect and IIFE here.
    fetchTodos();
  }, []);

  return (
    <div className="todos-container">
      {todos.map((todo) => {
        return (
          <div key={todo._id} className="todo">
            <h3>{todo.title}</h3>
            <h5>{todo.description}</h5>
            <button>
              {todo.completed === true ? "Completed" : "Complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
