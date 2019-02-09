import React, { useState } from "react";
import ReactDOM from "react-dom";

import Lookup from "./components/lookup";

import "semantic-ui-css/semantic.min.css";

function App() {
  let [number, setNumber] = useState(0);
  return (
    <div className="App">
      <h1>Want to know more about a number?</h1>
      <Lookup setNumber={setNumber} number={number} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
