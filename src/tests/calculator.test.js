const calculator = require('../js/calculator');

it('Add', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

it('Subtract', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

it('Multiply', () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

it('Divide', () => {
  expect(calculator.divide(1, 2)).toBe(0.5);
});
