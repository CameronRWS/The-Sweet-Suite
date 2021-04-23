import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import React, {useState} from "react";
import Login from "./pages/Login";
import GameSuite from "./pages/GameSuite";
import Checkers from "./pages/Checkers";
import Signup from "./pages/Signup";
import Settings from "./pages/Settings";
import Store from "./pages/Store";
import GameBot from "./pages/images/Default.png";
import Egg from "./pages/images/Egg.png";

function App() {
  const [authorized, setAuthorized] = useState(true);
  const [username, setUsername] = useState("");
  const [profilePic, setProfilePic] = useState(GameBot);
  

  const authorize = (bool, user) => {
    setAuthorized(bool);
    setUsername(user);
  };

  const changeProfPic = (pic) => {
    setProfilePic(pic);
  }


  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authFunc={authorize}></Login>
          </Route>
          <Route path="/gamesuite">
            <GameSuite pic={profilePic} setPic={changeProfPic} authVar={authorized} user={username}></GameSuite>
          </Route>
          <Route path="/checkers">
            <Checkers authVar={authorized}></Checkers>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <Route path="/settings">
            <Settings pic={profilePic} setPic={changeProfPic} auth={username} authVar={authorized}></Settings>
          </Route>
          <Route path="/store">
            <Store pic={profilePic} setPic={changeProfPic} user={username} authVar={authorized}></Store>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
