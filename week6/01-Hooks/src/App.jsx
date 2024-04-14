import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <HeaderWithButton />
      <Header title={"raman"} />
    </div>
  );
}

// * Method 1 is to push down the state as low as possible
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

// * Method 2 is react memo
// eslint-disable-next-line react/prop-types
const Header = React.memo(function Header({ title }) {
  return <div>MMy name is {title}</div>;
});

export default App;
