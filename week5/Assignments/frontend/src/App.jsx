/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import { Cards } from "./components/Cards.jsx";
import { Input } from "./components/Input.jsx";
import "./App.css";

function App() {
  // Todo: can also intoduce new state and implement search
  const [cardData, setCardsData] = useState([]);
  const [reload, setReload] = useState(false);

  async function fetchCards() {
    const res = await fetch("http://localhost:3000/cards");
    const data = await res.json();
    setCardsData(data.cardsData);
  }

  useEffect(() => {
    fetchCards();
  }, [reload]);

  function refetchData() {
    setReload((prev) => !prev);
  }

  return (
    <>
      {console.log("Rerended App")}
      <Input refetchData={refetchData} />
      <div className="container">
        {cardData.map((card) => (
          <Cards
            key={card._id}
            name={card.name}
            description={card.description}
            linkedin={card.linkedin}
            twitter={card.twitter}
            github={card.github}
            interests={card.interests}
          />
        ))}
      </div>
    </>
  );
}

export default App;
