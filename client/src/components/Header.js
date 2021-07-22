import React from "react";
import "./css/header.css";
import title from "../images/title.png";

function Header() {
  return (
      <header className = "header">
        <img src={title} className="title" alt="Murdering Green" />
      </header>
  );
}

export default Header;
