import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import './Store.css';
import sampleProfPic1 from './images/sample-prof-pic1.png';
import GameBot from './images/Default.png';
import Cactus from './images/Cactus.png';
import Dog from './images/Dog.png';
import Mushroom from './images/Mushroom.png';
import Worms from './images/Worms.png';
import Egg from './images/Egg.png';

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

    const makeProfile = (event) => {
        let target = event.target;
        if (target.alt === "mushroom"){
            props.setPic(Mushroom);
        }
        else if (target.alt === "egg"){
            props.setPic(Egg); 
        }
        else if (target.alt === "worms"){
            props.setPic(Worms); 
        }
        else if (target.alt === "dog"){
            props.setPic(Dog); 
        }
        else if (target.alt === "cactus"){
            props.setPic(Cactus); 
        }
        else{
            props.setPic(GameBot);
        }
    };

    return (
        <>
            {props.authVar ? (
                <div>
                    <a className="backText" onClick={loadHome}>Back</a>
                    <a className="Settings" onClick={loadSettings}>Settings</a>
                    <div className="GameSuiteHeader">
                        <div className="picDiv">
                            <img className="profPic" src={props.pic} width="100" height="100" onClick={loadStore}></img>
                        </div>
                        <p className="storeText">{"The Sweet Suite Store!"}</p>
                    </div>
                    <div className="avatarDiv">
                    <p className="setAvatarP">Click an image to set your avatar.</p>
                    <div className="Images">
                        <div>
                            <img src={GameBot} alt="game bot" width="200" height="200" onClick={makeProfile}></img>
                            <p className="avatarP">GameBot Dude</p>
                        </div>
                        <div>
                            <img src={Cactus} alt="cactus" width="200" height="200" onClick={makeProfile}></img>
                            <p className="avatarP">Cactus Dude</p>
                        </div>
                        <div>
                            <img src={Dog} alt="dog" width="200" height="200" onClick={makeProfile}></img>
                            <p className="avatarP">Dog Dude</p>
                        </div>
                        <div>
                            <img src={Mushroom} alt="mushroom" width="200" height="200" onClick={makeProfile}></img>
                            <p className="avatarP">Mushroom Dude</p>
                        </div>
                        <div>
                            <img src={Worms} alt="worms" width="200" height="200" onClick={makeProfile}></img>
                            <p className="avatarP">Worm Dudes</p>
                        </div>
                        <div>
                            <img src={Egg} alt="egg" width="200" height="200" onClick={makeProfile}></img>
                            <p className="avatarP">Egg Dude</p>
                        </div>
                    </div>
                    </div>
                </div>
            ):(
                <Redirect to="/"></Redirect>
            )}
            
        </>
    )
}

export default Store;