import React from "react";
import { Card, Button } from "react-bootstrap";
import "../components/css/results.css"
import fingerprint from "../images/fingerprint.png";
import slogan from "../images/slogan.png";



export default function Results () {
    return ( 
      <div className="row">
      <div className="col-5">
        <img src={fingerprint} className="fingerprint" alt="" />
        <img src={slogan} className="slogan" alt="" />
      </div>

        <Card style={{ width: '30rem' , height: "30rem"}}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>
    )
}

// suggestions to lower score

// retake quiz button

