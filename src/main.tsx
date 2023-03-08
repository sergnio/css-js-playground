import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Header from "./Header";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OverflowingChildren from "./OverflowingChildren";
import AnimeSunglasses from "./AnimeSunglasses";
import TripleDots from "./TripleDots";

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
