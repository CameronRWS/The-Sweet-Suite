import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from "./pages/Login";
import GameSuite from "./pages/GameSuite";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login></Login>
          </Route>
          <Route path="/gamesuite">
            <GameSuite></GameSuite>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
