const analyzeArray = require('../js/analyze');

it('returns average from array of numbers', () => {
  const result = analyzeArray([1, 2, 3, 4, 5]);
  expect(result.average).toBe(3);
});

it('returns min from array of numbers', () => {
  const result = analyzeArray([1, 2, 3, 4, 5]);
  expect(result.min).toBe(1);
});

it('returns max from array of numbers', () => {
  const result = analyzeArray([1, 2, 3, 4, 5]);
  expect(result.max).toBe(5);
});

it('returns length of array', () => {
  const result = analyzeArray([1, 2, 3, 4, 5]);
  expect(result.length).toBe(5);
});
