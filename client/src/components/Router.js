import React from "react";
import "./css/router.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import Home from "./home";
import LoginForm from "../pages/LoginForm";
import SignupForm from "../pages/SignupForm";
// import Footer from "./Footer";
import Navbar from "./Navbar";

import { Container, Row, Grid, Col } from "react-bootstrap";

export default function App() {
  return (
    <Router>
      <Container>
        <Row style={{display: "flex"}}>
          <Col xs={4} className = "madeUpHeight">
            <Navbar />
          </Col>
          <Col xs={8} className = "">
            <Header />
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
          </Col>
        </Row>
      </Container>
    </Router>
  );
}
