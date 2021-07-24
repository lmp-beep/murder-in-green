import React from "react";
// import {useQuery } from "@apollo/client";

import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// import {GET_ALIAS} from "../utils/queries";

// import {QuestionsData} from "../components/QuestionsData";

import "../components/css/results.css";
import weapon from "../images/gun.png";
import crimeScene from "../images/crime-scene.png";
import transportation from "../images/car.png";
import supplies from "../images/supplies.png";
import disposal from "../images/trashcan.png";
import victim from "../images/chalk-body.png";

import slogan from "../images/slogan.png";
import fingerprint from "../images/fingerprint.png";
// import "../App.css"
import "../components/css/results.css"
// import { QuestionsData } from "../components/QuestionsData";

export default function Results() {
  // const {data} = useQuery(GET_ALIAS);
  // const userData = data?.me || [];
  return (
    <div className="row">
      <div className="col-5">
        <img src={fingerprint} className="fingerprint" alt="" />
        <img src={slogan} className="slogan" alt="" />
      </div>

      <Card className="results-card" 
      // style={{ width: "30rem", height: "30rem" }}
      >
        <Card.Body>
          <Card.Title className="card-title">Thank you!!</Card.Title>
          {/* {userData.username} */}
          <Card.Text className="card-text">
            <p>We have your results...
            <br /> Your crime will produce (...) CO2</p>
            <li>
              <img src={weapon} alt="weapon icon" width="60" height="40" />
            </li>
            <li>
              <img src={crimeScene} alt="weapon icon" width="50" height="40" />
            </li>
            <li>
              <img
                src={transportation}
                alt="weapon icon"
                width="70"
                height="40"
              />
            </li>
            <li>
              <img src={supplies} alt="weapon icon" width="55" height="40" />
            </li>
            <li>
              <img src={disposal} alt="weapon icon" width="40" height="40" />
            </li>
            <li>
              <img src={victim} alt="weapon icon" width="50" height="40" />
            </li>
          </Card.Text>
          <div className="button">
          {/* <Button variant="danger" >Retake Quiz</Button> */}
          <Link to="/#/Survey#/Survey" className="btn">
            Retake Quiz
          </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
