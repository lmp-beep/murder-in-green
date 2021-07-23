import React, { useState } from "react";
import { Form, Button, Alert, Card } from "react-bootstrap";
import { useMutation } from "@apollo/client";

import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

import fingerprint from "../images/fingerprint.png";
import slogan from "../images/slogan.png";
import "../components/css/login-signup.css";

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [login] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    // added code
    try {
      const { data } = await login({
        variables: { ...userFormData },
      });
      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="row">
      <div className="col-5">
        <img src={fingerprint} className="fingerprint" alt="" />
        <img src={slogan} className="slogan" alt="" />
      </div>
      <>
        <Card
          className="login-card"
          style={{ width: "30rem", height: "35rem" }}
        >
          <Card.Title className="login-title">Log In</Card.Title>
          <Form
            className="login-form"
            noValidate
            validated={validated}
            onSubmit={handleFormSubmit}
          >
            <Alert
              dismissible
              onClose={() => setShowAlert(false)}
              show={showAlert}
              variant="danger"
            >
              Something went wrong with your login credentials!
            </Alert>
            <Form.Group className="email">
              <Form.Label htmlFor="email">Junk Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="alias@junkemail.com"
                name="email"
                onChange={handleInputChange}
                value={userFormData.email}
                required
              />
              <Form.Control.Feedback type="invalid">
                Email is required!
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="password">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Alias's password"
                name="password"
                onChange={handleInputChange}
                value={userFormData.password}
                required
              />
              <Form.Control.Feedback type="invalid">
                Password is required!
              </Form.Control.Feedback>
            </Form.Group>
            <h6 className="password-inst">
              Remember that the password is 6 characters long.
            </h6>
            <Button
              className="bt-login"
              disabled={!(userFormData.email && userFormData.password)}
              type="submit"
              variant="danger"
            >
              Submit
            </Button>
          </Form>
          <Card.Link className="create-acc" href="#/SignupForm">
            Create Account
          </Card.Link>
        </Card>
      </>
    </div>
  );
};

export default LoginForm;
