import React, { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
// import calculate from '../logic/calculate';

const App = () => {
  const [newState, setNewState] = useState(null);


  <div className="main-calc">
    <Display />
    <ButtonPanel />
  </div>
};

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       total: '',
//       next: '',
//       operation: null,
//     };

//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(buttonName) {
//     const newState = calculate(this.state, buttonName);
//     this.setState(() => ({ ...newState }));
//   }

//   render() {
//     const { total, next } = this.state;
//     return (
//       <div className="main-calc">
//         <Display total={total} next={next} />
//         <ButtonPanel clickHandler={this.handleClick} />
//       </div>
//     );
//   }
// }

export default App;
