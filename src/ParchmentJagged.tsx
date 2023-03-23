import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import SeenImagesProvider, { useShownImages } from "./SeenImagesProvider";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const BigImage = styled.img<{ loaded: boolean }>`
  position: absolute;
  //width: 100%;
  //height: 100%;
  width: 100px;
  height: 100px;
  opacity: ${({ loaded }) => (loaded ? "1" : "0")};
  transition: opacity 2s ease-in-out;
`;

const Content = styled.div<{ visible: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  transition: opacity 2s ease-in-out;
`;

const Spinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Jagged = ({
  url = "https://www.wikihow.com/images/thumb/f/fc/Get-the-URL-for-Pictures-Step-1-Version-6.jpg/aid597183-v4-728px-Get-the-URL-for-Pictures-Step-1-Version-6.jpg.webp",
}) => {
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(false);
  const [played, setPlayed] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const { seenUrls, addSeenUrl } = useShownImages();

  useEffect(() => {
    if (!played || imageRef.current?.src !== url) {
      setLoaded(false);
      setVisible(false);

      const image = new Image();
      image.src = url;

      image.onload = () => {
        setLoaded(true);

        setTimeout(() => {
          setVisible(true);
          addSeenUrl(url);
        }, 2000);
      };

      console.log("image", imageRef.current);
      imageRef.current?.setAttribute("src", url);
      setPlayed(true);
    }
  }, [url]);

  return (
    <Container>
      {!loaded && <Spinner />}
      <BigImage src={url} ref={imageRef} loaded={loaded} />
      <Content visible={visible}>Your content goes here!</Content>
    </Container>
  );
};

export default () => (
  <SeenImagesProvider>
    <Jagged />
  </SeenImagesProvider>
);
