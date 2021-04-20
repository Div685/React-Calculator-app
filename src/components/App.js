import React, { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';
import '../style/App.css';

const App = () => {
  const [newState, setNewState] = useState({
    total: '',
    next: '',
    operation: null,
  });

  const handleClick = (buttonName) => {
    const newStatee = calculate(newState, buttonName);
    setNewState({ ...newStatee });
  };

  const { total, next } = newState;

  return (
    <div className="main-calc">
      <Display total={total} next={next} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default App;
