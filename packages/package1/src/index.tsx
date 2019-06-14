import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "components";
import Top from "./Top";

ReactDOM.render(
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Top} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
