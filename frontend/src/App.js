import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import GameSuite from "./pages/GameSuite";
import Checkers from "./pages/Checkers";
import Signup from "./pages/Signup";
import Settings from "./pages/Settings";
import Auth from "./Auth";

function App() {
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={ props =>
        Auth.getAuth() ? (
        <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/"
            }}
          />
        )
      }
    />
    );

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login></Login>
          </Route>
          <PrivateRoute path="/gamesuite">
            <GameSuite></GameSuite>
          </PrivateRoute>
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
