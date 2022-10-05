import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Container from "./component/Container";
import Context from "./Context/context";
import { messages } from "./messages";

function App() {
  return (
    <div className="App">
      <Context message={messages}>
        <Container />
      </Context>
    </div>
  );
}

export default App;
