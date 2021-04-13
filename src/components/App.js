import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

function App() {
  return (
    <React.Fragment key="key">
      <Display name="Dispaly" />
      <ButtonPanel name="Button" />
    </React.Fragment>
  );
}

export default App;
