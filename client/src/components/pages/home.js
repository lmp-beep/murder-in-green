// description
// login button
// signup button

import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import fingerprint from "../images/fingerprint.png";
import slogan from "../images/slogan.png";

function home() {
  return (
    <div className="row">
      <div className="col-5">
        <img src={fingerprint} className="fingerprint" alt="" />
        <img src={slogan} className="slogan" alt="" />
      </div>

      <div className="col-7" id="col-featured">
        <div className="featured">
            <div>
                <p>
                    Thinking about committing a crime, but concerned about the effect on the environment?
                </p>
                <p>
                    Use the Carbon Fingerprint Calucaltor to determine the total greenhouse gas emissions caused by the event.
                </p>
            </div>
          <div className="col" id="btns">
            <Navbar className="buttons">
              <Nav className="buttons">
                <Nav.Link className="buttons" as={Link} to="/LoginForm">
                  <button id="login">LOGIN</button>
                </Nav.Link>
                <Nav.Link className="buttons" as={Link} to="/SignupForm">
                  <button id="signup">SIGNUP</button>
                </Nav.Link>
              </Nav>
            </Navbar>
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
