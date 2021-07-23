// Savannah changes
import React from "react";
import "./css/navbar.css";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

import Mglogo from "../images/mglogo.png";
import Auth from "../utils/auth";

// import SignupForm from "../pages/SignupForm"
// import LoginForm from "../pages/LoginForm"

const Navbar = () => {
  return (
    <Nav defaultActiveKey="/" className="flex-column">
      <Nav.Link as={Link} to="/">
        <img
          src={Mglogo}
          width="40"
          height="40"
          className="d-inline-block align-top"
          alt="Murdering green logo"
        />
      </Nav.Link>
      {/* display log out, survey when user is log in */}
      {Auth.loggedIn() ? (
        <>
          <Nav.Link as={Link} to="/Survey">
            Survey
          </Nav.Link>
          <Nav.Link onClick={Auth.logout()}>Log Out</Nav.Link>
        </>
      ) : (
        <Nav.Link as={Link} to="/LoginForm">
          Log In
        </Nav.Link>
      )}
    </Nav>
  );
};

export default Navbar;
