/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import { Cards } from "./components/Cards.jsx";
import { Input } from "./components/Input.jsx";
import "./App.css";

function App() {
  const [name, setName] = useState("sai");
  const [description, setDescription] = useState("whatEver");
  const [creds, setCreds] = useState([
    { id: 1, name: "Linkedin", link: "https://www.example.com" },
    { id: 2, name: "twitter", link: "Whatever.com" },
    { id: 3, name: "Github", link: "Whatever.github.com" },
  ]);
  const [interests, setInterests] = useState([
    { id: 1, name: "anime" },
    { id: 2, name: "code" },
    { id: 3, name: "manga" },
  ]);

  // Todo: can also intoduce new state and implement search
  const [cardData, setCardsData] = useState([]);

  async function fetchCards() {
    const res = await fetch("http://localhost:3000/cards");
    const data = await res.json();
    setCardsData(data.cardsData);
  }

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <>
      <Input />
      <div className="container">
        {/* input */}
        {cardData.map((card) => {
          console.log(card);
          <Cards name={card?.name} description={card?.description} />;
        })}
      </div>
    </>
  );
}

export default App;
