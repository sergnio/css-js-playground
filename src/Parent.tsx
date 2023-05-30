import React from "react";
import styled from "styled-components";

const ParentDiv = styled.div`
  position: relative;
`;

const DoneButton = styled.button`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 1em;
  /* Other styles for your button */
`;

const MyComponent = () => (
  <ParentDiv>
    <div>Your variable length content goes here</div>
    <DoneButton>Done</DoneButton>
  </ParentDiv>
);

export default MyComponent;
