import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../style/ButtonPanel.css';

function ButtonPanel({ clickHandler }) {
  return (
    <div className="main-div">
      <div className="group-row">
        <Button clickHandler={clickHandler} name="AC" />
        <Button name="+/-" clickHandler={clickHandler} />
        <Button name="%" clickHandler={clickHandler} />
        <Button name="÷" clickHandler={clickHandler} />
      </div>
      <div className="group-row">
        <Button name="7" clickHandler={clickHandler} />
        <Button name="8" clickHandler={clickHandler} />
        <Button name="9" clickHandler={clickHandler} />
        <Button name="x" clickHandler={clickHandler} />
      </div>
      <div className="group-row">
        <Button name="4" clickHandler={clickHandler} />
        <Button name="5" clickHandler={clickHandler} />
        <Button name="6" clickHandler={clickHandler} />
        <Button name="-" clickHandler={clickHandler} />
      </div>
      <div className="group-row">
        <Button name="1" clickHandler={clickHandler} />
        <Button name="2" clickHandler={clickHandler} />
        <Button name="3" clickHandler={clickHandler} />
        <Button name="+" clickHandler={clickHandler} />
      </div>
      <div className="group-row">
        <Button name="0" clickHandler={clickHandler} />
        <Button name="." clickHandler={clickHandler} />
        <Button name="=" clickHandler={clickHandler} />
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};

ButtonPanel.defaultProps = {
  clickHandler: null,
};

export default ButtonPanel;
