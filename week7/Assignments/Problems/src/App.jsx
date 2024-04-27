/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Component1 } from "./components/Component1";
import { Component2 } from "./components/Component2";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Component1 name={"@saiiii_k"} age={"21"} place={"Hyderabad"} />
      <Component2 />
    </div>
  );
}

export default App;
