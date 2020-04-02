import React, { Component } from "react";
import "./App.css";

class Division extends Component {
  static defaultProps = { maxVal: 20 };
  render() {
    let num1 = Math.floor(Math.random() * this.props.maxVal + 1);
    let num2 = Math.floor(Math.random() * this.props.maxVal + 1);
    let ans = num1 * num2;
    return (
      <div className="Division">
        <div className="question">
          {ans} / {num2}
        </div>
        <div className="answer">{num1}</div>
      </div>
    );
  }
}

export default Division;
