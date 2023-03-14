import React, { useState } from "react";
import styled from "styled-components";

interface MusicToggleProps {
  isMuted: boolean;
  toggleMute: () => void;
}

const MusicToggleContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
`;

const MusicToggleIcon = styled.div`
  font-size: 36px;
  cursor: pointer;
`;

const MusicToggle: React.FC<MusicToggleProps> = ({ isMuted, toggleMute }) => {
  return (
    <MusicToggleContainer>
      {isMuted ? (
        <MusicToggleIcon onClick={toggleMute}>🎵</MusicToggleIcon>
      ) : (
        <MusicToggleIcon onClick={toggleMute}>🔇</MusicToggleIcon>
      )}
    </MusicToggleContainer>
  );
};

export default () => {
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div>
      <MusicToggle isMuted={isMuted} toggleMute={toggleMute} />
      {/* Your other components go here */}
    </div>
  );
};
