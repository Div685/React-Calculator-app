import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  render() {
    return (
      <div>
        <Display />
        <ButtonPanel name="Button" />
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <React.Fragment key="key">
//       <Display />
//       <ButtonPanel name="Button" />
//     </React.Fragment>
//   );
// }

// export default App;
