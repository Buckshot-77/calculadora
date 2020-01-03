import React, { Component } from "react";
import "./Calculator.styles.css";
import Button from "../../components/Button/Button.component";
import Display from "../../components/Display/Display.component";

const defaultState = {
  displayValue: 0,
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}
export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {...defaultState}
  }

  clearCalculator = () => this.setState(defaultState);

  setOperation = operation => console.log(operation);

  addDigit = digit =>

    this.setState({
      displayValue:
        this.state.displayValue === 0
          ? digit
          : this.state.displayValue.concat(digit)
    });

  render() {
    return (
      <div className="calculator">
        <Display value={this.state.displayValue} />
        <Button label="AC" click={this.clearCalculator} triple />
        <Button label="/" click={this.setOperation} operation />
        <Button label="7" click={this.addDigit} />
        <Button label="8" click={this.addDigit} />
        <Button label="9" click={this.addDigit} />
        <Button label="*" click={this.setOperation} operation />
        <Button label="4" click={this.addDigit} />
        <Button label="5" click={this.addDigit} />
        <Button label="6" click={this.addDigit} />
        <Button label="-" click={this.setOperation} operation />
        <Button label="1" click={this.addDigit} />
        <Button label="2" click={this.addDigit} />
        <Button label="3" click={this.addDigit} />
        <Button label="+" click={this.setOperation} operation />
        <Button label="0" click={this.addDigit} double />
        <Button label="." click={this.addDigit} />
        <Button label="=" click={this.setOperation} operation />
      </div>
    );
  }
}
