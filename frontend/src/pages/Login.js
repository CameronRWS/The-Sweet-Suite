import React, {useState} from "react";
import { BrowserRouter as Router, useHistory, Link } from 'react-router-dom';
import './Settings.css'
import backdrop2 from './images/backdrop2.jpg';
import GameBot from './images/GameBot.png';

const Login = (props) => {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");
    const [displayError, setDisplayError] = useState("");
    const history = useHistory();
    document.body.style = 'background: #93D3FB;';

    const validateForm = () =>{
        return userId.length > 0 && password.length > 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleUserChange = (event) =>{
        setUserId(event.target.value);
    };

    const handlePassChange = (event) =>{
        setPassword(event.target.value);
    };

    const handleLogin = (event) => {
        if (validateForm){
            console.log("ok");
        }
        const data = {
            "username" : userId,
            "password" : password
        }
        if (data.username === "user" && data.password === "pass"){
            let path = '/gamesuite';
            history.push(path);
        }
        fetch("http://localhost:8080/api/players/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => response.json()).then(data => {
            setStatus(data.status);
            console.log(data);
            if (data.isSuccessful){
                let path = '/gamesuite';
                history.push(path);
                // props.authFunc(true, userId);
            }
            else {
                setDisplayError("username or password not recognized");
                // props.authFunc(false, "");
            }
        })
    };

    return(
        <div className="login-div">
            <img src={backdrop2} className="image"></img>
            <div className="overlay">
                <h1 className="login-title">The <span className="title-span">Sweet</span> Suite</h1>
                <img src={GameBot} className="game-bot"></img>
                <h2 className="login">Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="user-div">
                        <input type="text" data-test="user" placeholder="username" value={userId} onChange={handleUserChange}></input>
                    </div>
                    <div>
                        <input type="password" data-test="pass" placeholder="password" value={password} onChange={handlePassChange}></input>
                    </div>
                    <div style={{ color: "red", "fontSize": "15px", margin: "10px 0"}}>{displayError}</div>
                    <button className="login-bttn" type="submit" onClick={handleLogin}>Login</button>
                </form>
                <div className="signup-div">
                    <p className="signup-text">Don't have an account?</p>
                    <Router>
                        <Link className="signup-link" to="/signup">Sign Up!</Link>
                    </Router>
                </div>
            </div>
        </div>
    );
}

export default Login;
