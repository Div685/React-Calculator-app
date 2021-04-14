import Big from 'big.js';

const plus = (a, b) => `${a.plus(b)}`;

const subtract = (a, b) => a.minus(b).valueOf();

const divide = (a, b) => (`${b}` === '0' ? 'INFINITY' : a.div(b).valueOf());

const multiply = (a, b) => a.times(b).valueOf();

function operate(numberOne, numberTwo, operation) {
  const num1 = new Big(numberOne);
  const num2 = new Big(numberTwo);

  const expr = operation;
  switch (expr) {
    case '+':
      return plus(num1, num2);
    case '-':
      return subtract(num1, num2);
    case 'X':
      return multiply(num1, num2);
    case '÷':
      return divide(num1, num2);
    case '%':
      return num1.mod(num2);
    default:
      return null;
  }
}

export default operate;

console.log(operate(3, 5, '+'));
console.log(operate(0.3, 0.1, '-'));
console.log(operate(355, 0, '÷'));
