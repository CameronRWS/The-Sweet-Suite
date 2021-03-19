import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css';

// code list of props here, find out how to specify props at bottom
const GameSuite = (props) => {
    return (
        <div className="App-header">
            <p>Welcome to The Sweet Suite!</p>
            <li><Link to="/signup">Sign up!</Link></li>
        </div>
    )
}

export default GameSuite;