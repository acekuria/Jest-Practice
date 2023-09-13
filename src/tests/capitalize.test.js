const capitalize = require('../js/capitalize');

it('Capitalize', () => {
  expect(capitalize('test')).toMatch('Test');
});
