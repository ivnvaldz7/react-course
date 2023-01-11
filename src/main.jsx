import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./CounterApp";
import {App} from './App';
import "./main.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CounterApp value={10} />
    {/* <App title="Curso de React" subtitle='De 0 a experto' name='Fernando Herrera'/> */}
  </React.StrictMode>
);
