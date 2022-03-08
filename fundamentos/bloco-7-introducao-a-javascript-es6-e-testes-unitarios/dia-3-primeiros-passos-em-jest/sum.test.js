const {sum, myRemove} = require('./sum');

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

test('myRemove returns array minus item', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
})

test('myRemove do not return the same array', () => {
  expect(myRemove([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4]);
})

test('myRemove return expect array', () => {
  expect(myRemove([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
})
