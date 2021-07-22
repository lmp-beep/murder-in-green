import React from "react";
import "./css/navbar.css";
import { Link } from "react-router-dom";

import Nav from 'react-bootstrap/Nav';
import mgLogo from "../images/mglogo.png";
import gitHubRed from "../images/githubred.png";

function Navbar() {
    return (
        <Nav defaultActiveKey="/home" className="flex-column" >
          <img src={mgLogo} id="logo" alt="Murdering Green" />
          <div className = "link-container">
            {/* <Nav.Link href="/" className="nav-link">Home</Nav.Link> */}
            <Nav.Link eventKey="/login">Login</Nav.Link>
            <Nav.Link as={Link} to = "/about-us">About Us</Nav.Link>
          </div>
          <img src={gitHubRed} id="gitHub" alt="Git Hub Logo" />
      </Nav>
        )
  }
  
  export default Navbar;