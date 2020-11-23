import React from "react";
import { Switch, Route } from "react-router";
import Home from "./Components/Home";

const routes = (
  <Switch>
    {/* Main Page */}
    <Route exact path="/" component={Home} />
  </Switch>
);

export default routes;
