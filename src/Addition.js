import React, { Component } from "react";

class Addition extends Component {
  static defaultProps = { maxVal: 10 };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.generateNums = this.generateNums.bind(this);
  }
  componentDidMount() {
    this.props.generate();
  }
  handleChange(e) {
    this.props.change(e.target.value);
  }
  handleClick() {
    let answer = this.props.num1 + this.props.num2;
    this.props.submit(this.props.value, answer);
  }
  generateNums() {
    this.props.generate();
  }
  render() {
    return (
      <div className="Addition">
        <div className="question">
          {this.props.num1} + {this.props.num2}
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

export default Addition;
