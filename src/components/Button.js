import React from 'react';
import PropTypes from 'prop-types';
import '../style/Button.css';

const Button = ({ name, clickHandler }) => (
  <button className="btnName" type="button" onClick={() => clickHandler(name)}>
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
