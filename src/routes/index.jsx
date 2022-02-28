import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const Routes = () => {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("@KenzieHub:token");
    if (token) {
      return setAuth(true);
    }
  }, []);
  return (
    <Switch>
      <Route exact path="/">
        <Home auth={auth} setAuth={setAuth} />
      </Route>
      <Route path="/login">
        <Login auth={auth} setAuth={setAuth} />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
    </Switch>
  );
};

export default Routes;
