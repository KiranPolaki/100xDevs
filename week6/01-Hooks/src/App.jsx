/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./App.css";

// * Hooks - you get access to lifecycle features like as the class based components, onComponentMount...
function App() {
  const [todos, setTodos] = useState([]);

  async function fetchData() {
    const res = await fetch("https://sum-server.100xdevs.com/todos");
    const data = await res.json();
    setTodos(data.todos);
  }

  useEffect(() => {
    setInterval(() => {
      fetchData();
    }, 10000);
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
}

// * Assignment 3 - Wrapper Components
// function App() {
//   return (
//     <CardWrapper>
//       <TextComponent />
//     </CardWrapper>
//   );
// }
// function TextComponent() {
//   return <div>hi</div>;
// }
// function CardWrapper({ children }) {
//   return <div>{children}</div>;
// }

// * Assignment 2 - keys
// let count = 4;
// function App() {
//   const [todos, setTodos] = useState([
//     {
//       id: 1,
//       title: "ajfhdaj",
//       description: "ajkdfhakjfd",
//     },
//     {
//       id: 2,
//       title: "ajfhdaj",
//       description: "ajkdfhakjfd",
//     },
//     {
//       id: 3,
//       title: "ajfhdaj",
//       description: "ajkdfhakjfd",
//     },
//   ]);
//   function addTodo() {
//     setTodos([
//       ...todos,
//       {
//         id: count++,
//         title: Math.random(),
//         description: Math.random(),
//       },
//     ]);
//   }
//   return (
//     <>
//       <div className="inputfield">
//         <input type="text" placeholder="title" />
//         <input type="text" placeholder="description" />
//         <button onClick={addTodo}>Add</button>
//       </div>
//       <div className="todoscontainer">
//         {todos.map((todo) => {
//           return (
//             <div key={todo.id}>
//               <h4>{todo.title}</h4>
//               <h4>{todo.description}</h4>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// * Assignment 1 - Rerendering
// function App() {
//   return (
//     <div>
//       <HeaderWithButton />
//       <Header title={"raman"} />
//     </div>
//   );
// }

// // * Method 1 is to push down the state as low as possible
// function HeaderWithButton() {
//   const [title, setTitle] = useState("Sai");
//   return (
//     <>
//       <button
//         onClick={() => {
//           setTitle(Math.random());
//         }}
//       >
//         Click me to change the title
//       </button>
//       <Header title={title} />
//     </>
//   );
// }

// // * Method 2 is react memo
// // eslint-disable-next-line react/prop-types
// const Header = React.memo(function Header({ title }) {
//   return <div>MMy name is {title}</div>;
// });

export default App;
