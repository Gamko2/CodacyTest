const math = require('./js/math.js');

test('adds 1 + 2 to equal 3', () => {
  expect(math.addition(1, 2)).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
  expect(math.sub(2, 1)).toBe(1);
});
