import _ from 'lodash';

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
  return { sum };
})();

export { capital, rev, calculator };
