import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./GameSuite.css";
import "./games/checkers/Checkers.css";
import Board from "./games/checkers/Board";

// code list of props here, find out how to specify props at bottom
const Checkers = (props) => {
  const history = useHistory();

  const loadHome = () => {
    let path = "/gamesuite";
    history.push(path);
  };

  return (
    <div>
      <a onClick={loadHome} className="BackButton">
        &laquo; Back
      </a>
      <div className="GameSuiteHeader">
        <p>Checkers</p>
      </div>
      <div className="Checkers">
        <h3>This is a checkers board. Have fun playing!</h3>
      </div>

      <Board></Board>
      <div className = "Clear">
        <button onClick={console.log("reset")} className = "Gamebutton">Reset</button>
        <button onClick={console.log("rules")} className = "Gamebutton">Rules</button>
      </div>
    </div>
  );
};

export default Checkers;
