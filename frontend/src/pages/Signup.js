import React, {useState} from "react";
const players = require('../../../backend/services/players');

const Signup = () => {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [displayName, setDisplayName] = useState("");
    const totalScore = 0;
    const spendableScore = 0;

    const validateForm = () =>{
        return userId.length > 0 && password.length > 0 && validateEmail;
    };

    const validateEmail = () =>{
        var emailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(email.match(emailformat)){
            console.log("valid email")
        }else{
            console.log("invalid email")
        }
        return email.match(emailformat)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleSignup= (event) => {
        if (validateForm){
            console.log("ok");
        }


        const player = {
            username: userId,
            password: password,
            email: email,
            display_name: displayName,
            total_score: totalScore,
            spendable_score: spendableScore
        }

        players.update(0, player); // not sure what 'id' is!

        setPassword("");
        setUserId("");
        setEmail("");
        setDisplayName("");

    };

    const handleUserChange = (event) =>{
        setUserId(event.target.value);
    };

    const handlePassChange = (event) =>{
        setPassword(event.target.value);
    };

    const handleEmailChange = (event) =>{
        setEmail(event.target.value);

    }

    const handleDisplayChange = (event) => {
        setDisplayName(event.target.value);
    }

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
                <div>
                    <label>Email</label>
                    <input type="text" data-test="email" value={email} onChange={handleEmailChange}></input>
                </div>
                <div>
                    <label>Display Name</label>
                    <input type="password" data-test="display" value={displayName} onChange={handleDisplayChange}></input>
                </div>
                <button type="submit" onClick={handleSignup}>Signup</button>
            </form>
        </div>
    );






}

export default Signup;
