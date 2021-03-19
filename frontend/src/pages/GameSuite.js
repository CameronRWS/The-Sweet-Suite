import React, { useState } from "react";
import { Link } from "react-router-dom";
import './GameSuite.css';
import checkers from './images/Checkers.jpg';

function loadCheckers() {
    console.log("playing checkers");
}

// code list of props here, find out how to specify props at bottom
const GameSuite = (props) => {
    return (
        <div>
        <div className = "GameSuiteHeader">
            <p>Welcome to The Sweet Suite!</p>
            <p>These are the games currently available to you</p>
        </div>
        <div className = "GameSuiteGames">
            <h3 onClick = {loadCheckers}>Checkers</h3>
            <img src = {checkers} alt = "checkers board" width = "200" height = "200" onClick = {loadCheckers}></img>
        </div>
        </div>
    )
}

export default GameSuite;