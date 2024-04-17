/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [todos, setTodos] = useState();
  useEffect(() => {
    axios
      .get("https://sum-server.100xdevs.com/todos")
      .then((res) => setTodos(res.data.todos));
  }, []);

  return (
    <>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </>
  );
}

function Todo({ title, description }) {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
    </>
  );
}

export default App;
