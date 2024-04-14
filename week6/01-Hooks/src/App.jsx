import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <HeaderWithButton />
      <Header title={"raman"} />
    </div>
  );
}

function HeaderWithButton() {
  const [title, setTitle] = useState("Sai");
  return (
    <>
      <button
        onClick={() => {
          setTitle(Math.random());
        }}
      >
        Click me to change the title
      </button>
      <Header title={title} />
    </>
  );
}

// eslint-disable-next-line react/prop-types
function Header({ title }) {
  return <div>MMy name is {title}</div>;
}

export default App;
