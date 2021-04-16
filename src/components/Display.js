import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ total, next }) => (
  <div className="display">
    <span>{(next && next.toString()) || (total && total.toString()) || '0'}</span>
    {console.log(total, next)}
  </div>
);
// class Display extends React.Component {
//   render() {
//     const { result } = this.props;
//     console.log(result);
//     return (
//       <div>
//         <h1>{ result }</h1>
//       </div>
//     );
//   }
// }

Display.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
};

Display.defaultProps = { total: '', next: '' };

export default Display;
