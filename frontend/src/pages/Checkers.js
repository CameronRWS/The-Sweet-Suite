import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import './GameSuite.css';

// code list of props here, find out how to specify props at bottom
const Checkers = (props) => {
    const history = useHistory();

    const loadHome = () => {
        let path = "/gamesuite";
        history.push(path);
    };

    return (
        <div>
        <div className = "BackButton">
            <a onClick = {loadHome} class="previous">&laquo; Back</a>
        </div>
        <div className = "GameSuiteHeader">
            <p>Checkers</p>
        </div>
        <div className = "Checkers">
            <h3 >This is a checkers board. Have fun playing!</h3>
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