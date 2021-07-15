import React from "react";

export default function Footer() {
  return (
    <footer>
      <div>
        <p className="footer-text" id="copyright">
          COPYRIGHT © OMEGA 2021
        </p>
        <ul className="footer-names">
          <li>
            <a href="https://github.com/ndorado3" target="blank">
              NADIA DORADO
            </a>
          </li> |
          <li>
            <a href="https://github.com/SavannahF" target="blank">
              SAVANNAH FORTSON
            </a>
          </li> |
          <li>
            <a href="https://github.com/acpatison" target="blank">
              ANDREW PATISON
            </a>
          </li> |
          <li>
            <a href="https://github.com/lmp-beep" target="blank">
              LISA PESSIN
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
