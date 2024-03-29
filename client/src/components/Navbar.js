import React from "react";
import "./css/navbar.css";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

import Mglogo from "../images/mglogo.png";
import GitHub from "../images/github.png";
import Auth from "../utils/auth";

const Navbar = () => {
  return (
    <Nav defaultActiveKey="/" className="flex-column">
      <Nav.Link as={Link} to="/">
        <img id="logo" src={Mglogo} alt="Murdering green logo" />
      </Nav.Link>
      <br></br>
      <Nav.Link as={Link} to="/AboutUs" className="nav-text">
        About Us
      </Nav.Link>
      {/* display log out, survey when user is log in */}
      {Auth.loggedIn() ? (
        <>
          <Nav.Link as={Link} to="/Survey" className="nav-text">
            Survey
          </Nav.Link>
          <Nav.Link onClick={() => Auth.logout()} className="nav-text">
            Log Out
          </Nav.Link>
        </>
      ) : (
        <>
          <Nav.Link as={Link} to="/LoginForm" className="nav-text">
            Log In
          </Nav.Link>
        </>
      )}
      <Nav.Link
        href="https://github.com/lmp-beep/murder-in-green"
        target="blank"
      >
        <img id="github-logo" src={GitHub} alt="github logo" />
      </Nav.Link>
    </Nav>
  );
};

export default Navbar;
