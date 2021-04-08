import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import GameSuite from "./pages/GameSuite";
import Checkers from "./pages/Checkers";
import Signup from "./pages/Signup";
import Settings from "./pages/Settings";
import React, {useState} from "react";

function App() {
  const [authorized, setAuthorized] = useState(false);
  const [username, setUsername] = useState("");

  const authorize = (bool, user) => {
    setAuthorized(bool);
    setUsername(user);
  };


  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authFunc={authorize}></Login>
          </Route>
          <Route path="/gamesuite">
            <GameSuite authVar={authorized}></GameSuite>
          </Route>
          <Route path="/checkers">
            <Checkers authVar={authorized}></Checkers>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <Route path="/settings">
            <Settings auth ={username} authVar={authorized}></Settings>
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
