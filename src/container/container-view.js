import React from "react";
import NavBar from "./navbar";
import Lights from "./lights";
import Music from "./music";
import Tv from "./tv";

import history from "../history";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "./styles.css";

var view = function() {
  return (
    <Router history={history}>
      <NavBar />
      <Switch>
        <Route  path="/music" component={Music} />
        <Route exact path="/lights" component={Lights} />
        <Route exact path="/tv" component={Tv} />
      </Switch>
    </Router>
  );
};
export default view;
