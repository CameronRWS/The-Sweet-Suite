import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import './Store.css';
import sampleProfPic1 from './images/sample-prof-pic1.png';
import GameBot from './images/GameBot.png';

const Store = (props) => {
    const history = useHistory();
    
    console.log("authorized= ", props.authVar);

    const loadCheckers = () => {
        let path = "/checkers";
        history.push(path);
    };

    const loadSettings = () => {
        let path = "/settings";
        history.push(path);
    };
    
    const loadStore = () => {
        let path = "/store";
        history.push(path);
    }

    const loadHome = () => {
        let path = "/gamesuite";
        history.push(path);
    };

    return (
        <>
            {props.authVar ? (
                <div>
                    <a className = "backText" onClick = {loadHome}>Back</a>
                    <a className = "Settings" onClick = {loadSettings}>Settings</a>
                    <div className = "GameSuiteHeader">
                        <p className="gameSuiteText">{"The Sweet Suite Store!"}</p>
                        <p className="gameSuiteText2">These are the avatars available to you</p>
                    </div>
                </div>
            ):(
                <Redirect to="/"></Redirect>
            )}
            
        </>
    )
}

export default Store;