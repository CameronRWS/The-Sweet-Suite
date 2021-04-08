import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import GameSuite from "./pages/GameSuite";
import Checkers from "./pages/Checkers";
import Signup from "./pages/Signup";
import Settings from "./pages/Settings";
import React, {useState} from "react";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login></Login>
          </Route>
          <Route path="/gamesuite">
            <GameSuite></GameSuite>
          </Route>
          <Route path="/checkers">
            <Checkers></Checkers>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <Route path="/settings">
            <Settings></Settings>
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
