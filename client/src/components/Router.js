import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import Home from "./home";
import LoginForm from "../pages/LoginForm";
import SignupForm from "../pages/SignupForm";
import Survey from "../pages/Survey";
// import Footer from "./Footer";
import Navbar from "./Navbar";

// import { Grid, Row, Col } from "react-bootstrap";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/LoginForm">
              <LoginForm />
            </Route>
            <Route exact path="/SignupForm">
              <SignupForm />
            </Route>
            <Route exact path="/Survey">
              <Survey />
            </Route>
            <Route path="*">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
