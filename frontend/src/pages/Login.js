import React, {useState} from "react";
import { useHistory, BrowserRouter, Link } from 'react-router-dom';
import './Login.css'
import backdrop2 from './images/backdrop2.jpg';
import GameBot from './images/GameBot.png';
import Auth from '../Auth';

const Login = (props) => {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");
    const [displayError, setDisplayError] = useState("");
    const history = useHistory();
    //const forceUpdate = useForceUpdate();
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
            if (data.isSuccessful){
                let path = '/gamesuite';
                history.push(path);
                props.authFunc(true, userId);
               // props.fCheck(true);
                //forceUpdate();
                //console.log("auth at login", Auth.isAuthenticated);
            }
            else {
                setDisplayError("username or password not recognized");
                props.authFunc(false, "");
                //forceUpdate();
            }
        })
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>User Name</label>
                    <input type="text" data-test="user" value={userId} onChange={handleUserChange}></input> 
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" data-test="pass" value={password} onChange={handlePassChange}></input>
                </div>
                <button type="submit" onClick={handleLogin}>Login</button>
            </form>
        </div>

    );
}

export default Login;
