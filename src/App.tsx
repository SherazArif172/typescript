import React from "react";

import "./App.css";
import Buttonn from "./components/Button";
function App() {
  return (
    <div className="App">
      <Buttonn text="sheraz" onClick={() => alert("this is a tester alert")} />
      <Buttonn text="sheraz" />
    </div>
  );
}

export default App;
