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
  const [attempts, setAttempts] = useState(5);
  const wisdom = () => {};
  const surrender = () => {
    alert("I knew you would surrender in the end");
    setAttempts(0);
  };

  let hint = "";
  const banish = () => {
    if (you === goal && attempts > 0) {
      hint = "you have won";
      console.log(attempts);
      alert(hint);
    } else if (Math.abs(you - goal) < 6 && attempts > 0) {
      hint = "you are very close!";
      setAttempts(attempts - 1);
      console.log(attempts);
      alert(`${hint} ${attempts} attempts left`);
    } else if (Math.abs(you - goal) < 11 && attempts > 0) {
      hint = "you are close!";
      setAttempts(attempts - 1);
      console.log(attempts);
      alert(`${hint} ${attempts}attempts left`);
    } else if (attempts > 0) {
      hint = "haha ! you are not near the answer!";
      setAttempts(attempts - 1);
      console.log(attempts);
      alert(`${hint} ${attempts} attempts left`);
    } else {
      alert("you have lost");
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
        <button onClick={surrender}>Surrender</button>
        <button onClick={wisdom}>Seek Wisdom</button>
      </div>
    </div>
  );
}

export default App;
