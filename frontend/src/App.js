
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, {useState} from "react";
import Login from "./pages/Login";
import GameSuite from "./pages/GameSuite";
import Checkers from "./pages/Checkers";

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
            <GameSuite authVar={authorized} user={username}></GameSuite>
          </Route>
          <Route path="/checkers">
            <Checkers authVar={authorized}></Checkers>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
