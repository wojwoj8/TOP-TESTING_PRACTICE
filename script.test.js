import {
  capital, rev, calculator, caesarCipher, analyzeArray,
} from './script';

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

test('cezar', () => {
  expect(caesarCipher('Hello, World!', 0)).toBe('Hello, World!');
});
test('cezar', () => {
  expect(caesarCipher('Hello, World!', 1)).toBe('Ifmmp, Xpsme!');
});
test('cezar', () => {
  expect(caesarCipher('Zz,!0', 1)).toBe('Aa,!0');
});
test('cezar', () => {
  expect(caesarCipher('Hello, World!', 4)).toBe('Lipps, Asvph!');
});

test('average', () => {
  const data = analyzeArray([1, 3, 5, -1]);
  expect(data).toEqual({
    average: 2,
    min: -1,
    max: 5,
    length: 4,
  });
});
