import React, { useState } from "react";
import { Form, Button, Alert, Card } from "react-bootstrap";
import { useMutation } from "@apollo/client";


import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

import fingerprint from "../images/fingerprint.png";
import slogan from "../images/slogan.png";

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  //Adduser mutuation functionality
  const [addUser] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!userFormData.email && !userFormData.password) {
      return;
     }

    // added a new user
    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });
      Auth.login(data.addUser.token);
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
          <Card.Title className="login-title">Create a New Account</Card.Title>
          <h6 className="create-acc-inst">
            Our apologies, but you must create an account in order to use our
            services. However, we suggest you use an Alias and a Junk Email that
            can't be traced back to you.
          </h6>
          {/* This is needed for the validation functionality above */}
          <Form
            className="login-form"
            noValidate
            validated={validated}
            onSubmit={handleFormSubmit}
          >
            {/* show alert if server response is bad */}
            <Alert
              dismissible
              onClose={() => setShowAlert(false)}
              show={showAlert}
              variant="danger"
            >
              Something went wrong with your signup!
            </Alert>

            <Form.Group className="alias">
              <Form.Label htmlFor="username">Alias</Form.Label>
              <Form.Control
                type="text"
                placeholder="A.K.A"
                name="username"
                onChange={handleInputChange}
                value={userFormData.username}
                required
              />
              <Form.Control.Feedback type="invalid">
                Alias is required!
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="alias">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="a.k.a@junkemail.com"
                name="email"
                onChange={handleInputChange}
                value={userFormData.email}
                required
              />
              <Form.Control.Feedback type="invalid">
                Email is required!
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="alias">
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
              Password must be 6 characters long. It can be your Alias's
              birthday.{" "}
            </h6>
            <Button
              className="bt-login"
              disabled={
                !(
                  userFormData.username &&
                  userFormData.email &&
                  userFormData.password
                )
              }
              type="submit"
              variant="danger"
            >
              Submit
            </Button>
          </Form>
        </Card>
      </>
    </div>
  );
};

export default SignupForm;
