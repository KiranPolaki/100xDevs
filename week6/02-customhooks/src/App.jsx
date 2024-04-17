/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import "./App.css";

// * lecture Code UseMemo
// * Key note : Although both the useMemo and useEffect does the same thing like almost, but in useEffect a new useState variable has to be introduced
function App() {
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
// function App() {
//   const [id, setId] = useState(1);
//   return (
//     <div>
//       {/* We can also use the wrapper classes here */}
//       <Button value={1} setId={setId} />
//       <Button value={2} setId={setId} />
//       <Button value={3} setId={setId} />
//       <Button value={4} setId={setId} />
//       <Todo id={id}></Todo>
//     </div>
//   );
// }
// function Button({ value, setId }) {
//   return (
//     <>
//       <button onClick={() => setId(value)}>{value}</button>
//     </>
//   );
// }
// function Todo({ id }) {
//   const [todo, setTodo] = useState({});
//   // * When anything in the dependency array changes the useEffect runs
//   // ! Must keep it empty if nothing or else infine no of req will be made
//   useEffect(() => {
//     axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`).then((res) => {
//       setTodo(res.data.todo);
//     });
//   }, [id]);
//   return (
//     <>
//       <h1>{todo.title}</h1>
//       {todo.description}
//     </>
//   );
// }

// * lecture Code UseEffects
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
