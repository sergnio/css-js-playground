import styled, { keyframes } from "styled-components";

const flashAnimation = keyframes`
  0% { transform: translateX(-100%); opacity: 0; } 
  50% { transform: translateX(70%);  opacity: 1; } 
  100% { transform: translateX(100%); opacity: 0; }
`;

const Flash = styled.div`
  width: 100px;
  height: 100px;
  background-color: #f7d068;
  position: relative;
  overflow-x: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    transform: translateX(-100%);
    animation: ${flashAnimation} 1s linear forwards;
    animation-delay: 0.5s;
  }
`;

export default () => {
  return <Flash>AnimeSunglasses</Flash>;
};
