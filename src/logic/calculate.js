import operate from './operate';

const calculate = ({
  total,
  next,
  operation,
}, buttonName) => {
  const result = {};
  switch (buttonName) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '+/-':
      if (next) {
        result.total = parseFloat(next) * -1;
      }
      break;
    case 'AC':
      result.total = 0;
      result.next = '';
      result.operation = '';
      break;
    case '.':
      if (next) {
        result.next = next + buttonName;
      } else {
        result.next = buttonName;
      }
      break;
    case '=':
      if (operation) {
        result.next = operate(total, parseFloat(next), operation);
        result.operation = null;
      } else if (next) {
        result.next = parseFloat(next);
        result.operation = null;
      } else {
        result.next = 0;
        result.operation = null;
      }
      break;
    default:
      if (operation) {
        result.total = operate(total, parseFloat(next), operation);
      } else {
        result.total = parseFloat(next);
      }
      result.next = '0';
      result.operation = buttonName;
  }
};

export default calculate;
