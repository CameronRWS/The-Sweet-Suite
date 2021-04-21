import React, { useState, useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";

function UpdateForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [displayname, setDisplayName] = useState("");
  const [data, setData] = useState({
    total_score: 0,
    spendable_score: 0,
    usernameError: "",
    passwordError: "",
    emailError: "",
    displayError: "",
    toLogin: false,
  });

  const [initialData, setInitalData] = useState({
    username: "",
    password: "",
    email: "",
    display_name: "",
    total_score: 0,
    spendable_score: 0,
    id: "",
  });
  const [isloaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let url = "http://localhost:8080/api/players/byUsername/" + props.auth;

    if (!isloaded) {
      fetch(url, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setInitalData({
            username: data.username,
            email: data.email,
            display_name: data.display_name,
            id: data.id,
            total_score: data.total_score,
            spendable_score: data.spendable_score,
          });

          setUsername(data.username);
          setEmail(data.email);
          setDisplayName(data.display_name);

          setIsLoaded(true);
        });
    }
  });

  const validateForm = () => {
    let emailError;
    let Emailvalidation = validateEmail();
    let uservalidation = validateUsername();
    let passwordvalidation = validatePassword();
    let Displayvalidation = validateDisplay();

    if (!Emailvalidation) {
      emailError = "Invalid Email";
    } else {
      emailError = "";
    }

    let passwordError;
    if (!passwordvalidation) {
      passwordError =
        "Passwords must be between 6 to 20 characters, and contain at least one number, uppercase letter and lowercase letter.";
    } else {
      passwordError = "";
    }

    let usernameError;
    if (!uservalidation) {
      usernameError =
        "Username must be alphanumberic and between 8 and 20 characters long";
    } else {
      usernameError = "";
    }

    let displayError;
    if (!validateDisplay) {
      displayError = "Display Name must be between 1 and 20 characters long";
    } else {
      displayError = "";
    }

    setData({
      emailError: emailError,
      passwordError: passwordError,
      usernameError: usernameError,
      displayError: displayError,
    });

    return (
      Emailvalidation &&
      uservalidation &&
      passwordvalidation &&
      Displayvalidation
    );
  };

  const validateEmail = () => {
    let emailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(emailformat)) {
      console.log("valid email");
    } else {
      console.log("invalid email");
    }
    return email.match(emailformat);
  };

  const validatePassword = () => {
    let passwordReq = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    return password.match(passwordReq);
  };

  const validateUsername = () => {
    let usernameReq = /^[a-zA-Z0-9_]{8,20}$/;
    return username.match(usernameReq);
  };

  const validateDisplay = () => {
    let displayReq = /^[\w\-\s.,]{1,20}$/;
    return displayname.match(displayReq);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleSignup = (event) => {
    if (validateForm()) {
      console.log("ok");

      const pushdata = {
        username: username,
        password: password,
        email: email,
        display_name: displayname,
        total_score: initialData.total_score,
        spendable_score: initialData.spendable_score
      };
      const url = "http://localhost:8080/api/players/" + initialData.id
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pushdata),
      }).then((data) => {
        console.log(data);
        checkUser(data.status);
      });
      setData({
        username: "",
        password: "",
        email: "",
        display_name: "",
        total_score: 0,
        spendable_score: 0,
      });
    }
  };

  const checkUser = (status) => {
    if (status === 500) {
      setData({ usernameError: "Error. Please try again." });
    } else {
      setData({ toLogin: true });
    }
  };

  const handleChange = (event) => {
    if (event.target.name === "username") {
      setUsername(event.target.value);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
    } else if (event.target.name === "email") {
      setEmail(event.target.value);
    } else if (event.target.name === "display_name") {
      setDisplayName(event.target.value);
    } else {
      setData({
        [event.target.name]: event.target.value,
      });
    }
  };

  return (

    <div className="customCenter">
      {data.toLogin && <Redirect to='/gamesuite'></Redirect>}
    <h3>Update profile Information</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
            defaultValue={initialData.username}
          ></input>
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={data.password}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            defaultValue={initialData.email}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Display Name"
            name="display_name"
            onChange={handleChange}
            defaultValue={initialData.display_name}
          ></input>
        </div>
        <div style={{ color: "red" }}>{data.usernameError}</div>
        <div style={{ color: "red" }}>{data.passwordError}</div>
        <div style={{ color: "red" }}>{data.emailError}</div>
        <div style={{ color: "red" }}>{data.displayError}</div>
        <button className="update-bttn" type="submit" onClick={handleSignup}>
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdateForm;
