import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import Home from "./home";
import LoginForm from "../pages/LoginForm";
import SignupForm from "../pages/SignupForm";
import Footer from "./Footer";

export default function App() {
  return (
    <Router>
      <div>
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
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
