import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import './GameSuite.css';
import App from "./games/checkers/ReactCheckers";
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
              <div className="Checkers"></div>

              <div>
                <App user={props.user}></App>
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
                    <span cursor = "pointer" onClick={rulesClose}>&times;</span>
                    <p>Hello! Welcome to checkers!</p>
                    <h5>BASIC RULES</h5>
                    <p>
                      The opponent with the darker pieces moves first. Pieces can only move one diagonal space
                       forward (towards the opponent's side) in the beginning of the game. This means pieces must stay on the dark squares.
                       To capture an opposing piece, "jump" over it by moving to an empty space two diagonal spaces in the direction of the opposing piece.
                       If your piece reaches the last row on your opponent's side, you may "crown" that piece making it a king piece.
                       King pieces can move one diagonal space forward or backwards.
                    </p>
                    <h5>HOW TO PLAY A GAME</h5>
                    <p>
                      If you see a "Join Game" button that means some one is waiting to play so feel free to join their game.
                      Otherwise press the "Create New Game" button and wait for someone to join. Enjoy!
                    </p>
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
