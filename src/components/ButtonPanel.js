import React, { Component } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export default class ButtonPanel extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
}

ButtonPanel.propTypes = {
  name: PropTypes.string.isRequired,
};
