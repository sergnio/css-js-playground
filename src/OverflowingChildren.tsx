import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./Overflow.css";

const highlightChild = (child: HTMLElement) => {
  const parent = child.parentElement as HTMLElement;
  const parentRect = parent.getBoundingClientRect();
  const childRect = child.getBoundingClientRect();

  if (childRect.left < parentRect.left) {
    parent.scrollLeft -= parentRect.left - childRect.left;
  } else if (childRect.right > parentRect.right) {
    parent.scrollLeft += childRect.right - parentRect.right;
  }
};

function App() {
  const [numChildren, setNumChildren] = useState<number>(8);
  const [selectedCardIndex, setSelectedCardIndex] = useState(-1);

  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const handleChildClick = (index: number) => {
    setHighlightedIndex(index);
  };

  useEffect(() => {
    const highlightedChild = document.getElementById(
      `child-${highlightedIndex}`
    );

    if (highlightedChild) {
      highlightChild(highlightedChild);
    }
  }, [highlightedIndex]);

  const array = Array.from({ length: numChildren }, (_, index) => index);

  return (
    <div className="App">
      <h1>Pericle Playground</h1>
      <button
        onClick={() => {
          setNumChildren(numChildren + 1);
        }}
      >
        add more
      </button>
      <div className="parent">
        {array.map((card: number, index) => (
          <div
            className="child"
            key={index}
            id={`child-${index}`}
            style={{
              border: highlightedIndex === index ? "2px solid red" : "none",
            }}
            onClick={() => handleChildClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
