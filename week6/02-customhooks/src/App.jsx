/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import "./App.css";

// * Leacture Use CallBack
// * To Avoid the child components which depends on referncial equality and optimizing we do use this
function App() {
  const [count, setCount] = useState(0);
  const changesRef = useCallback(() => {
    console.lof("The value is same but refernce changes");
  }, []);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>{count}</button>
    </>
  );
}

// * Referencial Equality : when we define any function or variable they although value is equal they are not referncially equal(diff places in memeory)
// * Across the reRenders when we define the functions with refernce those functions get changed not in value but in refernce
let countNS = 0;
function App3() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>{count}</button>
      <button onClick={() => countNS++}>{countNS}</button>
    </>
  );
}

// * lecture Code UseMemo
// * Key note : Although both the useMemo and useEffect does the same thing like almost, but in useEffect a new useState variable has to be introduced
// ! Use Memo is for memory
// ! Use Effect is for Effects
function App2() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(1);
  // ! this expensive function is rendering when eve rthe counter is increased as tehya r ein the same component
  let c = useMemo(() => {
    console.log("Memo is called");
    let finalCOunt = 0;
    for (let i = 0; i <= value; i++) {
      finalCOunt++;
    }
    return finalCOunt;
  }, [value]);
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <h2>Sum is {value}</h2>
      <button onClick={() => setCount(count + 1)}>Counter {count}</button>
    </>
  );
}

// * Do it YourSelf
function App1() {
  const [id, setId] = useState(1);
  return (
    <div>
      {/* We can also use the wrapper classes here */}
      <Button value={1} setId={setId} />
      <Button value={2} setId={setId} />
      <Button value={3} setId={setId} />
      <Button value={4} setId={setId} />
      <Todo id={id}></Todo>
    </div>
  );
}
function Button({ value, setId }) {
  return (
    <>
      <button onClick={() => setId(value)}>{value}</button>
    </>
  );
}
function Todo({ id }) {
  const [todo, setTodo] = useState({});
  // * When anything in the dependency array changes the useEffect runs
  // ! Must keep it empty if nothing or else infine no of req will be made
  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`).then((res) => {
      setTodo(res.data.todo);
    });
  }, [id]);
  return (
    <>
      <h1>{todo.title}</h1>
      {todo.description}
    </>
  );
}

// * lecture Code UseEffects
function App0() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("https://sum-server.100xdevs.com/todos")
      .then((res) => setTodos(res.data.todos));
  }, []);
  return (
    <>
      {todos.map((todo) => (
        <Todo0
          key={todo.id}
          title={todo.title}
          description={todo.description}
        />
      ))}
    </>
  );
}
function Todo0({ title, description }) {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
    </>
  );
}

export default App;
