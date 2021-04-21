import operate from '../../logic/operate';

describe('Operations', () => {
  it('checks for sum operator', () => {
    expect(operate('2', '1', '+')).toBe('3');
  });

  it('checks for subtraction operator', () => {
    expect(operate('2', '1', '-')).toBe('1');
  });

  it('checks for multiplicaiton operator', () => {
    expect(operate('2', '1', 'x')).toBe('2');
  });

  it('checks for subtraction operator', () => {
    expect(operate('2', '1', '÷')).toBe('2');
  });
});
