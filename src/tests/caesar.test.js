const caesar = require('../js/caesar');

it('Caesar Cipher', () => {
  expect(caesar('abc', 3)).toBe('def');
});

it('Caesar Wrapping', () => {
  expect(caesar('xyz', 3)).toBe('abc');
});

it('Caesar Case', () => {
  expect(caesar('XyZ', 3)).toBe('AbC');
});

it('Caesar Negative', () => {
  expect(caesar('abc', -1)).toBe('zab');
});

it('should handle punctuation correctly', () => {
  expect(caesar('Testing...123', 5)).toBe('Yjxynsl...123');
});
