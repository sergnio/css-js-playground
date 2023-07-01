import React, { useState } from "react";

export default () => {
  const [counters, setCounters] = useState({
    V: 0,
    P: 0,
    K: 0,
  });

  const incrementCounter = (counterKey) => {
    setCounters({
      ...counters,
      [counterKey]: counters[counterKey] + 1,
    });
  };

  const decrementCounter = (counterKey) => {
    setCounters({
      ...counters,
      [counterKey]: counters[counterKey] - 1,
    });
  };

  return (
    <div>
      <h1>Prakriti Quiz</h1>
      {Object.keys(counters).map((key) => (
        <div key={key}>
          <h2>
            {key} Counter: {counters[key]}
          </h2>
          <button onClick={() => decrementCounter(key)}>-</button>
          <button onClick={() => incrementCounter(key)}>+</button>
        </div>
      ))}
    </div>
  );
};
