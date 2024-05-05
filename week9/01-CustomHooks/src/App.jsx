/* eslint-disable react-hooks/exhaustive-deps */
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

function useIsOnline() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  useEffect(() => {
    window.addEventListener("online", () => {
      setIsOnline(true);
    });
    window.addEventListener("offline", () => {
      setIsOnline(false);
    });

    return () => {
      window.removeEventListener("online", () => {
        setIsOnline(true);
      });
      window.removeEventListener("offline", () => {
        setIsOnline(false);
      });
    };
  }, []);
  return isOnline;
}

const useMousePointer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return position;
};

function useInterval(fn, time) {
  useEffect(() => {
    const val = setInterval(() => fn(), time);
    return () => {
      clearInterval(val);
    };
  }, []);
}

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(timerId);
  }, [value, delay]);
  return debouncedValue;
};

function App() {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 500);
  return (
    <>
      <p>{debouncedValue}</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search..."
      />
    </>
  );
}

function App4() {
  const [count, setCount] = useState(0);
  useInterval(() => {
    setCount((c) => c + 1);
  }, 1000);
  return <>{count}</>;
}

function App3() {
  const mousePointer = useMousePointer();

  return (
    <div>
      Your mouse position is {mousePointer.x} {mousePointer.y}
    </div>
  );
}

function App2() {
  const isOnline = useIsOnline();
  return <div>{isOnline ? "You are online" : "You are offline"}</div>;
}

function App1() {
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
