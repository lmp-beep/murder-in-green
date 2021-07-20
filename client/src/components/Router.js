import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import Home from "./home";
import LoginForm from "../pages/LoginForm";
import SignupForm from "../pages/SignupForm";
import Survey from "../pages/Survey";
import Navbar from "./Navbar";


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
  return (
    <ApolloProvider client={client}>
    <Router>
      <div>
        <Navbar />
        <Header />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
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
        </div>
      </div>
    </Router>
    </ApolloProvider>

  );
}
