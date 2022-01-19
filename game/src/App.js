import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [goal, setGoal] = useState(Math.floor(Math.random() * 101));
  console.log(goal);

  const [you, setYou] = useState(0);
  const change = (event) => {
    let value = event.target.value;
    value = parseInt(value);
    setYou(value);
  };

  let hint = "";
  const banish = () => {
    if (you === goal) {
      hint = "you have won";
      console.log(hint);
      alert(hint);
    } else if (Math.abs(you - goal) < 6) {
      hint = "you are very close!";
      console.log(hint);
      alert(hint);
    } else if (Math.abs(you - goal) < 11) {
      hint = "you are close!";
      console.log(hint);
      alert(hint);
    } else {
      hint = "haha ! you are not near the answer!";
      console.log(hint);
      alert(hint);
    }
  };
  return (
    <div>
      <h1>The Ancient Octowl </h1>
      <br></br>
      <p>
        Stirs beneath the tumultuous waves, thinking of a number that will end
        the world{" "}
      </p>
      <br></br>
      <p>Find the secret number and use it to banish The Octowl</p>
      <br></br>
      <div className="middle">
        <input onChange={change} type="number" />
        <br></br>
        <br></br>

        <button onClick={banish}>Bannish</button>
        <br></br>
        <br></br>
        <button>Surrender</button>
        <button>Seek Wisdom</button>
      </div>
    </div>
  );
}

export default App;
