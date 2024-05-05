/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";

function useTodos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      setTodos(res.data.todos);
      setLoading(false);
    });
  }, []);

  return { todos, loading };
}

function useTodosInterval(n) {
  const [todos2, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const value = setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      });
    }, n * 1000);

    return () => {
      clearInterval(value);
    };
  }, [n]);

  return { todos2, loading };
}

function App() {
  const { todos, loading } = useTodos();
  const { todos2, loading2 } = useTodosInterval(100);

  if (loading2) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {todos2.map((todo) => (
        <Track key={todo.id} todo={todo} />
      ))}
    </>
  );
}

function Track({ todo }) {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  );
}

export default App;
