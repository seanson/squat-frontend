import React from "react";
import { Route, Router } from "react-router-dom";

import history from "./history";
import Login from "./Login/Login";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Workouts from "./Workouts/Workouts";
import withAuthentication from "./withAuthentication/withAuthentication";
import "./App.css";

const App = () => (
  <Router history={history}>
    <div>
      <Header history={history} />
      <Route exact path="/" component={(props) => <Home {...props} />} />
      <Route exact path="/login" component={(props) => <Login {...props} />} />
      <Route exact path="/workouts" component={(props) => <Workouts {...props} />} />
    </div>
  </Router>
);

export default withAuthentication(App);

