import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import GameSuite from "./pages/GameSuite";
import Signup from "./pages/Signup";

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
          <Route path="/signup">
            <Signup></Signup>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
