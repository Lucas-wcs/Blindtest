// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import React, { useState } from "react";
// import Dashboard from "../components/user/Dashboard/Dashboard";
// import Preferences from "../components/user/Preferences/Preferences";
import Login from "../components/user/Login/Login";
import useToken from "../components/user/useToken";
import User from "./User";

function Connexion() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <div className="wrapper">
      <User />
      {/* <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter> */}
    </div>
  );
}

export default Connexion;
