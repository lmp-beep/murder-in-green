import React, { Fragment } from "react";
import Media from "react-media";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { setContext } from "@apollo/client/link/context";

import Header from "./Header";
import Home from "./home";
import LoginForm from "../pages/LoginForm";
import SignupForm from "../pages/SignupForm";
import Survey from "../pages/Survey";
import NavbarTop from "./NavbarTop";
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
  return (
    <ApolloProvider client={client}>
      <Router>
        {/* query breaks:
            xs maxWidth 599
            medium minWidth 600, maxWidth 1199
            large minWidth 1200, maxWidth 1399
            xlarge minWidth 1400 */}

        <Media
          queries={{
            xs: "(max-width: 599px)",
            small: "(min-width: 600px) and (max-width: 899px)",
            medium: "(min-width: 900px) and (max-width: 1199px)",
            large: "(min-width: 1200px) and (max-width: 1399px)",
            xlarge: "(min-width: 1400px)",
          }}
        >
          {(matches) => (
            <Fragment>
              {matches.xs && (
                <Container>
                  <p>I am xs!</p>
                  <Row>
                    <NavbarTop />
                    <Header />
                  </Row>
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
                </Container>
              )}

              {matches.small && (
                <Container>
                  <p>I am small!</p>
                  <Row>
                    <NavbarTop />
                    <Header />
                  </Row>
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
                </Container>
              )}

              {matches.medium && (
                <Container>
                  <p>I am medium!</p>
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
              )}

              {matches.large && (
                <Container>
                  <p>I am large!</p>
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
              )}

              {matches.xlarge && (
                <Container>
                  <p>I am xlarge!</p>
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
              )}
            </Fragment>
          )}
        </Media>
      </Router>
    </ApolloProvider>
  );
}
