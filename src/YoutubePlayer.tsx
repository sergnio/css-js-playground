// YouTubePlayer.tsx
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const PlayerWrapper = styled.div`
  //width: 100%;
  //height: 100%;
  width: 500px;
  height: 500px;
`;

// interface YouTubePlayerProps {
//   videoId: string;
// }

// const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId }) => {
export default () => {
  const videoId = "SvkMwizUQCs";

  const playerRef = useRef<HTMLDivElement | null>(null);
  const playerInstance = useRef<YT.Player | null>(null);

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      // tag.src = `https://youtube.googleapis.com/embed/?partnerid=30&docid=${videoId}`;
      const firstScriptTag = document.getElementsByTagName("script")[0];
      if (firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      }
    }

    window.onYouTubeIframeAPIReady = () => {
      if (playerRef.current) {
        playerInstance.current = new window.YT.Player(playerRef.current, {
          videoId,
          playerVars: {
            autoplay: 0,
            controls: 1,
            rel: 0,
            modestbranding: 1,
          },
        });
      }
    };
  }, [videoId]);

  return <PlayerWrapper ref={playerRef}></PlayerWrapper>;
};
