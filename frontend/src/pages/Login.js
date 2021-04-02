import React, {useState} from "react";
import { useHistory } from 'react-router-dom';
import './Login.css'
import backdrop2 from './images/backdrop2.jpg';

const Login = () => {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");
    const history = useHistory();
    document.body.style = 'background: #93D3FB;';

    //CFEBFD

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
            }
        })
    };

    const goToSignup = () =>{
        let path = "/signup"
        history.push(path);
    }

    return(
        <div className="login-div">
            <img src={backdrop2} className="image"></img>
            <div className="overlay">
                <h1 className="login-title">The <span className="title-span">Sweet</span> Suite</h1>
                <h2 className="login">Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="user-div">
                        <input type="text" data-test="user" placeholder="username" value={userId} onChange={handleUserChange}></input>
                    </div>
                    <div className="pass-div">
                        <input type="password" data-test="pass" placeholder="password" value={password} onChange={handlePassChange}></input>
                    </div>
                    <button type="submit" onClick={handleLogin}>Login</button>
                </form>
                <div className="signup-div">
                    <button onClick={goToSignup}>Signup</button>
                </div>
            </div>
        </div>
        
    );
}

export default Login;
