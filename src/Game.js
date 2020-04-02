import React, { Component } from "react";
import "./Game.css";
import Multiplication from "./Multiplication";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }
  componentDidMount() {
    this.generateNums();
  }
  generateNums() {
    const number1 = Math.floor(Math.random() * this.state.maxVal + 2);
    const number2 = Math.floor(Math.random() * this.state.maxVal + 2);
    const answer = number1 * number2;
    this.setState({
      ...this.state,
      correct: null,
      answerInput: "",
      num1: number1,
      num2: number2,
      ans: answer
    });
  }
  change(val) {
    this.setState({ answerInput: val });
  }
  submit() {
    if (parseInt(this.state.answerInput) === this.state.ans) {
      this.setState({
        correct: true,
        num_answered: this.state.num_answered + 1
      });
      setTimeout(() => {
        this.generateNums();
      }, 2000);
    } else {
      this.setState({
        correct: false,
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
          disabled={this.state.correct}
          submit={this.submit}
          change={this.change}
          value={this.state.answerInput}
          num1={this.state.num1}
          num2={this.state.num2}
          ans={this.state.ans}
        />
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
