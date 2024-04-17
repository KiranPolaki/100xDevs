/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

// * Do it YourSelf
function App() {
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

// * lecture
// function App() {
//   const [todos, setTodos] = useState([]);
//   useEffect(() => {
//     axios
//       .get("https://sum-server.100xdevs.com/todos")
//       .then((res) => setTodos(res.data.todos));
//   }, []);

//   return (
//     <>
//       {todos.map((todo) => (
//         <Todo key={todo.id} title={todo.title} description={todo.description} />
//       ))}
//     </>
//   );
// }
// function Todo({ title, description }) {
//   return (
//     <>
//       <h2>{title}</h2>
//       <p>{description}</p>
//     </>
//   );
// }

export default App;
