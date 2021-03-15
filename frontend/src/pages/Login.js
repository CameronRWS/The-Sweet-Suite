import React, {useState} from "react";
import './Login.css';

const Login = () => {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

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
        setPassword("");
        setUserId("");
    };

    return(
        <div className="Login">
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