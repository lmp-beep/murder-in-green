import React from "react";

import title from "../images/title.png";

function Header() {
  return (
    <div>
      <header>
        <img src={title} className="title" alt="Murdering Green" />
      </header>
    </div>
  );
}

export default Header;
