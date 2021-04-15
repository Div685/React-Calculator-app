import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

// eslint-disable-next-line react/prefer-stateless-function
export default class ButtonPanel extends Component {
  render() {
    const { clickHandler } = this.props;
    // console.log('button Panel:', clickHandler);
    return (
      <div className="main-div">
        <div className="group-1">
          <Button name="AC" clickHandler={clickHandler} />
          <Button name="+/-" clickHandler={clickHandler} />
          <Button name="%" />
          <Button name="÷" />
        </div>
        <div className="group-2">
          <Button name="7" />
          <Button name="8" />
          <Button name="9" />
          <Button name="X" />
        </div>
        <div className="group-3">
          <Button name="4" />
          <Button name="5" />
          <Button name="6" />
          <Button name="-" />
        </div>
        <div className="group-4">
          <Button name="1" />
          <Button name="2" />
          <Button name="3" />
          <Button name="+" />
        </div>
        <div className="group-5">
          <Button name="0" />
          <Button name=" . " />
          <Button name="=" />
        </div>
      </div>
    );
  }
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
