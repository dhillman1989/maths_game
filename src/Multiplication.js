import React, { Component } from "react";

class Multiplication extends Component {
  static defaultProps = { maxVal: 500 };
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e) {
    this.props.change(e.target.value);
  }
  handleClick(e) {
    e.preventDefault();
    this.props.submit();
  }
  render() {
    return (
      <div className="Multiplication">
        <div className="question">
          {this.props.num1} * {this.props.num2}
        </div>
        <input
          onChange={this.handleChange}
          value={this.props.value}
          className="answer"
        />
        <button disabled={this.props.disabled} onClick={this.handleClick}>
          Check Answer
        </button>
      </div>
    );
  }
}

export default Multiplication;
