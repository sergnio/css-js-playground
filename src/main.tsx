import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Header from "./Header";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OverflowingChildren from "./OverflowingChildren";

export const routes = {
  home: "/",
  overflow: "/overflow",
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={routes.home} index element={<App />} />
        <Route path={routes.overflow} element={<OverflowingChildren />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
