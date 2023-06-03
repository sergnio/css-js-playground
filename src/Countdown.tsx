import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const glow = keyframes`
  0% { text-shadow: 0 0 10px #ffaa33, 0 0 20px #ffaa33, 0 0 30px #ffaa33, 0 0 40px #ffaa33; }
  100% { text-shadow: 0 0 20px #ffaa33, 0 0 30px #ffaa33, 0 0 40px #ffaa33, 0 0 50px #ffaa33, 0 0 60px #ffaa33; }
`;

const CountdownContainer = styled.div`
  text-align: center;
  color: #ffaa33;
  animation: ${glow} 2s ease-in-out infinite alternate;
`;

const CountdownNumber = styled.div`
  font-size: 3em;
  font-weight: bold;
`;

const CountdownText = styled.div`
  font-size: 1em;
`;

const Countdown = () => {
  const targetDate = new Date(2023, 5, 17);
  const calculateCountdown = () => {
    const now = new Date();
    const distance = targetDate.getTime() - now.getTime();
    const days = Math.max(Math.floor(distance / (1000 * 60 * 60 * 24)), 0);
    return days;
  };

  const [days, setDays] = useState(calculateCountdown());

  useEffect(() => {
    const timer = setInterval(() => {
      setDays(calculateCountdown());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <CountdownContainer>
      <CountdownNumber>{days}</CountdownNumber>
      <CountdownText>{days === 1 ? "day" : "days"}</CountdownText>
    </CountdownContainer>
  );
};

export default Countdown;
