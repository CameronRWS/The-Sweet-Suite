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
            <a onClick = {loadHome} className ="BackButton">&laquo; Back</a>
        <div className = "GameSuiteHeader">
            <p>Checkers</p>
        </div>
        <div className = "Checkers">
            <h3 >This is a checkers board. Have fun playing!</h3>
        </div>
            <div className="grid-container">
                <div className="whiteSquare" id = "A8">a8</div>
                <div className="blackSquare" id = "B8">b8</div>
                <div className="whiteSquare" id = "C8">c8</div>
                <div className="blackSquare" id = "D8">d8</div>
                <div className="whiteSquare" id = "E8">e8</div>
                <div className="blackSquare" id = "F8">f8</div>
                <div className="whiteSquare" id = "G8">g8</div>
                <div className="blackSquare" id = "H8">h8</div>

                <div className="blackSquare" id = "A7">a7</div>
                <div className="whiteSquare" id = "B7">b7</div>
                <div className="blackSquare" id = "C7">c7</div>
                <div className="whiteSquare" id = "D7">d7</div>
                <div className="blackSquare" id = "E7">e7</div>
                <div className="whiteSquare" id = "F7">f7</div>
                <div className="blackSquare" id = "G7">g7</div>
                <div className="whiteSquare" id = "H7">h7</div>

                <div className="whiteSquare" id = "A6">a6</div>
                <div className="blackSquare" id = "B6">b6</div>
                <div className="whiteSquare" id = "C6">c6</div>
                <div className="blackSquare" id = "D6">d6</div>
                <div className="whiteSquare" id = "E6">e6</div>
                <div className="blackSquare" id = "F6">f6</div>
                <div className="whiteSquare" id = "G6">g6</div>
                <div className="blackSquare" id = "H6">h6</div>

                <div className="blackSquare" id = "A5">a5</div>
                <div className="whiteSquare" id = "B5">b5</div>
                <div className="blackSquare" id = "C5">c5</div>
                <div className="whiteSquare" id = "D5">d5</div>
                <div className="blackSquare" id = "E5">e5</div>
                <div className="whiteSquare" id = "F5">f5</div>
                <div className="blackSquare" id = "G5">g5</div>
                <div className="whiteSquare" id = "H5">h5</div>

                <div className="whiteSquare" id = "A4">a4</div>
                <div className="blackSquare" id = "B4">b4</div>
                <div className="whiteSquare" id = "C4">c4</div>
                <div className="blackSquare" id = "D4">d4</div>
                <div className="whiteSquare" id = "E4">e4</div>
                <div className="blackSquare" id = "F4">f4</div>
                <div className="whiteSquare" id = "G4">g4</div>
                <div className="blackSquare" id = "H4">h4</div>

                <div className="blackSquare" id = "A3">a3</div>
                <div className="whiteSquare" id = "B3">b3</div>
                <div className="blackSquare" id = "C3">c3</div>
                <div className="whiteSquare" id = "D3">d3</div>
                <div className="blackSquare" id = "E3">e3</div>
                <div className="whiteSquare" id = "F3">f3</div>
                <div className="blackSquare" id = "G3">g3</div>
                <div className="whiteSquare" id = "H3">h3</div>

                <div className="whiteSquare" id = "A2">a2</div>
                <div className="blackSquare" id = "B2">b2</div>
                <div className="whiteSquare" id = "C2">c2</div>
                <div className="blackSquare" id = "D2">d2</div>
                <div className="whiteSquare" id = "E2">e2</div>
                <div className="blackSquare" id = "F2">f2</div>
                <div className="whiteSquare" id = "G2">g2</div>
                <div className="blackSquare" id = "H2">h2</div>

                <div className="blackSquare" id = "A1">a1</div>
                <div className="whiteSquare" id = "B1">b1</div>
                <div className="blackSquare" id = "C1">c1</div>
                <div className="whiteSquare" id = "D1">d1</div>
                <div className="blackSquare" id = "E1">e1</div>
                <div className="whiteSquare" id = "F1">f1</div>
                <div className="blackSquare" id = "G1">g1</div>
                <div className="whiteSquare" id = "H1">h1</div>

            </div>
        </div>
    )
}

export default Checkers;