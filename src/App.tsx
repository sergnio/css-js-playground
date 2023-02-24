import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const cards = [
    {
      id: 1,
      title: "Card 1",
    },
    {
      id: 2,
      title: "Card 2",
    },
    {
      id: 3,
      title: "Card 3",
    },
    {
      id: 4,
      title: "Card 4",
    },
    {
      id: 5,
      title: "Card 5",
    },
  ];
  const [numCards, setNumCards] = useState(0);
  const [selectedCardIndex, setSelectedCardIndex] = useState(-1);

  const CARD_ANGLE = 30; // in degrees
  const angle = CARD_ANGLE / (numCards - 1);

  return (
    <div className="App">
      <h1>Pericle Playground</h1>
      <button
        onClick={() => {
          setNumCards(numCards + 1);
        }}
      >
        add more
      </button>
      <div className="card-hand">
        {cards.map((card, index) => (
          // <div className="card-container" key={index}>
          <div className="card" key={index}>
            <h2>{card.title}</h2>
            <button onClick={() => setSelectedCardIndex(index)}>Select</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
