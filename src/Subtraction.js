import React, { Component } from "react";

class Subtraction extends Component {
  static defaultProps = { maxVal: 20 };
  render() {
    let num1 = Math.floor(Math.random() * this.props.maxVal + 1);
    let num2 = Math.floor(Math.random() * this.props.maxVal + 1);
    let ans = num1 - num2;
    return (
      <div className="Subtraction">
        <div className="question">
          {num1} - {num2}
        </div>
        <div className="answer">{ans}</div>
      </div>
    );
  }
}

export default Subtraction;
