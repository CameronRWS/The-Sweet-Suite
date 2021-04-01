import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import './GameSuite.css';

// code list of props here, find out how to specify props at bottom
const Settings = (props) => {
    const history = useHistory();

    const loadHome = () => {
        let path = "/gamesuite";
        history.push(path);
    }

    return (
        <div>
            <a className = "BackButton" onClick = {loadHome}>Back</a>
        <div className = "GameSuiteHeader">
            <p>Settings</p>
        </div>
        </div>
    )
}

export default Settings;