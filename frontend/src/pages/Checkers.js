import React, { useState } from "react";
import { Link } from "react-router-dom";
import './GameSuite.css';

function loadCheckers() {
    console.log("playing checkers");
}

// code list of props here, find out how to specify props at bottom
const Checkers = (props) => {
    return (
        <div>
        <div className = "GameSuiteHeader">
            <p>Checkers</p>
        </div>
        <div className = "Checkers">
            <h3 onClick = {loadCheckers}>This is an undercover checkers board</h3>
        </div>
            <div className="grid-container">
                <div className="whiteSquare">0</div>
                <div className="blackSquare">1</div>
                <div className="whiteSquare">2</div>
                <div className="blackSquare">3</div>
                <div className="whiteSquare">4</div>
                <div className="blackSquare">5</div>
                <div className="whiteSquare">6</div>
                <div className="blackSquare">7</div>
                <div className="whiteSquare">8</div>
                <div className="blackSquare">9</div>

                <div className="blackSquare">9</div>
                <div className="whiteSquare">0</div>
                <div className="blackSquare">1</div>
                <div className="whiteSquare">2</div>
                <div className="blackSquare">3</div>
                <div className="whiteSquare">4</div>
                <div className="blackSquare">5</div>
                <div className="whiteSquare">6</div>
                <div className="blackSquare">7</div>
                <div className="whiteSquare">8</div>

                <div className="whiteSquare">0</div>
                <div className="blackSquare">1</div>
                <div className="whiteSquare">2</div>
                <div className="blackSquare">3</div>
                <div className="whiteSquare">4</div>
                <div className="blackSquare">5</div>
                <div className="whiteSquare">6</div>
                <div className="blackSquare">7</div>
                <div className="whiteSquare">8</div>
                <div className="blackSquare">9</div>

                <div className="blackSquare">9</div>
                <div className="whiteSquare">0</div>
                <div className="blackSquare">1</div>
                <div className="whiteSquare">2</div>
                <div className="blackSquare">3</div>
                <div className="whiteSquare">4</div>
                <div className="blackSquare">5</div>
                <div className="whiteSquare">6</div>
                <div className="blackSquare">7</div>
                <div className="whiteSquare">8</div>

                <div className="whiteSquare">0</div>
                <div className="blackSquare">1</div>
                <div className="whiteSquare">2</div>
                <div className="blackSquare">3</div>
                <div className="whiteSquare">4</div>
                <div className="blackSquare">5</div>
                <div className="whiteSquare">6</div>
                <div className="blackSquare">7</div>
                <div className="whiteSquare">8</div>
                <div className="blackSquare">9</div>

                <div className="blackSquare">9</div>
                <div className="whiteSquare">0</div>
                <div className="blackSquare">1</div>
                <div className="whiteSquare">2</div>
                <div className="blackSquare">3</div>
                <div className="whiteSquare">4</div>
                <div className="blackSquare">5</div>
                <div className="whiteSquare">6</div>
                <div className="blackSquare">7</div>
                <div className="whiteSquare">8</div>

                <div className="whiteSquare">0</div>
                <div className="blackSquare">1</div>
                <div className="whiteSquare">2</div>
                <div className="blackSquare">3</div>
                <div className="whiteSquare">4</div>
                <div className="blackSquare">5</div>
                <div className="whiteSquare">6</div>
                <div className="blackSquare">7</div>
                <div className="whiteSquare">8</div>
                <div className="blackSquare">9</div>

                <div className="blackSquare">9</div>
                <div className="whiteSquare">0</div>
                <div className="blackSquare">1</div>
                <div className="whiteSquare">2</div>
                <div className="blackSquare">3</div>
                <div className="whiteSquare">4</div>
                <div className="blackSquare">5</div>
                <div className="whiteSquare">6</div>
                <div className="blackSquare">7</div>
                <div className="whiteSquare">8</div>

                <div className="whiteSquare">0</div>
                <div className="blackSquare">1</div>
                <div className="whiteSquare">2</div>
                <div className="blackSquare">3</div>
                <div className="whiteSquare">4</div>
                <div className="blackSquare">5</div>
                <div className="whiteSquare">6</div>
                <div className="blackSquare">7</div>
                <div className="whiteSquare">8</div>
                <div className="blackSquare">9</div>

                <div className="blackSquare">9</div>
                <div className="whiteSquare">0</div>
                <div className="blackSquare">1</div>
                <div className="whiteSquare">2</div>
                <div className="blackSquare">3</div>
                <div className="whiteSquare">4</div>
                <div className="blackSquare">5</div>
                <div className="whiteSquare">6</div>
                <div className="blackSquare">7</div>
                <div className="whiteSquare">8</div>
            </div>
        </div>
    )
}

export default Checkers;