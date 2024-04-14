import React, { useState } from "react";
import "./App.css";

// * Assignment 2
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "ajfhdaj",
      description: "ajkdfhakjfd",
    },
    {
      id: 2,
      title: "ajfhdaj",
      description: "ajkdfhakjfd",
    },
    {
      id: 3,
      title: "ajfhdaj",
      description: "ajkdfhakjfd",
    },
  ]);
  function addTodo() {
    setTodos([
      ...todos,
      {
        id: 4,
        title: Math.random(),
        description: Math.random(),
      },
    ]);
  }
  return (
    <>
      <div className="inputfield">
        <input type="text" placeholder="title" />
        <input type="text" placeholder="description" />
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="todoscontainer">
        {todos.map((todo) => {
          return (
            <>
              <h4>{todo.title}</h4>
              <h4>{todo.description}</h4>
            </>
          );
        })}
      </div>
    </>
  );
}

// * Assignment 1
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
