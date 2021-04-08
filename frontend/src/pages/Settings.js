import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import UpdateForm from './Updateform';

import './GameSuite.css';

// code list of props here, find out how to specify props at bottom
const Settings = (props) => {
    const history = useHistory();

    console.log(props.auth)

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
            <UpdateForm auth={props.auth}></UpdateForm>
        </div>
    )
}

export default Settings;
