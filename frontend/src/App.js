import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import GameSuite from "./pages/GameSuite";
import Checkers from "./pages/Checkers";

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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
