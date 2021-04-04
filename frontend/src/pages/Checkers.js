import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./GameSuite.css";
import "./games/checkers/Checkers.css";
import Board from "./games/checkers/Board";
import Modal from '../Modal';

// code list of props here, find out how to specify props at bottom
const Checkers = (props) => {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);

  const loadHome = () => {
    let path = "/gamesuite";
    history.push(path);
  };

  const resetClick = () => {
    console.log("reset");
  };

  const rulesClick = (event) => {
    setShowModal(true);
  };

  const rulesClose = (event) => {
    setShowModal(false);
  };

  return (
    <div>
      <a onClick={loadHome} className="BackButton">
        &laquo; Back
      </a>
      <div className="GameSuiteHeader">
        <p>Checkers</p>
      </div>
      <div className="Checkers"></div>

      <Board></Board>
      <div className = "Clear">
        <button onClick = {resetClick} className = "Gamebutton">Reset</button>
        <button onClick = {rulesClick} className = "Gamebutton" id = "rules">Rules</button>
        <Modal show={showModal}>
          <div className = "PopUp" display = "block">
            <div className = "PopUp.internal">
              <span onClick = {rulesClose}>&times;</span>
              <p>Hello! Welcome to checkers!</p>
            </div>
         </div>
        </Modal>
      </div>
    </div>
  );
};

export default Checkers;