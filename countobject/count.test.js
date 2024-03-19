const getCount = require('./count');

test('Count objects where x is equal to y', () => {
  const objects = [{ x: 1, y: 1 }, { x: 2, y: 3 }, { x: 4, y: 4 }];
  expect(getCount(objects)).toBe(2);
});

test('Empty array should return 0', () => {
  const objects = [];
  expect(getCount(objects)).toBe(0);
});

test('Array with non-matching objects should return 0', () => {
  const objects = [{ x: 1, y: 2 }, { x: 3, y: 4 }, { x: 5, y: 6 }];
  expect(getCount(objects)).toBe(0);
});
