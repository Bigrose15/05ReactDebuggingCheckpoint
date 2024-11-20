import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainApp from "./components/MainApp.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);
