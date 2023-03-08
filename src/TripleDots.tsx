import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: relative;
`;

const MenuButton = styled.button`
  background: transparent;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 0;
`;

const Icon = styled.div`
  display: inline-block;
  position: relative;
  width: 1rem;
  height: 1rem;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    background-color: transparent;
    // colors of the actual dots
    border-bottom: 4px dotted hsl(38.9, 59.2%, 57.8%);
    top: 50%;
    transform: translateY(-50%) rotate(90deg);
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`;

const Menu = styled.ul`
  background-color: hsl(0, 0%, 0%, 85%);
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  left: 1em;
  z-index: 1;
`;

const MenuItem = styled.li`
  cursor: pointer;
  border-bottom: 1px solid #f2f2f2;
  padding: 0.5rem;
  text-align: center;

  &:last-child {
    border-bottom: none;
  }
`;

export default () => {
  const [isOpen, setIsOpen] = useState(false);

  const items = ["Item 1", "Item 2", "Item 3"];

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <MenuButton onClick={handleToggleMenu}>
        <Icon />
      </MenuButton>
      {isOpen && (
        <Menu>
          {items.map((item) => (
            <MenuItem
              onClick={() => {
                handleToggleMenu();
              }}
              key={item}
            >
              {item}
            </MenuItem>
          ))}
        </Menu>
      )}
    </Container>
  );
};
