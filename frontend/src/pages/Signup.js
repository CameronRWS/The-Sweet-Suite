import React from "react";
import { useHistory, Redirect } from "react-router-dom";

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
      toLogin: false,
    };
  }

  validateForm = () => {
    let emailError;
    let Emailvalidation = this.validateEmail();
    let uservalidation = this.validateUsername();
    let passwordvalidation = this.validatePassword();
    let Displayvalidation = this.validateDisplay();

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
    if (!this.validateDisplay) {
      displayError = "Display Name must be between 1 and 20 characters long";
    } else {
      displayError = "";
    }

    this.setState({
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
  };

  validateUsername = () => {
    let usernameReq = /^[a-zA-Z0-9_]{8,20}$/;
    return this.state.username.match(usernameReq);
  };

  validateDisplay = () => {
    let displayReq = /^[\w\-\s.,]{1,20}$/;
    return this.state.display_name.match(displayReq);
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleSignup = (event) => {
    if (this.validateForm()) {
      console.log("ok");

      const data = {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
        display_name: this.state.display_name,
        total_score: this.state.total_score,
        spendable_score: this.state.spendable_score,
      };
      fetch("http://localhost:8080/api/players/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((data) => {
        console.log(data);
        this.checkUser(data.status);
      });
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

  checkUser = (status) => {
    if (status == 500){
      this.setState({usernameError: "User already exists"})
    }
    else {
      this.setState({ toLogin: true });
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    if (this.state.toLogin) {
      return <Redirect to="/"></Redirect>;
    }

    return (
      <div>
        <h1>The Sweet Suite</h1>
        <h2>Sign Up</h2>
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
