import React, { Component } from 'react';
import Button from './Button';

// eslint-disable-next-line react/prefer-stateless-function
export default class ButtonPanel extends Component {
  render() {
    return (
      <div className="main-div">
        <div className="group-1">
          <Button name="AC" />
          <Button name="+/-" />
          <Button name="%" />
          <Button name="÷" />
        </div>
        <div lassName="group-2">
          <Button name="7" />
          <Button name="8" />
          <Button name="9" />
          <Button name="X" />
        </div>
        <div lassName="group-3">
          <Button name="4" />
          <Button name="5" />
          <Button name="6" />
          <Button name="-" />
        </div>
        <div>
          <Button name="1" />
          <Button name="2" />
          <Button name="3" />
          <Button name="+" />
        </div>
        <div>
          <Button name="0" />
          <Button name=" . " />
          <Button name="=" />
        </div>
      </div>
    );
  }
}
