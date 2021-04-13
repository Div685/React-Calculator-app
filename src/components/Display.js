/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <h1>{ name }</h1>
      </div>
    );
  }
}

Display.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Display;
