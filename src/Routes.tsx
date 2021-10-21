import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Playground from "./Playground";

interface RoutesProps {}

const Routes: React.FC<RoutesProps> = () => {
  return (
    <BrowserRouter basename={process.env.BASE_URL}>
      <Switch>
        <Route exact path="/" component={Playground} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
