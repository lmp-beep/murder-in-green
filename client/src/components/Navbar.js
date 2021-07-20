import React from "react";
import "./css/navbar.css";
import { Link } from "react-router-dom";

import Nav from 'react-bootstrap/Nav';

function Navbar() {
    return (
        <Nav defaultActiveKey="/home" className="flex-column" >
        <Nav.Link href="/home">Active</Nav.Link>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
        <Nav.Link as={Link} to = "/Survey">Survey</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav>
        )
  }
  
  export default Navbar;