import React, { Component } from "react";
import "./Game.css";
import Multiplication from "./Multiplication";
import Addition from "./Addition";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      correct: null,
      num_answered: 0,
      wrong_answers: 0,
      maxVal: 12,
      answerInput: "",
      num1: 0,
      num2: 0,
      ans: 0
    };
    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
    this.generate = this.generate.bind(this);
  }
  change(e, val) {
    this.setState({ answerInput: val });
  }
  generate() {
    const number1 = Math.floor(Math.random() * this.state.maxVal + 2);
    const number2 = Math.floor(Math.random() * this.state.maxVal + 2);
    this.setState({ num1: number1, num2: number2 });
  }
  submit(answerGiven, answer) {
    console.log(answerGiven, answer);
    if (parseInt(answerGiven) === answer) {
      this.setState({
        correct: true,
        num_answered: this.state.num_answered + 1
      });
      setTimeout(() => {
        this.generate();
        this.setState({ disabled: false, correct: null, answerInput: "" });
      }, 2000);
    } else {
      this.setState({
        correct: false,
        answerInput: "",
        wrong_answers: this.state.wrong_answers + 1
      });
    }
  }
  render() {
    let winLoseClass;
    if (this.state.correct === true) {
      winLoseClass = "result correct";
    } else if (this.state.correct === false) {
      winLoseClass = "result incorrect";
    } else {
      winLoseClass = "result";
    }
    return (
      <div className="Game">
        <Multiplication
          generate={this.generate}
          disabled={this.state.correct}
          submit={this.submit}
          change={this.change}
          value={this.state.answerInput}
          num1={this.state.num1}
          num2={this.state.num2}
        />
        {/* <Addition
          generate={this.generate}
          disabled={this.state.correct}
          submit={this.submit}
          change={this.change}
          value={this.state.answerInput}
          num1={this.state.num1}
          num2={this.state.num2}
        /> */}
        <div className="result-container">
          <div className={winLoseClass}>
            {this.state.correct ? <h2>Correct</h2> : <h2>Wrong, Try Again!</h2>}
          </div>
        </div>
        <h6 className="counter">
          Question answered: {this.state.num_answered}
        </h6>
        <p className="counter">
          Wrong answers given: {this.state.wrong_answers}
        </p>
      </div>
    );
  }
}

export default Game;
