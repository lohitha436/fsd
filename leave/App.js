import "./App.css";
import React, { useState } from "react";

function App() {
  const [cl, setCl] = useState(10);
  const [ml, setMl] = useState(8);

  const [clInput, setClInput] = useState("");
  const [mlInput, setMlInput] = useState("");

  const applyCL = () => {
    if (clInput <= cl) {
      setCl(cl - clInput);
    } else {
      alert("Not enough CL");
    }
  };

  const applyML = () => {
    if (mlInput <= ml) {
      setMl(ml - mlInput);
    } else {
      alert("Not enough ML");
    }
  };

  const reset = () => {
    setCl(10);
    setMl(8);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Leave Management</h1>

      <h3>Casual Leave: {cl}</h3>
      <input
        type="number"
        onChange={(e) => setClInput(Number(e.target.value))}
      />
      <button onClick={applyCL}>Apply CL</button>

      <h3>Medical Leave: {ml}</h3>
      <input
        type="number"
        onChange={(e) => setMlInput(Number(e.target.value))}
      />
      <button onClick={applyML}>Apply ML</button>

      <br /><br />
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
