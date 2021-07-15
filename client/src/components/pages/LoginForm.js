// ALIAS
// PASSWORD

import React from "react";

import fingerprint from "../images/fingerprint.png";
import slogan from "../images/slogan.png";

function LoginForm() {
  return (
    <div className="row">
      <div className="col-5">
        <img src={fingerprint} className="fingerprint" alt="" />
        <img src={slogan} className="slogan" alt="" />
      </div>

      <div className="col-7" id="col-featured">
        <div className="featured login-form">
          LOGIN FORM
          <button>SUBMIT</button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
