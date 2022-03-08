const sum = require('./sum');

test('sums two values', () => {
  expect(sum(2, 3)).toBe(5);
});

test('sums four and five is equal nine', () => {
  expect(sum(4, 5)).toBe(9);
});

test('sums zero and zero is equal zero', () => {
  expect(sum(0, 0)).toBe(0);
});

test('sums error typeof NaN', () => {
  const sumString = () => {
    sum(4, '5');
  }
  expect(sumString).toThrowError(new Error('parameters must be numbers'));
});
