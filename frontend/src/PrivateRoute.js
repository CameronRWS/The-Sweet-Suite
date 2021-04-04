import { Route, Redirect } from "react-router-dom";
import Auth from "./Auth";

const PrivateRoute = (Component) => (
    <Route
      render={ props =>
        Auth.getAuth() ? (
        <Component />
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