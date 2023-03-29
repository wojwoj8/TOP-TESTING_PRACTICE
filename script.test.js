import { capital, rev, calculator } from './script';

test('capitalize', () => {
  expect(capital('asd')).toBe('Asd');
});

test('reverse', () => {
  expect(rev('asd')).toBe('dsa');
});

test('sum', () => {
  expect(calculator.sum(2, 4)).toBe(6);
});
test('sub', () => {
  expect(calculator.sub(2, 4)).toBe(-2);
});
test('mul', () => {
  expect(calculator.mul(2, 4)).toBe(8);
});
test('div', () => {
  expect(calculator.div(8, 2)).toBe(4);
});
