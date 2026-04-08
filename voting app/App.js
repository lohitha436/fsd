import React, { useState } from "react";

function App() {
  const [votes, setVotes] = useState({
    OptionA: 0,
    OptionB: 0,
  });

  const vote = (option) => {
    setVotes((prev) => ({
      ...prev,
      [option]: prev[option] + 1,
    }));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Voting App</h1>

      <h2>Option A: {votes.OptionA}</h2>
      <button onClick={() => vote("OptionA")}>Vote A</button>

      <h2>Option B: {votes.OptionB}</h2>
      <button onClick={() => vote("OptionB")}>Vote B</button>
    </div>
  );
}

export default App;
