const curry = require('./curry');
// relying on Lodash's battle-tested curry method as a control
const _curry = require('lodash/curry');

// simple summing curried function; maybe a more practical example will follow
// ... but probably not.
function sumOfThreeNumbers(a, b, c) {
  return a + b + c;
}

const curried = curry(sumOfThreeNumbers);
const _curried = _curry(sumOfThreeNumbers);
const partiallyCurried = curried(1);
const _partiallyCurried = _curried(1);

describe('curry.js', () => {
  it('should return a function', () => {
    expect(typeof curried).toEqual('function');
    expect(typeof curried).toEqual(typeof _curried);
  });

  it('should return a func honoring the given function\'s signature', () => {
    expect(curried(1, 2, 3)).toEqual(6);
    expect(curried(1, 2, 3)).toEqual(_curried(1, 2, 3));
  });

  it('should return a func that can be fully curried', () => {
    expect(curried(1)(2)(3)).toEqual(6);
    expect(curried(1)(2)(3)).toEqual(_curried(1)(2)(3));
  });

  it ('should return a func that can be partially curried', () => {
    expect(curried(1)(2, 3)).toEqual(6);
    expect(curried(1)(2, 3)).toEqual(_curried(1)(2, 3));
  });

  it('should return partially curried function when args are not supplied', () => {
    expect(typeof partiallyCurried).toEqual('function');
    expect(typeof partiallyCurried).toEqual(typeof _partiallyCurried);

    expect(partiallyCurried(2)(3)).toEqual(6);
    expect(partiallyCurried(2)(3)).toEqual(_partiallyCurried(2)(3));
  });
});
