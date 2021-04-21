import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import './GameSuite.css';
import './Forms.css';
import UpdateForm from './Updateform';

// code list of props here, find out how to specify props at bottom
const Settings = (props) => {
    const history = useHistory();
    console.log("authorized= ", props.authVar);

    console.log(props.auth)

    const loadHome = () => {
        let path = "/gamesuite";
        history.push(path);
    }

    const loadLogin = () => {
        let path = "/"
        history.push(path);
    };

    return (
        <>
            {props.authVar ? (
                <div>
                    <a className = "BackButton" onClick = {loadHome}>Back</a>
                    <div className = "GameSuiteHeader">
                        <p>Settings</p>
                    </div>
                    <button className="logout-bttn" style={{"left": "50%"}} onClick={loadLogin}>Logout</button>
                    <div>
                        <UpdateForm auth={props.auth}></UpdateForm>
                    </div>
                </div>
                
            ):(
                <Redirect to="/"></Redirect>
            )}
        </>
    )
}

export default Settings;
