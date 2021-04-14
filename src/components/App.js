import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

function App() {
  return (
    <React.Fragment key="key">
      <Display />
      <ButtonPanel name="Button" />
    </React.Fragment>
  );
}

export default App;
