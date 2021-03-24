import React from "react";
import { useHistory } from "react-router-dom";

function BackButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <button type="button" onClick={handleClick}>
      Back
    </button>
  );
}
export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      display_name: "",
      total_score: 0,
      spendable_score: 0,
      usernameError: "",
      passwordError: "",
      emailError: "",
      displayError: "",
    };
  }

  validateForm = () => {
    let emailError;
    if (!this.validateEmail()) {
      emailError = "Invalid Email";
    } else {
      emailError = "";
    }

    let passwordError;
    if(!this.validatePassword()){
        passwordError = "Passwords must be between 6 to 20 characters, and contain at least one number, uppercase letter and lowercase letter.";
    }else{
        passwordError = "";
    }

    let usernameError;
    if(this.state.username.length < 8){
        usernameError = "Username must be at least 8 characters long";
    }else{
        usernameError = "";
    }

    let displayError;
    if(this.state.display_name.length < 8){
        displayError = "Display Name must be at least 8 characters long";
    }else{
        displayError = "";
    }


    this.setState({
      emailError: emailError,
      passwordError: passwordError,
      usernameError: usernameError,
      displayError: displayError
    });

    return (
      this.state.username.length >= 8 &&
      this.state.display_name.length >= 8 &&
      this.validatePassword() &&
      this.validateEmail()
    );
  };

  validateEmail = () => {
    let emailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (this.state.email.match(emailformat)) {
      console.log("valid email");
    } else {
      console.log("invalid email");
    }
    return this.state.email.match(emailformat);
  };

  validatePassword = () => {
    let passwordReq = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    return this.state.password.match(passwordReq);
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleSignup = (event) => {
    if (this.validateForm()) {
      console.log("ok");
      this.setState({
        username: "",
        password: "",
        email: "",
        display_name: "",
        total_score: 0,
        spendable_score: 0,
      });
    }

  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <input
              type="text"
              placeholder="Display Name"
              name="display_name"
              value={this.state.display_name}
              onChange={this.handleChange}
            ></input>
          </div>
          <div style={{ color: "red" }}>{this.state.usernameError}</div>
          <div style={{ color: "red" }}>{this.state.passwordError}</div>
          <div style={{ color: "red" }}>{this.state.emailError}</div>
          <div style={{ color: "red" }}>{this.state.displayError}</div>
          <button type="submit" onClick={this.handleSignup}>
            Signup
          </button>
        </form>
        <BackButton></BackButton>
      </div>
    );
  }
}
