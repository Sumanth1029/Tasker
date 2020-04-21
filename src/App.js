import logo from "./logo.svg";
import "./App.css";
import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css"

import Home from "./Components/home.js"
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Redirect,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Router>
        <Fragment>
          
          <div>
            <Switch>
            <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Fragment>
  );
}

export default App;
