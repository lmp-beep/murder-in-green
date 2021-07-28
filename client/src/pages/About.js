import React from "react";
import "../components/css/about.css";
import AndrewMug from "../images/AndrewMugshot.jpg";
import NadiaMug from "../images/NadiaMugshot.jpg";
import SavannahMug from "../images/SavannahMugshot.jpg";
import LisaMug from "../images/LisaMugshot.jpg";

function About() {
  return (
    <div className="row">
      <ul>
        <li>
          <a href="https://github.com/ndorado3" target="blank">
            <img src={NadiaMug} className="mugshot"></img>Nadia Dorado
          </a>
        </li>

        <li>
          <a href="https://github.com/SavannahF" target="blank">
            <img src={SavannahMug} className="mugshot"></img>Savannah Fortson
          </a>
        </li>

        <li>
          <a href="https://github.com/acpatison" target="blank">
            <img src={AndrewMug} className="mugshot"></img>Andrew Patison
          </a>
        </li>

        <li>
          <a href="https://github.com/lmp-beep" target="blank">
            <img src={LisaMug} className="mugshot"></img>Lisa Pessin
          </a>
        </li>
      </ul>
    </div>
  );
}

export default About;
