import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Header from "./Header";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OverflowingChildren from "./OverflowingChildren";
import AnimeSunglasses from "./AnimeSunglasses";
import TripleDots from "./TripleDots";
import MusicToggler from "./MusicToggler";
import ParchmentJagged from "./ParchmentJagged";
import Parent from "./Parent";
import Countdown from "./Countdown";
import YoutubePlayer from "./YoutubePlayer";
import PAK from "./PAK";

interface RoutesProps {
  name: string;
  path: string;
  component: React.FC;
}

export const routes: RoutesProps[] = [
  { name: "Home", path: "/", component: App },
  {
    name: "Hearthstone Hand",
    path: "/overflow",
    component: OverflowingChildren,
  },
  { name: "Anime Sunglasses", path: "/sunglasses", component: AnimeSunglasses },
  { name: "Triple dots", path: "/dots", component: TripleDots },
  { name: "Music Toggler", path: "/music", component: MusicToggler },
  { name: "Countdown", path: "/countdown", component: Countdown },
  // { name: "Yt Iframe", path: "/ytIframe", component: YTIframe },
  { name: "YT Player", path: "/ytIframe", component: YoutubePlayer },
  { name: "pak", path: "/pak", component: PAK },
  { name: "Parent div", path: "/parent", component: Parent },
  {
    name: "Parchment jaggedy edge",
    path: "/jagged",
    component: ParchmentJagged,
  },
];

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
