import React, { useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { setContext } from "@apollo/client/link/context";
import { Container, Row, Col } from "react-bootstrap";

// import Auth from "../utils/auth";
// import { AuthContext } from "../context";

import Header from "./Header";
import Home from "./home";
import LoginForm from "../pages/LoginForm";
import SignupForm from "../pages/SignupForm";
import Survey from "../pages/Survey";
import Navbar from "./Navbar";
import AboutUs from "../pages/About";


const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App() {
  // const [isLogin] = useState(Auth.loggedIn());
//   const [isLoggedIn, setLoggedIn] = useState(false);
//   const login = () => {
//     setLoggedIn(true);
//   };
// const logout = () =>{
//   setLoggedIn(false);
// }
  return (
    <ApolloProvider client={client}>
      {/* <AuthContext.Provider value={isLoggedIn:isLoggedIn, login.login, logout.logout}> */}

      <Router>
        <Container>
          <Row>
            <Col xs={2}>
              <Navbar />
            </Col>
            <Col xs={10}>
              <Row>
                <Header />
              </Row>
              <Row>
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route exact path="/AboutUs">
                    <AboutUs />
                  </Route>
                  <Route exact path="/LoginForm">
                    <LoginForm />
                  </Route>
                  <Route exact path="/SignupForm">
                    <SignupForm />
                  </Route>
                  <Route exact path="/Survey">
                    <Survey />
                  </Route>
                  <Route path="*">
                    <Home />
                  </Route>
                </Switch>
              </Row>
            </Col>
          </Row>
        </Container>
      </Router>
      {/* </AuthContext.Provider> */}
    </ApolloProvider>
  );
}
