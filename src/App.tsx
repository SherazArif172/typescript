import React from "react";

import "./App.css";
import Buttonn from "./components/Button";
function App() {
  return (
    <div className="App">
      <Buttonn text="sheraz" onClick={() => alert("this is a tester alert")} />
    </div>
  );
}

export default App;
