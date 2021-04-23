import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import './GameSuite.css';
import UpdateForm from './Updateform';
import sampleProfPic1 from './images/sample-prof-pic1.png';
import GameBot from './images/GameBot.png';
import './Login.css'

// code list of props here, find out how to specify props at bottom
const Settings = (props) => {
    const history = useHistory();
    console.log("authorized= ", props.authVar);

    console.log(props.auth)

    const loadHome = () => {
        let path = "/gamesuite";
        history.push(path);
    };

    const loadLogin = () => {
        let path = "/"
        history.push(path);
    };

    const loadStore = () => {
        let path = "/store";
        history.push(path);
    }

    return (
        <>
            {props.authVar ? (
                <div>
                    <a className = "backText" onClick = {loadHome}>Back</a>
                    <div className = "GameSuiteHeader">
                        <p className="settingsText">Settings</p>
                    </div>
                    
                    <div style={{"text-align": "center"}}> 
                        <button className="settingsPicButton" onClick={loadStore}>
                            <img src={GameBot} width="150" height="150"></img>
                        </button>
                        <UpdateForm auth={props.auth}></UpdateForm>
                        <button className="login-bttn" onClick={loadLogin}>Logout</button>
                    </div>
                </div>
                
            ):(
                <Redirect to="/"></Redirect>
            )}
        </>
    )
}

export default Settings;
