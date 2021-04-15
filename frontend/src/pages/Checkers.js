import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import './GameSuite.css';
import Game from "./games/checkers/Game";
import Modal from "../Modal";
import "./games/checkers/Checkers.css";

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
        <>
            {props.authVar ? (
              <div>
              <a onClick={loadHome} className="BackButton">
                &laquo; Back
              </a>
              <div className="GameSuiteHeader">
                <p>Checkers</p>
              </div>
              <div className="Checkers">
                    <Game></Game>
              </div>
              
              <div className="Clear">
                <button class='reset' onClick={resetClick} className="Gamebutton">
                  Reset
                </button>
                <button onClick={rulesClick} className="Gamebutton" id="rules">
                  Rules
                </button>
              </div>
                <Modal show={showModal}>
                <div className="PopUp" display="block">
                    <div className="PopUp.internal">
                    <span onClick={rulesClose}>&times;</span>
                    <p>Hello! Welcome to checkers!</p>
                    <h5>BASIC RULES</h5>
                    <h5>HOW THE AI THINKS</h5>
                    </div>
                </div>
                </Modal>
            </div>
            ):(
              <Redirect to="/"></Redirect>
          )}
          </>
        )
};

export default Checkers;