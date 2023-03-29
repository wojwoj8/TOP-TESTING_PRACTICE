import _, { min } from 'lodash';

function capital(string) {
  const capString = _.capitalize(string);
  return capString;
}

function rev(string) {
  const revString = [...string].reverse().join('');
  return revString;
}

const calculator = (() => {
  const sum = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const div = (a, b) => a / b;
  const mul = (a, b) => a * b;
  return {
    sum, sub, div, mul,
  };
})();

function caesarCipher(string, number) {
  const shiftedString = [...string].map((char) => {
    let shiftedCharCode = '';
    let num = 0;
    if (!(char.match(/[a-z]/i))) {
      shiftedCharCode = char.charCodeAt(0);
    } else {
      if (char.charCodeAt(0) > 96) {
        num = 96;
      } else {
        num = 64;
      }
      shiftedCharCode = ((char.charCodeAt(0) + number - num) % 26) + num;
    }
    return String.fromCharCode(shiftedCharCode);
  }).join('');

  return shiftedString;
}

function analyzeArray([...arr]) {
  const avg = (arr.reduce((s, val) => s + val, 0)) / arr.length;
  const len = arr.length;
  const minVal = Math.min(...arr);
  const maxVal = Math.max(...arr);

  return {
    average: avg,
    min: minVal,
    max: maxVal,
    length: len,
  };
}

export {
  capital, rev, calculator, caesarCipher, analyzeArray,
};
