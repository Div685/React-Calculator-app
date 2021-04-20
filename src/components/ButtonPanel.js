import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../style/ButtonPanel.css';

function ButtonPanel({ clickHandler }) {
  const buttonNames = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];
  const orangeButtons = ['÷', 'x', '-', '+', '='];
  const wideButton = '0';
  let buttonKey = 0;
  let groupKey = 0;
  return (
    <div className="main-div">
      {
        buttonNames.map((group) => {
          groupKey += 1;
          return (
            <div className="group-row" key={groupKey}>
              {group.map((name) => {
                buttonKey += 1;
                return (
                  <Button key={buttonKey} name={name} clickHandler={clickHandler} color={orangeButtons.includes(name) ? '#F5913E' : null} wide={wideButton === name} />
                );
              })}
            </div>
          );
        })
    }
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
