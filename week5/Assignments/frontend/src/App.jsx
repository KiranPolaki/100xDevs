/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Cards } from "./components/Cards.jsx";
import { Input } from "./components/Input.jsx";
import "./App.css";

function App() {
  const [name, setName] = useState("sai");
  const [description, setDescription] = useState("whatEver");
  const [creds, setCreds] = useState([
    { id: 1, name: "Linkedin", link: "https://www.example.com" },
    { id: 2, name: "twitter", link: "Whatever.com" },
  ]);
  const [interests, setInterests] = useState([
    { id: 1, name: "anime" },
    { id: 2, name: "code" },
    { id: 3, name: "manga" },
  ]);

  useEffect(() => {
    // ! fetch it here DB
  }, []);

  return (
    <>
      {/* input */}
      <Input />
      <Cards
        name={name}
        description={description}
        interests={interests}
        creds={creds}
      />
    </>
  );
}

export default App;
