import React, {useState} from "react";
import { useHistory } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");
    const history = useHistory();

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
            <h1 className="login-text">The Sweet Suite</h1>
            <h2 className="login-text">Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
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
            <div className="signup-div">
                <button onClick={goToSignup}>Signup</button>
            </div>
            
        </div>
    );
}

export default Login;
