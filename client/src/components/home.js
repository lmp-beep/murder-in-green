// description
// login button
// signup button
import React from "react";
import {  Card } from "react-bootstrap";
import "./css/home.css";

import fingerprint from "../images/fingerprint.png";
import slogan from "../images/slogan.png";

function home() {
  return (
    <div className="row">
      <div className="col-5">
        <img src={fingerprint} className="fingerprint" alt="" />
        <img src={slogan} className="slogan" alt="" />
      </div>
      <Card className="home-card" style={{ width: "30rem", height: "35rem" }}>
  <Card.Body>
    <Card.Title className="home-title">Hi There!</Card.Title>
    <Card.Text className="home-text">
    {/* <p> */}
    We are Murdering Green a Carbon FingerPrint Crime Calculator. <br/>
    <br/>So if you love the planet more than people & planing your next crime we are here to help… <br/>
    <br/>by taking our quiz you can find out if your crime is sustainable enough to help the planet.
    {/* </p> */}
    </Card.Text>
    <h6>Let’start from a public or barrow computer</h6>
    <Card.Link className="home-links"  href="#/SignupForm">Create an Account</Card.Link>
    <Card.Link className="home-links" href="#/LoginForm">Log In</Card.Link>
  </Card.Body>
</Card>
    </div>
  );
}

export default home;

