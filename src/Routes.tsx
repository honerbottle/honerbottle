import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Playground from "./Playground";

interface RoutesProps {}

const Routes: React.FC<RoutesProps> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Playground} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
