import operate from './operate';

const calculate = (data, buttonName) => {
  const newData = { ...data };
  let { total, next, operation } = newData;

  if (buttonName === 'AC') {
    total = '';
    next = '';
    operation = null;
  } else if (buttonName === '÷' || buttonName === '-' || buttonName === '+' || buttonName === 'x') {
    operation = !next ? buttonName : null;
  } else if (buttonName === '%') {
    if (next) {
      next = (next / 100).toString();
    } else {
      total = (total / 100).toString();
    }
  } else if (buttonName === '+/-') {
    if (next) {
      next = (next * -1).toString();
    } else if (total) {
      total = (total * -1).toString();
    }
  } else if (buttonName === '=') {
    if (total && next && operation) {
      total = operate(total, next, operation);
      next = '';
      operation = null;
    }
  } else if (!operation) {
    total += buttonName;
  } else {
    next += buttonName;
  }

  return { total, next, operation };

  // if (btnName === 'AC') {
  //   newData.total = '';
  //   newData.next = '';
  //   newData.operation = null;
  // } else if (btnName === '+/-') {
  //   if (newData.next) {
  //     newData.next = (newData.next * -1).toString();
  //   } else if (newData.total) {
  //     newData.total = (newData.total * -1).toString();
  //   }
  // } else if (btnName === '÷' || btnName === '-' || btnName === '+' || btnName === 'X') {
  //   newData.operation = !newData.next ? btnName : null;
  // } else if (btnName === '%') {
  //   if (newData.next) {
  //     newData.next = (newData.next / 100).toString();
  //   } else {
  //     newData.total = (newData.total / 100).toString();
  //   }
  // } else if (btnName === '=') {
  //   newData.total = operate(newData.total, newData.next, newData.operation);
  //   newData.next = '';
  //   newData.operation = null;
  // } else if (!newData.operation) {
  //   newData.total += btnName;
  // } else {
  //   newData.next += btnName;
  // }

  // return newData;
};

export default calculate;
