import React from "react";
import ReactDOM from "react-dom/client";
import { Web3Modal } from "@web3modal/react";
import "./index.css";
import App from "./App";

const config = {
  projectId: "",
  theme: "light",
  accentColor: "teal",
  ethereum: {
    appName: "web3Modal",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <Web3Modal config={config} />
  </>
);
