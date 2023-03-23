// DeleteButton.tsx
import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: #f44336;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  transition-duration: 0.4s;
  &:hover {
    background-color: #e57373;
    color: white;
  }
`;

interface DeleteButtonProps {
  onDelete: () => void;
}

export default ({ onDelete }: DeleteButtonProps) => {
  const [confirmation, setConfirmation] = useState(false);

  const handleClick = () => {
    if (confirmation) {
      onDelete();
    } else {
      setConfirmation(true);
    }
  };

  const handleBlur = () => {
    setConfirmation(false);
  };

  return (
    <Button onClick={handleClick} onBlur={handleBlur}>
      {confirmation ? "Click to confirm" : "Delete"}
    </Button>
  );
};
