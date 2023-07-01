import React, { useEffect, useRef } from "react";

const YTIframe = ({ videoId = "1v4CjSyr1VA1qqhc4JRdXbLrRqbmMPPec" }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    // This function will be called once the YouTube IFrame API is ready
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("player", {
        height: "390",
        width: "640",
        videoId,
        playerVars: {
          playsinline: 1,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    };

    // This part loads the IFrame Player API code asynchronously.
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    // @ts-ignore
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var player;
    function onYouTubeIframeAPIReady() {
      player = new YT.Player("player", {
        height: "390",
        width: "640",
        videoId,
        playerVars: {
          playsinline: 1,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    }
    // This function will be called when the video player is ready.
    // @ts-ignore
    const onPlayerReady = (event) => {
      event.target.playVideo();
    };

    // Variable to track if the video has played for 6 seconds.
    let done = false;

    // This function will be called when the player's state changes.
    // @ts-ignore
    const onPlayerStateChange = (event) => {
      if (event.data === window.YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
      }
    };

    // This function stops the video playback
    const stopVideo = () => {
      // @ts-ignore
      playerRef.current.stopVideo();
    };
  }, [videoId]);

  return (
    <div>
      {/* The <iframe> (and video player) will replace this <div> tag. */}
      <div id="player"></div>
    </div>
  );
};

export default YTIframe;
