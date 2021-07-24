// Savannah changes
import React from "react";
import "./css/navbar.css";
import { Link, useHistory } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

import Mglogo from "../images/mglogo.png";
import GitHub from "../images/github.png";
// import GitHub2 from "../images/github2.png";
import Auth from "../utils/auth";

// import SignupForm from "../pages/SignupForm"
// import LoginForm from "../pages/LoginForm"

const Navbar = () => {

  const history = useHistory();
  const logoutHandler = () => {
    Auth.logout();
    history.push("/");
  };
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
      {true? (
        <>
          <Nav.Link as={Link} to="/Survey" className="nav-text">
            Survey
          </Nav.Link>
          <Nav.Link onClick={() => logoutHandler()} className="nav-text">
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
