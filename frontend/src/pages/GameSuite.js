import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import './GameSuite.css';
import checkers from './images/Checkers.jpg';
import sampleProfPic1 from './images/sample-prof-pic1.png';
import GameBot from './images/Default.png';

const GameSuite = (props) => {
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
    };

    return (
        <>
            {props.authVar ? (
                <div>
                    <a className = "Settings" onClick = {loadSettings}>Settings</a>
                <div className = "GameSuiteHeader">
                    <div className="picDiv">
                        <img className="profPic" src={props.pic} width="100" height="100" onClick={loadStore}></img>
                    </div>
                    <p className="gameSuiteText">{"Welcome to The Sweet Suite " + props.user + "!"}</p>
                    <p className="gameSuiteText2">These are the games currently available to you</p>
                </div>
                <div className = "GameSuiteGames">
                    <h3 onClick = {loadCheckers}>Checkers</h3>
                    <img src = {checkers} alt = "checkers board" width = "200" height = "200" onClick = {loadCheckers}></img>
                </div>
                </div>
            ):(
                <Redirect to="/"></Redirect>
            )}
            
        </>
    )
}

export default GameSuite;