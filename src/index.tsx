import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { getPageContent } from "./data/pageContent";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("No se encontró el elemento root para montar la aplicación.");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App page={getPageContent(window.location.pathname)} />
  </React.StrictMode>,
);
