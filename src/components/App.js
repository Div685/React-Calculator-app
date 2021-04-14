import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

function App() {
  return (
    <React.Fragment key="key">
      <Display />
      <ButtonPanel name="Button" />
    </React.Fragment>
  );
}

calculate();

export default App;
