import React from 'react';
import PropTypes from 'prop-types';
import '../style/Button.css';

const Button = ({
  name, clickHandler, color, wide,
}) => {
  const buttonStyle = {
    backgroundColor: color,
    width: wide !== true ? '25%' : '50%',
  };

  return (
    <button className={color} style={buttonStyle} type="button" onClick={() => clickHandler(name)}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  name: '',
  color: '#fff',
  wide: false,
};

export default Button;
