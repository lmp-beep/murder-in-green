import React from "react";
import { Card, Button } from "react-bootstrap";

import { QuestionsData } from "../components/QuestionsData";
import fingerprint from "../images/fingerprint.png";
import slogan from "../images/slogan.png";
import Results from "./results";
import "../components/css/survey.css";

export default class Survey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userAnswer: null,
      currentIndex: 0,
      options: [],
      surveyEnd: false,
      disabled: true, //the user can continue until it gives an answer
      totalCo2: 0,
    };
  }

  //component that holds the current survey
  loadSurvey = () => {
    const { currentIndex } = this.state;
    this.setState(() => {
      return {
        question: QuestionsData[currentIndex].question,
        options: QuestionsData[currentIndex].options,
        answer: QuestionsData[currentIndex].answer,
      };
    });
  };

  // here is where we add the value of CO2 to the answer I think
  nextQuestionHandler = () => {
    this.setState({
      currentIndex: this.state.currentIndex + 1,
      userAnswer: null,
    });
  };

  //   nextQuestionHander = () => {
  //     const {userAnswer, answer, totalCo2} = this.state
  //     this.setState({
  //         currentIndex: this.state.currentIndex + 1
  //     })
  //   //Check if correct answer and increment totalCo2
  //   if(userAnswer === answer){
  //       this.setState({
  //           totalCo2: totalCo2 + 1
  //       })
  //   }
  // }

  //calls the loadSurvey function when the app starts
  componentDidMount() {
    this.loadSurvey();
  }

  checkAnswer = (answer) => {
    this.setState({
      userAnswer: answer,
      disabled: false,
    });
  };

  // Change in state. updating the currentIndex to display the next question
  componentDidUpdate(prevProps, prevState) {
    const { currentIndex } = this.state;
    if (this.state.currentIndex !== prevState.currentIndex) {
      this.setState(() => {
        return {
          question: QuestionsData[currentIndex].question,
          options: QuestionsData[currentIndex].options,
          answer: QuestionsData[currentIndex].answer,
        };
      });
    }
  }

  //Responds to the click of the finish button
  finishHandler = () => {
    if (this.state.currentIndex === QuestionsData.length - 1) {
      this.setState({
        surveyEnd: true,
      });
    }
  };

  render() {
    const { question, options, currentIndex, userAnswer, surveyEnd } =
      this.state; //get the current state
    if (surveyEnd) {
      return (
        <div>
          <Results />
        </div>
      );
    }
    return (
      <div className="row">
        <div className="col-5">
          <img src={fingerprint} className="fingerprint" alt="" />
          <img src={slogan} className="slogan" alt="" />
        </div>
        <Card
          className="survey-card"
          style={{ width: "30rem", height: "35rem" }}
        >
          <Card.Body>
            <h2 className="instructions">
              {" "}
              Alias!!! <br></br>Let's calculate your Carbon FingerPrint one
              Crime at a time...
            </h2>
            <p className="instructionsB">
              {" "}
              by choosing one option per question
            </p>
            <hr size="5"></hr>
            <Card.Title className="question">{question}</Card.Title>
            <Card.Text className="survey-text">
              {options.map((option) => (
                <li
                  key={option.id}
                  className={`options ${
                    userAnswer === option ? "selected" : null
                  }`}
                  onClick={() => this.checkAnswer(option)}
                >
                  {option}
                </li>
              ))}
            </Card.Text>
            {currentIndex < QuestionsData.length - 1 && (
              <Button
                className="bt-next"
                disable={this.state.disabled}
                onClick={this.nextQuestionHandler}
                variant="danger"
              >
                Next Question
              </Button>
            )}
            {currentIndex === QuestionsData.length - 1 && (
              <Button
                className="bt-next"
                disable={this.state.disabled}
                onClick={this.finishHandler}
                variant="danger"
              >
                Submit
              </Button>
            )}
          </Card.Body>
        </Card>
      </div>
    );
  }
}
